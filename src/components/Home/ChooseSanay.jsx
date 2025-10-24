import { Link } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { workers } from "../../data/Workers"; // ← استخدم الداتا الموحّدة
import "./ChooseSanay.css";

export default function ChooseSanay() {
  return (
    <section className="workers-section" aria-labelledby="workers-title">
      <div className="workers-container">
        <p className="workers-eyebrow">صنايعيّتنا</p>
        <h2 id="workers-title" className="workers-title">
          اختر صنايعتك وابدأ شغلك
        </h2>

        <div className="workers-grid" role="list">
          {workers.map((w) => (
            <article className="worker-card" key={w.id} role="listitem">
              <div className="worker-media">
                <img
                  src={w.image}
                  alt={`صورة ${w.name}`}
                  loading="lazy"
                  width="260"
                  height="280"
                />
              </div>

              <div className="worker-body">
                <span className="worker-tag" aria-label={`التخصص: ${w.tag}`}>
                  {w.tag}
                </span>

                <h3 className="worker-name">{w.name}</h3>

                <p className="worker-bio">{w.bio}</p>

                <div className="worker-meta">
                  <ul
                    className="worker-stars"
                    aria-label={`التقييم ${w.rating} من 5`}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <li key={i} className={i < w.rating ? "on" : ""}>
                        <FaStar aria-hidden="true" />
                      </li>
                    ))}
                  </ul>
                  <span
                    className="worker-reviews"
                    aria-label={`${w.reviews} مراجعة`}
                  >
                    ({w.reviews})
                  </span>
                </div>

                {/* ✅ عند الضغط هنا، بنروح صفحة العامل ومعانا كل بياناته */}
                <Link
                  to={`/worker/${w.id}`}
                  state={w}
                  className="worker-cta"
                  aria-label={`طلب خدمة من ${w.name}`}
                >
                  طلب خدمة
                  <span className="service-arrow-choose">
                    <FaArrowLeft />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="workers-footer">
          {/* ✅ لو عايزها ترجع لنفس الصفحة استعمل /choose */}
          <Link to="/choose" className="btn btn-primary-service">
            عرض كل الصنايعية
          </Link>
        </div>
      </div>
    </section>
  );
}
