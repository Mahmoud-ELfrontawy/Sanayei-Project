// ServiceCard.jsx
import { Link } from "react-router-dom";
import "./services.css";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ item }) {
    return (
        <article className="service-card" dir="rtl">
            <div className="service-icon" aria-hidden="true">{item.icon}</div>
            <div>

                <h3 className="sanayee-card__title">{item.title}</h3>
                <p className="sanayee-card__desc">{item.desc}</p>
            </div>

                <Link
                    to={""}
                    className="service-link"
                    aria-label={`طلب خدمة`}
                >
                    طلب الخدمة{" "}
                    <span className="service-arrow">
                        <FaArrowRight />
                    </span>
                </Link>
        </article>
    );
}
