import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaCheck } from "react-icons/fa";
import Image3 from "../../sanayei-img/image3.png";

import "./WorkerProfile.css";

export default function WorkerProfile({
  worker = {
    name: "سامي حسين",
    title: "كهربائي",
    years: 3,
    rating: 5,
    avatar: "/images/worker-avatar.png",
    location: "الجيزة - فيصل - شارع العشرين",
  },
  hero = { src: "/images/hero-bg.jpg", alt: "خلفية" },
  about = {
    speciality:
      "خبير في تنفيذ أعمال الصيانة والتركيبات الداخلية للمنازل والشركات؛ بدقة عالية تتوافق مع معايير السوق المصري.",
    summary:
      "مجتهد، منضبط، خبرة طويلة في التشطيبات والكهرباء والسقافة. بعد المعاينة يتم تقديم تشخيص وتكلفة شفافة، مع الالتزام بالوقت. أقدّم ضمانًا على الأعمال وأنفّذ بخامات عالية للحفاظ على المكان نظيف ووقت التسليم.",
  },
  services = [
    "تمديدات كهربائية داخلية وخارجية",
    "تركيب مفاتيح وإدارة ذكية",
    "إصلاح وصيانة مواسير وتسريب المياه",
    "تركيب سقّالات وديكورات",
  ],
  reviews = [
    {
      name: "حسن عبدالعزيز",
      text: "من أول تواصل حسّيت بالاحترافية والالتزام...",
      rating: 5,
      avatar: "/src/sanayei-img/OIP (2).jfif",
    },
    {
      name: " محمد احمد",
      text: "اللي عجبني أكثر من الشغل هو التعامل الراقي...",
      rating: 5,
      avatar: "/src/sanayei-img/OIP (1).jfif",
    },
    {
      name: " محمود حسن ",
      text: "المشكلة اتحلّت من أول زيارة والمكان اتسلم نضيف جدًا...",
      rating: 5,
      avatar: "/src/sanayei-img/OIP (3).jfif",
    },
  ],
  portfolio = [
    { src: "/src/sanayei-img/image 8.png", alt: "عمل 1" },
    { src: "/src/sanayei-img/image 7.png", alt: "عمل 2" },
    { src: "/src/sanayei-img/image 6.png", alt: "عمل 3" },
  ],
}) {
  const [tab, setTab] = useState("about");

  return (
    <section className="profile-page" dir="rtl">
      <div className="profile-container">
        <div className="profile-hero" role="img" aria-label={hero.alt}>
          <img src={Image3} alt="" loading="lazy" />
          <div className="overlay" />
        </div>

        <div className="profile-layout">
          {/* main content */}
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
                    <p>{about.speciality}</p>
                  </div>
                  <div className="about-item">
                    <h4>نبذة عن الصنايعي</h4>
                    <p>{about.summary}</p>
                  </div>
                  <div className="about-item">
                    <h4>العنوان</h4>
                    <p>{worker.location}</p>
                  </div>
                </div>
              )}

              {tab === "services" && (
                <ul className="services-list">
                  {services.map((s, i) => (
                    <li key={i}>
                      <span className="chk">
                        <FaCheck aria-hidden />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              )}

              {tab === "reviews" && (
                <>
                  <div className="reviews-grid">
                    {reviews.map((r, i) => (
                      <article className="review-card" key={i}>
                        <header className="review-head">
                          <img src={r.avatar} alt="" loading="lazy" />
                          <div>
                            <h5>{r.name}</h5>
                            <div
                              className="stars"
                              aria-label={`تقييم ${r.rating} من 5`}
                            >
                              {Array.from({ length: 5 }, (_, idx) => (
                                <span
                                  key={idx}
                                  className={idx < r.rating ? "on" : "off"}
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
                  <div className="dots">
                    <span className="dot active" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </>
              )}

              {tab === "portfolio" && (
                <>
                  <div className="portfolio-grid">
                    {portfolio.slice(0, 4).map((p, i) => (
                      <figure key={i} className="work-card">
                        <img src={p.src} alt={p.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                  <div className="portfolio-cta">
                    <Link to="#" className="btn btn-primary-service">
                      عرض كل الأعمال
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* sidebar (aside) */}
          <aside className="profile-card" aria-label="بيانات الصنايعي">
            <div className="avatar-ring">
              <div className="avatar-wrap">
                <img src={Image3} alt={`صورة ${worker.name}`} />
              </div>
            </div>
            <h3 className="worker-name">{worker.name}</h3>
            <div className="worker-title">{worker.title}</div>
            <div
              className="worker-stars"
              aria-label={`التقييم ${worker.rating} من 5`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < worker.rating ? "on" : "off"}>
                  <FaStar aria-hidden />
                </span>
              ))}
            </div>
            <div className="worker-years">خبرة {worker.years} سنوات</div>
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
