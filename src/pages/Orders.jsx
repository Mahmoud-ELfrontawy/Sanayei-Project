// // Orders.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FiPhone, FiMail, FiClock } from "react-icons/fi";
// import { HiLocationMarker } from "react-icons/hi";
// import { FaTools, FaUser } from "react-icons/fa";
// import "./Orders.css";

// const ORDERS_API_URL = "https://7d49af01f1cb.ngrok-free.app/api/service-requests";

// export default function Orders() {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         let mounted = true;

//         const fetchOrders = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const res = await axios.get(ORDERS_API_URL, {
//                     headers: { "ngrok-skip-browser-warning": "true" },
//                     timeout: 10000,
//                 });

//                 if (!mounted) return;

//                 // دعم لعدة صيغ ردّ (API قد يرجع data.data أو data)
//                 const payload = res.data;
//                 const fetchedOrders =
//                     (payload && payload.data && (payload.data.data || payload.data)) ||
//                     payload.data ||
//                     payload ||
//                     [];

//                 // تأكد أن الناتج مصفوفة
//                 setOrders(Array.isArray(fetchedOrders) ? fetchedOrders : []);
//             } catch (err) {
//                 console.error("Error fetching orders:", err);
//                 setError(
//                     err?.response?.data?.message ||
//                     "تعذر جلب قائمة الطلبات من الخادم. تأكد من أن الـ API يعمل أو استخدم بيانات افتراضية."
//                 );
//             } finally {
//                 if (mounted) setLoading(false);
//             }
//         };

//         fetchOrders();
//         return () => {
//             mounted = false;
//         };
//     }, []);

//     const OrderCard = ({ order }) => {
//         const serviceName =
//             order.service?.name || order.service?.title || order.service_id || order.service || "غير محدد";
//         const workerName =
//             order.worker?.name ||
//             order.worker?.full_name ||
//             order.worker_id ||
//             order.artisan_id ||
//             order.worker ||
//             "غير محدد";

//         return (
//             <article className="order-card" dir="rtl" aria-label={`طلب من ${order.name || "مستخدم"}`}>
//                 <header className="order-card-head">
//                     <h3 className="order-title">{order.name || "مستخدم مجهول"}</h3>
//                     <span className="order-status">في انتظار التأكيد</span>
//                 </header>

//                 <div className="order-grid">
//                     <div className="order-row">
//                         <FaTools className="order-icon service" />
//                         <div>
//                             <div className="label">الخدمة</div>
//                             <div className="value">{serviceName}</div>
//                         </div>
//                     </div>

//                     <div className="order-row">
//                         <FaUser className="order-icon worker" />
//                         <div>
//                             <div className="label">الصنايعي</div>
//                             <div className="value">{workerName}</div>
//                         </div>
//                     </div>

//                     <div className="order-row">
//                         <FiClock className="order-icon time" />
//                         <div>
//                             <div className="label">الموعد</div>
//                             <div className="value">{`${order.day || "-"} ، ${order.time || "-"}`}</div>
//                         </div>
//                     </div>

//                     <div className="order-row">
//                         <HiLocationMarker className="order-icon location" />
//                         <div>
//                             <div className="label">المحافظة</div>
//                             <div className="value">{order.governorate || order.city || "-"}</div>
//                         </div>
//                     </div>

//                     <div className="order-row">
//                         <FiPhone className="order-icon phone" />
//                         <div>
//                             <div className="label">الهاتف</div>
//                             <div className="value">
//                                 {order.phone ? <a href={`tel:${order.phone}`}>{order.phone}</a> : "-"}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="order-row">
//                         <FiMail className="order-icon mail" />
//                         <div>
//                             <div className="label">الإيميل</div>
//                             <div className="value">
//                                 {order.email ? <a href={`mailto:${order.email}`}>{order.email}</a> : "-"}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <p className="order-address">
//                     <span className="addr-label">العنوان: </span>
//                     {order.address || "-"}
//                 </p>
//             </article>
//         );
//     };

