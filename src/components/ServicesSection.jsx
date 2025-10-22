// ServicesSection.jsx
import { Link } from "react-router-dom";
import { FaPaintBrush, FaBolt, FaHammer, FaWrench, FaArrowRight } from "react-icons/fa";
import "./ServicesSection.css";

const services = [
    {
        id: "painting",
        icon: <FaPaintBrush />,
        title: "دهانات",
        desc: "دهانات وتشطيب داخلي وخارجي",
        to: "/services/painting",
    },
    {
        id: "electric",
        icon: <FaBolt />,
        title: "كهرباء",
        desc: "تركيب مفاتيح، لمبات، وتمديدات كهربائية",
        to: "/services/electric",
    },
    {
        id: "carpentry",
        icon: <FaHammer />,
        title: "نجارة",
        desc: "تفصيل أبواب، نوافذ، وأثاث خشبي",
        to: "/services/carpentry",
    },
    {
        id: "plumbing",
        icon: <FaWrench />,
        title: "السباكة",
        desc: "تركيب وصيانة المواسير والأحواض",
        to: "/services/plumbing",
    },
];

export default function ServicesSection() {
    return (
        <section className="services-section" aria-labelledby="services-title">
            <div className="services-container">
                <p className="services-eyebrow">خدماتنا</p>
                <h2 id="services-title" className="services-title">
                    اختر الخدمة اللي تناسبك
                </h2>

                <div className="services-grid">
                    {services.map((s) => (
                        <article className="service-card" key={s.id}>
                            <div className="service-icon" aria-hidden="true">
                                {s.icon}
                            </div>

                            <div className="service-body">
                                <h3 className="service-title">{s.title}</h3>
                                <p className="service-desc">{s.desc}</p>
                                <Link to={s.to} className="service-link" aria-label={`طلب خدمة ${s.title}`}>
                                    طلب الخدمة <span className="service-arrow"><FaArrowRight /></span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/services" className="btn btn-primary-service">
                        عرض كل الخدمات
                    </Link>
                </div>
            </div>
        </section>
    );
}
