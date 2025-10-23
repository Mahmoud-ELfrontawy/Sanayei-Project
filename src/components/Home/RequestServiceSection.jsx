import { FaChevronDown } from "react-icons/fa";
import "./RequestServiceSection.css";
import bg from "../../sanayei-img/bggg1.jpg"

export default function RequestServiceSection() {
  return (
    <section className="request-section" aria-labelledby="req-title">
      <div
        className="request-wrap"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form className="req-card" onSubmit={(e) => e.preventDefault()}>
          <h3 className="req-card-title">اطلب خدمتك الان</h3>
          <label className="sr-only" htmlFor="name">
            الاسم رباعي
          </label>
          <input
            id="name"
            className="req-input"
            type="text"
            placeholder="الاسم رباعي"
          />
          <label className="sr-only" htmlFor="email">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            className="req-input"
            type="email"
            placeholder="البريد الإلكتروني"
          />
          <div className="req-row">
            <div className="req-select">
              <select aria-label="المحافظة" defaultValue="">
                <option value="" disabled>
                  المحافظة
                </option>
                <option>القاهرة</option>
                <option>الجيزة</option>
                <option>الإسكندرية</option>
              </select>
              <FaChevronDown aria-hidden="true" />
            </div>
            <input
              className="req-input"
              type="text"
              placeholder="العنوان بالتفصيل"
            />
          </div>
          <div className="req-row">
            <div className="req-select">
              <select aria-label="حدد اليوم المناسب" defaultValue="">
                <option value="" disabled>
                  حدد اليوم المناسب
                </option>
                <option>السبت</option>
                <option>الأحد</option>
                <option>الاثنين</option>
                <option>الثلاثاء</option>
                <option>الأربعاء</option>
                <option>الخميس</option>
                <option>الجمعة</option>
              </select>
              <FaChevronDown aria-hidden="true" />
            </div>
            <div className="req-select">
              <select aria-label="حدد الوقت المناسب" defaultValue="">
                <option value="" disabled>
                  حدد الوقت المناسب
                </option>
                <option>9:00 ص</option>
                <option>11:00 ص</option>
                <option>1:00 م</option>
                <option>3:00 م</option>
                <option>5:00 م</option>
                <option>7:00 م</option>
              </select>
              <FaChevronDown aria-hidden="true" />
            </div>
          </div>
          <div className="req-select">
            <select aria-label="اختر خدمتك" defaultValue="">
              <option value="" disabled>
                اختر خدمتك
              </option>
              <option>دهانات</option>
              <option>كهرباء</option>
              <option>نجارة</option>
              <option>سباكة</option>
            </select>
            <FaChevronDown aria-hidden="true" />
          </div>
          <div className="req-select">
            <select aria-label="اختر الصنايعي" defaultValue="">
              <option value="" disabled>
                اختر الصنايعي
              </option>
              <option>كريم مصطفى</option>
              <option>سامي حسين</option>
              <option>محمد الصاوي</option>
            </select>
            <FaChevronDown aria-hidden="true" />
          </div>
          <button type="submit" className="req-submit">
            تأكيد الحجز
          </button>
        </form>

        <aside className="req-side">
          <h2 id="req-title" className="req-title">
            اطلب خدمتك الان
          </h2>
          <p className="req-text">
            املأ البيانات المطلوبة واحنا
            <br />
            هنتواصل معاك في أقرب
            <br />
            وقت علشان نحدد الميعاد
            <br />
            ونبدأ الشغل.
          </p>
        </aside>
      </div>
    </section>
  );
}
