// AboutSection.jsx
import { Link } from "react-router-dom";
import { FiCheckCircle, FiClock } from "react-icons/fi"; 
import { FaArrowLeft } from "react-icons/fa6";
import bigImg from "../sanayei-img/portfolio image 1.png";    
import smallImg from "../sanayei-img/portfolio image 2.png";   
import mediaDot from "../sanayei-img/dots.png"
import "./AboutSection.css";

export default function AboutSection() {
    return (
        <section className="about-section" aria-labelledby="about-title">
            <div className="about-container">
                {/* الصور على اليسار */}
                <div className="about-media" aria-hidden="true">
                    <div className="media-frame">
                        <img src={bigImg} alt="" className="media-img media-img--large" />
                        <img src={smallImg} alt="" className="media-img media-img--small" />
                        <img src={mediaDot} className="media-dots" alt="" />
                        <div className="media-deco" />
                        
                    </div>
                </div>

                {/* المحتوى على اليمين */}
                <div className="about-content">
                    <p className="eyebrow">اعرف عنا</p>
                    <h2 id="about-title" className="about-title">
                        صنايعي، شريكك الموثوق في كل إصلاح
                    </h2>

                    <p className="about-desc">
                        بنؤمن إن كل بيت أو مشروع يستحق خدمة ممتازة وسريعة، علشان كده جمعنالك
                        شبكة من الصنايعية المعتمدين، صنايعي هي منصّة ذكية بتوصلك
                        بأفضل الحرفيين في كل التخصصات، من سباكة وكهرباء لنجارة
                        ودهانات وحتى التشطيبات الكاملة ، بنوفرلك وسيلة حجز سهلة
                        ، ومتابعة دقيقة من وقت الطلب لحد ما المهمة تخلص.
                    </p>

                    <ul className="about-features">
                        <li>
                            <span className="icon"><FiCheckCircle /></span>
                            <div>
                                <h4>رؤيتنا</h4>
                                <p>نكون المنصة الأولى لخدمات الصيانة
                                    والديكور في الوطن العربي،
                                    بجودة عالية وتجربة استخدام سهلة وآمنة.</p>
                            </div>
                        </li>

                        <li>
                            <span className="icon"><FiClock /></span>
                            <div>
                                <h4>مهمتنا</h4>
                                <p>نوفرلك عامل صنايعي موثوق في أقصر وقت وبأسعار عادلة وجودة مضمونة.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="about-cta">
                        <Link to="/request-service" className="btn btn-primary2 gap-5"><FaArrowLeft/>اطلب الآن</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
