// import { useState } from "react";
// import image from "../sanayei-img/image register.png"; 
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { FaGoogle, FaFacebook } from "react-icons/fa";
// import "./Register.css";
// import { Link } from "react-router-dom";

// export default function Register() {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirm: "",
//     });
//     const [showPass, setShowPass] = useState(false);

//     const handleChange = (e) => {
//         setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // هنا تبعت البيانات للـ API أو تعمل validation
//         console.log("submit:", form);
//     };

//     return (
//         <main className="register flex items-center justify-center bg-gray-50 p-6">
//             <div className="register-card max-w-5xl w-full bg-white rounded-lg shadow-lg
//             overflow-hidden flex flex-col md:flex-row">
//                 {/* left: form */}
//                 <section className="form-side w-full md:w-1/2 p-8 md:p-12" dir="rtl">
//                     <h2 className="text-main text-xl font-bold">سجل الآن</h2>
//                     <p className="text-muted-register mt-2">
//                         سجّل بياناتك علشان تقدر تطلب أي خدمة بسهولة من صنايعي شاطر قريب منك.
//                     </p>

//                     <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//                         <div className="input-group">
//                             <label className="sr-only">الاسم</label>
//                             <input
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 placeholder="الاسم رباعي"
//                                 className="input"
//                                 required
//                             />
//                         </div>

//                         <div className="input-group">
//                             <label className="sr-only">البريد الإلكتروني</label>
//                             <input
//                                 name="email"
//                                 type="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="البريد الإلكتروني"
//                                 className="input"
//                                 required
//                             />
//                         </div>

//                         <div className="input-group relative">
//                             <label className="sr-only">كلمة المرور</label>
//                             <input
//                                 name="password"
//                                 type={showPass ? "text" : "password"}
//                                 value={form.password}
//                                 onChange={handleChange}
//                                 placeholder="كلمة المرور"
//                                 className="input pr-12"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPass((s) => !s)}
//                                 className="pass-toggle"
//                                 aria-label="Toggle password visibility"
//                             >
//                                 {showPass ? <FiEyeOff /> : <FiEye />}
//                             </button>
//                         </div>

//                         <div className="input-group">
//                             <label className="sr-only">تأكيد كلمة المرور</label>
//                             <input
//                                 name="confirm"
//                                 type="password"
//                                 value={form.confirm}
//                                 onChange={handleChange}
//                                 placeholder="تأكيد كلمة المرور"
//                                 className="input"
//                                 required
//                             />

//                         </div>

//                         <button type="submit" className="btn-primary-register w-full">
//                             سجل الآن
//                         </button>

//                         <div className="divider">
//                             <span>أو</span>
//                         </div>

//                         <div className="socials-register flex gap-3">
//                             <button type="button" className="social-btn-register w-1/2">
//                                 <FaGoogle className="inline mr-2" /> عن طريق جوجل
//                             </button>
//                             <button type="button" className="social-btn-register w-1/2">
//                                 <FaFacebook className="inline mr-2" /> عن طريق فيسبوك
//                             </button>
//                         </div>

//                         <Link to="/login" className="btn-login text-xs text-center text-muted mt-3">
//                             لديك حساب بالفعل؟ <a className="link" href="">تسجيل الدخول</a>
//                         </Link>
//                     </form>
//                 </section>

//                 {/* right: image */}
//                 <aside className="image-side w-full md:w-1/2 relative hidden md:block">
//                     <img src={image} alt="Worker" className="h-full w-full object-cover" />
//                 </aside>
//             </div>
//         </main>
//     );
// }

// Register.jsx
import AuthForm from "../components/AuthForm";

export default function Register() {
    const submitRegister = (values) => {
        console.log("register submit", values);
    };

    return <AuthForm mode="register" onSubmit={submitRegister} showSocials={true} />;
}