//     let content;
//     if (loading) {
//         content = (
//             <div className="status-wrap">
//                 <p className="status-text">جاري تحميل الطلبات...</p>
//                 <div className="spinner" aria-hidden="true"></div>
//             </div>
//         );
//     } else if (error) {
//         content = (
//             <div className="status-wrap error" role="alert" dir="rtl">
//                 <p className="status-title">خطاء في جلب البيانات</p>
//                 <p className="status-text">{error}</p>
//             </div>
//         );
//     } else if (!orders.length) {
//         content = (
//             <div className="status-wrap empty" dir="rtl">
//                 <p className="status-title">لا توجد طلبات حجز حالياً</p>
//             </div>
//         );
//     } else {
//         content = (
//             <div className="orders-grid">
//                 {orders.map((o, i) => (
//                     <OrderCard order={o} key={o.id || i} />
//                 ))}
//             </div>
//         );
//     }

//     return (
//         <div className="orders-page min-h-screen p-6 bg-page" dir="rtl">
//             <div className="container">
//                 <header className="page-head">
//                     <h1>متابعة الطلبات</h1>
//                     <p className="muted">عرض كل الطلبات الواردة من العملاء</p>
//                 </header>

//                 <main>{content}</main>
//             </div>
//         </div>
//     );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Orders.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { FaTools, FaUser } from "react-icons/fa";
import "./Orders.css";


const USE_MOCK = true; 
const ORDERS_API_URL = "https://7d49af01f1cb.ngrok-free.app/api/service-requests";

