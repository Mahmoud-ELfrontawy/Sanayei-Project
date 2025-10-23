// Footer.jsx
import img from "../../sanayei-img/logo project.png";
import { Link } from "react-router-dom";
import { FiPhone, FiFacebook, FiMail, FiChevronUp } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="site-footer bg-footer text-footer-text">
            <div className="container mx-auto px-4">
                {/* القسم العلوي */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* Brand */}
                    <div className="footer-brand max-w-sm">
                        <div className="footer-logo flex items-center gap-3">
                            <img src={img} alt="Sanayee Logo" />
                            <h3 className="brand-title">
                                صنايعي <span className="dot">Sanay3y.com</span>
                            </h3>
                        </div>
                        <p className="mt-4 text-sm text-footer-muted leading-relaxed">
                            منصة ذكية لطلب الحرفيين المعتمدين بسرعة وبأسعار شفافة وجودة مضمونة.
                        </p>

                        <div className="social-links mt-6 flex items-center gap-4">
                            <a href="tel:+2010202098765" className="social-btn" aria-label="اتصل بنا">
                                <FiPhone />
                            </a>
                            <a href="https://facebook.com" className="social-btn" aria-label="فيسبوك">
                                <FiFacebook />
                            </a>
                            <a href="mailto:info@sanayee.com" className="social-btn" aria-label="ايميل">
                                <FiMail />
                            </a>
                        </div>
                    </div>

                    {/* Links column 1 */}
                    <div className="footer-links">
                        <h4>عن الموقع</h4>
                        <ul>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/how-it-works">كيف نعمل</Link></li>
                            <li><Link to="/careers">انضم إلينا</Link></li>
                        </ul>
                    </div>

                    {/* Links column 2 */}
                    <div className="footer-links">
                        <h4>مسارات التعلم</h4>
                        <ul>
                            <li><Link to="/orders">سجل الطلبات</Link></li>
                            <li><Link to="/request-service">اطلب خدمة</Link></li>
                            <li><Link to="/choose">اختر صنايعي</Link></li>
                            <li><Link to="/settings">الاعدادات</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>تواصل معنا</h4>
                        <ul>
                            <li className="contact-item">+2010202098765</li>
                            <li className="contact-item">+206543234567</li>
                            <li className="contact-item">+212345678</li>
                        </ul>
                    </div>
                </div>

                {/* الخط الفاصل */}
                <div className="border-footer-border"></div>

                {/* الجزء السفلي */}
                <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-footer-muted">
                        Made by Sanayee © {new Date().getFullYear()}
                    </p>
                    <div className="flex items-center gap-3">
                        <Link to="/privacy" className="text-sm text-footer-muted hover:text-footer-text">
                            سياسة الخصوصية
                        </Link>
                        <span className="text-footer-muted">|</span>
                        <Link to="/terms" className="text-sm text-footer-muted hover:text-footer-text">
                            شروط الاستخدام
                        </Link>
                    </div>
                </div>
            </div>

            {/* back to top button */}
            <button
                onClick={handleScrollTop}
                className="back-to-top"
                aria-label="العودة للأعلى"
            >
                <FiChevronUp />
            </button>
        </footer>
    );
}
