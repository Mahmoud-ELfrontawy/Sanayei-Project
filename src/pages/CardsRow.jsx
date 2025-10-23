// CardsRow.jsx
import { FaShieldAlt, FaStopwatch, FaMoneyBillWave } from "react-icons/fa";
import "../components/Home/Home";

const cards = [
    {
        icon: <FaShieldAlt />,
        title: "صنايعي موثوقين",
        text: "كل الحرفيين على صنايعي تم التحقق من خبرتهم وتقييماتهم لضمان أفضل جودة للخدمة.",
    },
    {
        icon: <FaStopwatch />,
        title: "حجز سهل وسريع",
        text: "احجز الخدمة اللي تحتاجها في دقائق بخطوات بسيطة، من غير مكالمات ولا تعقيد.",
    },
    {
        icon: <FaMoneyBillWave />,
        title: "أسعار مناسبة",
        text: "نعرض لك تكلفة الخدمة بشكل شفاف قبل تأكيد الطلب، بدون مفاجآت.",
    },
];

function CardsRow() {
    return (
        <div className="cards-row-wrapper">
            <div className="cards-row ">
                {cards.map((c, i) => (
                    <div className="card" key={i}>
                        <div className="card-icon" aria-hidden="true">
                            {c.icon}
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{c.title}</h3>
                            <p className="card-text">{c.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsRow;
