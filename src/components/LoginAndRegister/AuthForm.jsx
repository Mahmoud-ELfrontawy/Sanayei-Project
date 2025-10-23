// AuthForm.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./RegisterAndLogin.css"; 
import image from "../../sanayei-img/image-register.png"; 

export default function AuthForm({
    mode = "login",
    onSubmit,
    extraLinks = null,
}) {
    const isRegister = mode === "register";

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        remember: false,
    });

    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister && values.password !== values.confirm) {
            alert("كلمة المرور والتأكيد لا يتطابقان");
            return;
        }
        if (onSubmit) onSubmit(values);
        else console.log(mode, values);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="register-card max-w-5xl w-full bg-white rounded-lg shadow-lg
            overflow-hidden flex flex-col md:flex-row">
                {/* form side */}
                <section className="form-side w-full md:w-1/2 p-8 md:p-12" dir="rtl">
                    <h2 className="text-main text-2xl font-bold">
                        {isRegister ? "سجل الآن" : "تسجيل دخول"}
                    </h2>
                    <p className="text-muted mt-2">
                        {isRegister
                            ? "سجّل بياناتك علشان تقدر تطلب أي خدمة بسهولة من صنايعي"
                            : "سجّل دخولك لحسابك"}
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* name only for register */}
                        {isRegister && (
                            <div className="input-group">
                                <label className="sr-only">الاسم</label>
                                <input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="الاسم رباعي"
                                    className="input"
                                    required
                                />
                            </div>
                        )}

                        <div className="input-group">
                            <label className="sr-only">البريد الإلكتروني</label>
                            <input
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="البريد الإلكتروني"
                                className="input"
                                required
                            />
                        </div>

                        <div className="input-group relative">
                            <label className="sr-only">كلمة المرور</label>
                            <input
                                name="password"
                                type={showPass ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange}
                                placeholder="كلمة المرور"
                                className="input pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass((s) => !s)}
                                className="pass-toggle"
                                aria-label="Toggle password visibility"
                            >
                                {showPass ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        {/* confirm only for register */}
                        {isRegister && (
                            <div className="input-group relative">
                                <label className="sr-only">تأكيد كلمة المرور</label>
                                <input
                                    name="confirm"
                                    type={showPassConfirm ? "text" : "password"}
                                    value={values.confirm}
                                    onChange={handleChange}
                                    placeholder="تأكيد كلمة المرور"
                                    className="input"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassConfirm((s) => !s)}
                                    className="pass-toggle"
                                    aria-label="Toggle confirm visibility"
                                >
                                    {showPassConfirm ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        )}

                        {/* remember checkbox only for login */}
                        {!isRegister && (
                            <div className="remeber-me flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={values.remember}
                                        onChange={handleChange}
                                    />
                                    تذكرني
                                </label>
                                <Link to="/forgot-password" className="text-sm link">
                                    نسيت كلمة المرور؟
                                </Link>
                            </div>
                        )}

                        <button type="submit" className="btn-primary-register w-full">
                            {isRegister ? "سجل الآن" : "تسجيل دخول"}
                        </button>

                        <div className="divider">
                            <span>أو</span>
                        </div>

                        {isRegister ? (
                            <div className="socials-register-and-login flex gap-3">
                                <button type="button" className="social-btn w-1/2">
                                    سجل عبر جوجل
                                    <FaGoogle/>
                                </button>
                                <button type="button" className="social-btn w-1/2">
                                    سجل عبر فيسبوك
                                    <FaFacebook/>
                                </button>
                            </div>
                        ): ""
                        }

                        <p className="text-muted-register-and-login 
                        text-xs text-center text-muted mt-3">
                            {isRegister ? (
                                <>
                                    لديك حساب بالفعل؟{" "}
                                    <Link to="/login" className="link">
                                        تسجيل الدخول
                                    </Link>
                                </>
                            ) : (
                                <>
                                    ليس لديك حساب؟{" "}
                                    <Link to="/register" className="link">
                                        أنشئ حساب جديد
                                    </Link>
                                </>
                            )}
                        </p>

                        {extraLinks}
                    </form>
                </section>

                {/* image side */}
                <aside className="image-side w-full md:w-1/2 relative hidden md:block">
                    <img
                        src={image}
                        alt="Worker"
                        className="h-full w-full object-cover"
                    />
                </aside>
            </div>
        </main>
    );
}
