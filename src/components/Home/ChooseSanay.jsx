import { Link } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import Image1 from "../../sanayei-img/image3.png";
import Image2 from "../../sanayei-img/image4.png";
import Image3 from "../../sanayei-img/image5.png";

import "./ChooseSanay.css";

const workers = [
  {
    id: "mechanic",
    tag: "دهان",
    name: "كريم مصطفى",
    bio: "تشطيبات الدهانات الداخلية والخارجية. خبرة أكثر من 6 سنوات.",
    rating: 4,
    reviews: 77,
    image: Image1,
    to: "/workers/paint/kareem-mostafa",
  },
  {
    id: "electric",
    tag: "كهربائي",
    name: "سامي حسين",
    bio: "كهربائي معتمد لحلول الإضاءة والتمديدات الكهربائية؛ ضمان ومتابعة بشرِكة 7 سنوات.",
    rating: 5,
    reviews: 120,
    image: Image2,
    to: "/workers/electric/sami-hussein",
  },
  {
    id: "carpenter",
    tag: "نجار",
    name: "محمد أحمد الصاوي",
    bio: "خبير في حلول السباكة والتسريبات السريعة. خبرة أكثر من 8 سنوات.",
    rating: 4,
    reviews: 92,
    image: Image3,
    to: "/workers/carpenter/mohamed-elsawy",
  },
];

export default function WorkersSection() {
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

                <Link
                  to={w.to}
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

        {/* الزر هنا أصبح مطابق لزر الخدمات */}
        <div className="workers-footer">
          <Link to="/workers" className="btn btn-primary-service">
            عرض كل الصنايعية
          </Link>
        </div>
      </div>
    </section>
  );
}
