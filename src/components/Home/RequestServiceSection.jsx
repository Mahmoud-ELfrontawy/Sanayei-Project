import "./RequestServiceSection.css";
// import bg from "../../sanayei-img/bggg1.jpg"

// RequestServiceSection.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./RequestServiceSection.css";

// API endpoints (عدّل لو هيتغير)
const SUBMIT_API_URL = "https://c75698c89b95.ngrok-free.app/api/service-request";
const SERVICES_API_URL = "https://c75698c89b95.ngrok-free.app/api/services";
const ARTISANS_API_URL = "https://c75698c89b95.ngrok-free.app/api/workers";

// ثابتات واجهة (يمكن إزالتها لو API يرجعهم)
const defaultCities = ["القاهرة", "الجيزة", "الإسكندرية"];
const defaultDays = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
const defaultTimes = ["9:00 ص", "11:00 ص", "1:00 م", "3:00 م", "5:00 م", "7:00 م"];

const USE_MOCK_IF_FAIL = true;

// helper icon (لو عندك أيقونة خارجية استبدلها)
function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <path fill="currentColor" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  );
}

export default function RequestServiceSection() {
  // form state
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    city: "", address: "",
    day: "", time: "",
    service_id: "", artisan_id: ""
  });

  // helper to update a single field in the form state
  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  // options state
  const [services, setServices] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [cities, setCities] = useState(defaultCities);
  const [days, setDays] = useState(defaultDays);
  const [times, setTimes] = useState(defaultTimes);

  // loading / messages
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [optionsError, setOptionsError] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // toggle this to true to use mock data even if API calls fail
  // toggle this to true to use mock data even if API calls fail
  const USE_MOCK_IF_FAIL = true;

  // --- load services & artisans using axios ---
  useEffect(() => {
    let mounted = true;
    setLoadingOptions(true);
    setOptionsError(null);

    const fetchAll = async () => {
      try {
        // request both in parallel
        const [svcRes, artRes] = await Promise.all([
          axios.get(SERVICES_API_URL, { headers: { "ngrok-skip-browser-warning": "true" } }),
          axios.get(ARTISANS_API_URL, { headers: { "ngrok-skip-browser-warning": "true" } })
        ]);

        if (!mounted) return;

        // normalize: many APIs return { services: [...] } or just [...]
        const svcData = svcRes.data?.services ?? svcRes.data ?? [];
        const artData = artRes.data?.workers ?? artRes.data ?? [];

        // If API returned objects, ensure shape {id, title/name}
        const normalizedServices = Array.isArray(svcData) ? svcData.map((s, i) => {
          return typeof s === "object" ? { id: s.id ?? s.service_id ?? i, title: s.title ?? s.name ?? s.service ?? String(s) } : { id: i, title: String(s) };
        }) : [];

        const normalizedArtisans = Array.isArray(artData) ? artData.map((a, i) => {
          return typeof a === "object" ? { id: a.id ?? a.worker_id ?? i, name: a.name ?? a.full_name ?? a.title ?? String(a) } : { id: i, name: String(a) };
        }) : [];

        setServices(normalizedServices);
        setArtisans(normalizedArtisans);

        // optionally set cities/days/times if API returned them
        if (svcRes.data?.cities) setCities(svcRes.data.cities);
        if (svcRes.data?.days) setDays(svcRes.data.days);
        if (svcRes.data?.times) setTimes(svcRes.data.times);

        setLoadingOptions(false);
      } catch (err) {
        console.error("Options fetch error (axios):", err);
        if (!mounted) return;

        setOptionsError("تعذر جلب الخيارات من الخادم.");

        if (USE_MOCK_IF_FAIL) {
          // fallback mock data so UI remains usable
          setServices([
            { id: 1, title: "سباكة" }, { id: 2, title: "كهرباء" },
            { id: 3, title: "دهانات" }, { id: 4, title: "نجارة" }
          ]);
          setArtisans([
            { id: 1, name: "عم حسن" }, { id: 2, name: "عم خالد" },
            { id: 3, name: "عم سامي" }
          ]);
        }
        setLoadingOptions(false);
      }
    };

    fetchAll();

    return () => { mounted = false; };
  }, [USE_MOCK_IF_FAIL]);

  // validation helper
  const validate = () => {
    if (!form.name.trim()) return setSubmitError("من فضلك اكتب اسمك.");
    if (!form.phone.trim()) return setSubmitError("من فضلك اكتب رقم الهاتف.");
    if (!form.email.trim()) return setSubmitError("من فضلك اكتب البريد الإلكتروني.");
    if (!form.city) return setSubmitError("اختر المحافظة.");
    if (!form.address.trim()) return setSubmitError("اكتب العنوان بالتفصيل.");
    if (!form.day) return setSubmitError("اختر اليوم.");
    if (!form.time) return setSubmitError("اختر الوقت.");
    if (!form.service_id) return setSubmitError("اختر الخدمة.");
    if (!form.artisan_id) return setSubmitError("اختر الصنايعي.");
    setSubmitError(null);
    return true;
  };

  // submit using axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(null);
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    // Map form -> expected API fields (common Laravel expectation)
    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      governorate: form.city,   // if backend expects governorate
      address: form.address,
      day: form.day,
      time: form.time,
      service_id: Number(form.service_id),
      worker_id: Number(form.artisan_id), // worker_id expected by backend
    };

    try {
      const res = await axios.post(SUBMIT_API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // ngrok helper header (only if ngrok blocks warnings)
          "ngrok-skip-browser-warning": "true"
        },
        validateStatus: () => true // we'll handle status codes manually
      });

      // If validation error 422 -> res.data likely has errors object
      if (res.status === 422) {
        const serverErrors = res.data?.errors;
        const message = serverErrors
          ? Object.values(serverErrors).flat().join(" ; ")
          : (res.data?.message ?? "هناك خطأ في بيانات الإدخال.");
        setSubmitError(message);
        console.warn("Validation errors:", serverErrors, res.data);
        return;
      }

      if (res.status >= 200 && res.status < 300) {
        setSubmitSuccess("تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.");
        // reset form
        setForm({
          name: "", phone: "", email: "", city: "", address: "", day: "", time: "", service_id: "", artisan_id: ""
        });
      } else {
        // other errors
        const srvMsg = res.data?.message ?? `خطأ من السيرفر (code ${res.status})`;
        setSubmitError(srvMsg);
      }
    } catch (err) {
      // network or CORS errors end up here
      console.error("POST axios error:", err);
      if (err.response) {
        // server responded with a status outside 2xx
        setSubmitError(err.response.data?.message ?? `خطأ من السيرفر (${err.response.status})`);
      } else if (err.request) {
        // no response received
        setSubmitError("تعذر الاتصال بالخادم. تأكد من تشغيل الـ backend أو تحقق من إعدادات الـ CORS/ngrok.");
      } else {
        setSubmitError("حدث خطأ داخلي.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="request-section" aria-labelledby="req-title">
      <div className="request-wrap">
        <form className="req-card" onSubmit={handleSubmit} noValidate>
          <h3 className="req-card-title">اطلب خدمتك الآن</h3>

          {loadingOptions && <p className="req-loading">جاري تحميل الخيارات...</p>}
          {optionsError && <p className="req-error">{optionsError}</p>}
          {submitError && <p className="req-error">{submitError}</p>}
          {submitSuccess && <p className="req-success">{submitSuccess}</p>}

          <input className="req-input" type="text" placeholder="الاسم رباعي" value={form.name} onChange={(e) => updateField("name", e.target.value)} required />
          <input className="req-input" type="tel" placeholder="رقم الهاتف" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} required />
          <input className="req-input" type="email" placeholder="البريد الإلكتروني" value={form.email} onChange={(e) => updateField("email", e.target.value)} />

          <div className="req-row">
            <div className="req-select">
              <select value={form.city} onChange={(e) => updateField("city", e.target.value)} required>
                <option value="">المحافظة</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <span className="chev"><ChevronDown /></span>
            </div>
            <input className="req-input" type="text" placeholder="العنوان بالتفصيل" value={form.address} onChange={(e) => updateField("address", e.target.value)} required />
          </div>

          <div className="req-row">
            <div className="req-select">
              <select value={form.day} onChange={(e) => updateField("day", e.target.value)} required>
                <option value="">حدد اليوم المناسب</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <span className="chev"><ChevronDown /></span>
            </div>

            <div className="req-select">
              <select value={form.time} onChange={(e) => updateField("time", e.target.value)} required>
                <option value="">حدد الوقت المناسب</option>
                {times.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <span className="chev"><ChevronDown /></span>
            </div>
          </div>

          <div className="req-select">
            <select value={form.service_id} onChange={(e) => updateField("service_id", e.target.value)} required disabled={loadingOptions}>
              <option value="">اختر خدمتك</option>
              {services.map(s => <option key={s.id} value={s.id}>{s.title ?? s.name}</option>)}
            </select>
            <span className="chev"><ChevronDown /></span>
          </div>

          <div className="req-select">
            <select value={form.artisan_id} onChange={(e) => updateField("artisan_id", e.target.value)} required disabled={loadingOptions}>
              <option value="">اختر الصنايعي</option>
              {artisans.map(a => <option key={a.id} value={a.id}>{a.name ?? a.full_name}</option>)}
            </select>
            <span className="chev"><ChevronDown /></span>
          </div>

          <button className="req-submit" type="submit" disabled={submitting}>
            {submitting ? "جاري الإرسال..." : "تأكيد الحجز"}
          </button>
        </form>

        <aside className="req-side">
          <h2 id="req-title" className="req-title">اطلب خدمتك الان</h2>
          <p className="req-text">املأ البيانات المطلوبة واحنا هنتواصل معاك في أقرب وقت علشان نحدد الميعاد ونبدأ الشغل.</p>
        </aside>
      </div>
    </section>
  );
}

