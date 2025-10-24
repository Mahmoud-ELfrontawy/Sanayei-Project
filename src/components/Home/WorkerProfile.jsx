import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaStar, FaCheck } from "react-icons/fa";
import { getWorkerById } from "../../data/workers";
import "./WorkerProfile.css";

export default function WorkerProfile() {
  const { id } = useParams();
  const { state } = useLocation(); // بيانات جاية من ChooseSanay
  const selected = state || getWorkerById(id); // fallback عند الـ refresh

  // لو id غلط أو مفيش بيانات
  if (!selected) {
    return (
      <section className="profile-page" dir="rtl">
        <div className="profile-container">
          <p>العامل غير موجود.</p>
          <Link className="btn" to="/choose">
            رجوع إلى القائمة
          </Link>
        </div>
      </section>
    );
  }

  const [tab, setTab] = useState("about");

  return (
    <section className="profile-page" dir="rtl">
      <div className="profile-container">
        {/* هيدر بسيط للصفحة */}
        <div className="profile-hero" role="img" aria-label={selected.title}>
          <img
            src={selected.image}
            alt={`صورة ${selected.name}`}
            loading="lazy"
          />
          <div className="overlay" />
        </div>

        <div className="profile-layout">
          <div className="profile-content">
            <div className="tabs">
              {["about", "services", "reviews", "portfolio"].map((key) => (
                <button
                  key={key}
                  className={tab === key ? "tab active" : "tab"}
                  onClick={() => setTab(key)}
                >
                  {key === "about" && "عن الصنايعي"}
                  {key === "services" && "الخدمات"}
                  {key === "reviews" && "آراء العملاء"}
                  {key === "portfolio" && "معرض الأعمال"}
                </button>
              ))}
            </div>

            <div className="tab-panel">
              {tab === "about" && (
                <div className="about-grid">
                  <div className="about-item">
                    <h4>التخصص المهني</h4>
                    <p>{selected.bio}</p>
                  </div>
                  <div className="about-item">
                    <h4>العنوان</h4>
                    <p>{selected.location}</p>
                  </div>
                </div>
              )}

              {tab === "services" && (
                <ul className="services-list">
                  {selected.services?.map((s, i) => (
                    <li key={i}>
                      <span className="chk">
                        <FaCheck aria-hidden />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              )}

              {tab === "portfolio" && (
                <div className="portfolio-grid">
                  {selected.portfolio?.slice(0, 4).map((p, i) => (
                    <figure key={i} className="work-card">
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </figure>
                  ))}
                </div>
              )}

              {tab === "reviews" && (
                <>
                  {Array.isArray(selected.reviewsList) &&
                  selected.reviewsList.length > 0 ? (
                    <>
                      <div className="reviews-grid">
                        {selected.reviewsList.map((r, i) => (
                          <article className="review-card" key={i}>
                            <header className="review-head">
                              {r.avatar ? (
                                <img src={r.avatar} alt="" loading="lazy" />
                              ) : (
                                <div className="avatar-fallback" aria-hidden>
                                  {r.name?.[0] ?? "م"}
                                </div>
                              )}
                              <div>
                                <h5>{r.name}</h5>
                                <div
                                  className="stars"
                                  aria-label={`تقييم ${r.rating} من 5`}
                                >
                                  {Array.from({ length: 5 }, (_, idx) => (
                                    <span
                                      key={idx}
                                      className={
                                        idx < (r.rating ?? 0) ? "on" : "off"
                                      }
                                    >
                                      <FaStar aria-hidden />
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </header>
                            <p className="review-text">{r.text}</p>
                          </article>
                        ))}
                      </div>

                      {/* نقاط تنقّل شكلية لو حبيت تعمل سلايدر لاحقًا */}
                      <div className="dots">
                        {selected.reviewsList.slice(0, 3).map((_, i) => (
                          <span
                            key={i}
                            className={`dot ${i === 0 ? "active" : ""}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <p>لا توجد مراجعات بعد.</p>
                  )}
                </>
              )}
            </div>
          </div>

          <aside className="profile-card" aria-label="بيانات الصنايعي">
            <div className="avatar-ring">
              <div className="avatar-wrap">
                <img src={selected.image} alt={`صورة ${selected.name}`} />
              </div>
            </div>
            <h3 className="worker-name">{selected.name}</h3>
            <div className="worker-title">{selected.title}</div>
            <div
              className="worker-stars"
              aria-label={`التقييم ${selected.rating} من 5`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={i < (selected.rating ?? 0) ? "on" : "off"}
                >
                  <FaStar aria-hidden />
                </span>
              ))}
            </div>
            {selected.years && (
              <div className="worker-years">خبرة {selected.years} سنوات</div>
            )}
            <Link to="#" className="btn solid">
              طلب خدمة
            </Link>
            <button type="button" className="btn ghost">
              إرسال رسالة
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