const mockOrders = [
    {
        id: "m1",
        name: "ماجد الشافعي",
        service: { id: "s1", title: "كهرباء" },
        worker: { id: "w1", name: "ماس كهربائي" },
        day: "الأحد - 16 يونيو 2025",
        time: "الساعة 5:00 مساءً",
        governorate: "الجيزة",
        phone: "01023456789",
        email: "majed@example.com",
        address: "الجيزة - فيصل - شارع كذا - بجوار مدرسة النور",
    },
    {
        id: "m2",
        name: "منى السيد",
        service: { id: "s2", title: "سباكة" },
        worker: { id: "w2", name: "خالد نادر" },
        day: "الثلاثاء - 20 يوليو 2025",
        time: "الساعة 11:00 صباحًا",
        governorate: "القاهرة",
        phone: "01111222333",
        email: "mona@example.com",
        address: "القاهرة - مصر الجديدة - عمارة 12",
    },
    {
        id: "m3",
        name: "أحمد سمير",
        service: { id: "s3", title: "دهانات" },
        worker: { id: "w3", name: "أحمد علي" },
        day: "الجمعة - 25 يوليو 2025",
        time: "الساعة 3:00 م",
        governorate: "الإسكندرية",
        phone: "01234567890",
        email: "ahmed@example.com",
        address: "الإسكندرية - سموحة - شارع النخيل",
    },
    {
        id: "m4",
        name: "سارة حسن",
        service: { id: "s4", title: "نجارة" },
        worker: { id: "w4", name: "عماد صالح" },
        day: "الإثنين - 28 يوليو 2025",
        time: "الساعة 1:00 م",
        governorate: "المنصورة",
        phone: "01099887766",
        email: "sara@example.com",
        address: "المنصورة - شارع التحرير",
    },
    {
        id: "m5",
        name: "كريم مصطفى",
        service: { id: "s5", title: "تكييف" },
        worker: { id: "w5", name: "ياسر جمال" },
        day: "السبت - 02 أغسطس 2025",
        time: "الساعة 9:00 ص",
        governorate: "القليوبية",
        phone: "01055667788",
        email: "karim@example.com",
        address: "بنها - الحي الأول - عمارة 5",
    },
    {
        id: "m6",
        name: "هبة علي",
        service: { id: "s6", title: "تصليح أجهزة" },
        worker: { id: "w6", name: "سامي عبد" },
        day: "الأربعاء - 12 أغسطس 2025",
        time: "الساعة 5:00 م",
        governorate: "القاهرة",
        phone: "01122334455",
        email: "hiba@example.com",
        address: "القاهرة - المعادي - شارع 15",
    },
];

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const fetchOrders = async () => {
            setLoading(true);
            setError(null);

            if (USE_MOCK) {
                // استخدم الموك فوراً لعرض التصميم
                setTimeout(() => {
                    if (!mounted) return;
                    setOrders(mockOrders);
                    setLoading(false);
                }, 300); // small delay to show loading state
                return;
            }

            try {
                const res = await axios.get(ORDERS_API_URL, {
                    headers: { "ngrok-skip-browser-warning": "true" },
                    timeout: 10000,
                });

                if (!mounted) return;

                const payload = res.data;
                const fetchedOrders =
                    (payload && payload.data && (payload.data.data || payload.data)) ||
                    payload.data ||
                    payload ||
                    [];

                setOrders(Array.isArray(fetchedOrders) ? fetchedOrders : []);
            } catch (err) {
                console.error("Error fetching orders:", err);
                setError(
                    err?.response?.data?.message ||
                    "تعذر جلب قائمة الطلبات من الخادم. سيتم عرض بيانات وهمية."
                );
                // fallback to mock if API failed
                setOrders(mockOrders);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchOrders();
        return () => {
            mounted = false;
        };
    }, []);

    const OrderCard = ({ order }) => {
        const serviceName =
            order.service?.title || order.service?.name || order.service_id || order.service || "غير محدد";
        const workerName =
            order.worker?.name || order.worker?.full_name || order.worker_id || order.worker || "غير محدد";

        return (
            <article className="order-card" dir="rtl" aria-label={`طلب من ${order.name || "مستخدم"}`}>
                <header className="order-card-head">
                    <h3 className="order-title">{order.name || "مستخدم مجهول"}</h3>
                    <span className="order-status">في انتظار التأكيد</span>
                </header>

                <div className="order-grid">
                    <div className="order-row">
                        <FaTools className="order-icon service" />
                        <div>
                            <div className="label">الخدمة</div>
                            <div className="value">{serviceName}</div>
                        </div>
                    </div>

                    <div className="order-row">
                        <FaUser className="order-icon worker" />
                        <div>
                            <div className="label">الصنايعي</div>
                            <div className="value">{workerName}</div>
                        </div>
                    </div>

                    <div className="order-row">
                        <FiClock className="order-icon time" />
                        <div>
                            <div className="label">الموعد</div>
                            <div className="value">{order.day ? `${order.day} ، ${order.time || ""}` : (order.time || "-")}</div>
                        </div>
                    </div>

                    <div className="order-row">
                        <HiLocationMarker className="order-icon location" />
                        <div>
                            <div className="label">المحافظة</div>
                            <div className="value">{order.governorate || order.city || "-"}</div>
                        </div>
                    </div>

                    <div className="order-row">
                        <FiPhone className="order-icon phone" />
                        <div>
                            <div className="label">الهاتف</div>
                            <div className="value">
                                {order.phone ? <a href={`tel:${order.phone}`}>{order.phone}</a> : "-"}
                            </div>
                        </div>
                    </div>

                    <div className="order-row">
                        <FiMail className="order-icon mail" />
                        <div>
                            <div className="label">الإيميل</div>
                            <div className="value">
                                {order.email ? <a href={`mailto:${order.email}`}>{order.email}</a> : "-"}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="order-address">
                    <span className="addr-label">العنوان: </span>
                    {order.address || "-"}
                </p>
            </article>
        );
    };

    let content;
    if (loading) {
        content = (
            <div className="status-wrap">
                <p className="status-text">جاري تحميل الطلبات...</p>
                <div className="spinner" aria-hidden="true"></div>
            </div>
        );
    } else if (error && orders.length === 0) {
        content = (
            <div className="status-wrap error" role="alert" dir="rtl">
                <p className="status-title">خطاء في جلب البيانات</p>
                <p className="status-text">{error}</p>
            </div>
        );
    } else if (!orders.length) {
        content = (
            <div className="status-wrap empty" dir="rtl">
                <p className="status-title">لا توجد طلبات حجز حالياً</p>
            </div>
        );
    } else {
        content = (
            <div className="orders-grid">
                {orders.map((o, i) => (
                    <OrderCard order={o} key={o.id || i} />
                ))}
            </div>
        );
    }

    return (
        <div className="orders-page min-h-screen p-6 bg-page" dir="rtl">
            <div className="container">
                <header className="page-head">
                    <h1>متابعة الطلبات</h1>
                    <p className="muted">عرض كل الطلبات الواردة من العملاء</p>
                </header>

                <main>{content}</main>
            </div>
        </div>
    );
}
