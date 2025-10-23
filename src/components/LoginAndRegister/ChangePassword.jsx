// ChangePassword.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./RegisterAndLogin.css";
import image from "../../sanayei-img/image-register.png";

export default function ChangePassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const emailFromState = location.state?.email || "";
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle"); // idle | sending | done

    const validate = () => {
        if (!password || password.length < 6) {
            setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
            return false;
        }
        if (password !== confirm) {
            setError("كلمة المرور وتأكيدها غير متطابقين.");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (!validate()) return;

        setStatus("sending");
        // محاكاة إرسال الطلب إلى الـ API
        setTimeout(() => {
            setStatus("done");
            // بعد نجاح التغيير نوجه المستخدم لصفحة تسجيل الدخول
            navigate("/login", { replace: true });
        }, 900);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="register-card max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* form side */}
                <section className="form-side w-full md:w-1/2 p-8 md:p-12" dir="rtl">
                    <h2 className="text-main text-2xl font-bold">تغيير كلمة المرور</h2>
                    <p className="text-muted mt-2">
                        {emailFromState
                            ? `تغيير كلمة المرور للحساب: ${emailFromState}`
                            : "أدخل كلمة المرور الجديدة لحسابك."}
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="input-group relative">
                            <input
                                name="password"
                                type={showPass ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="كلمة المرور الجديدة"
                                className="input"
                                required
                            />
                            <button
                                type="button"
                                className="pass-toggle"
                                onClick={() => setShowPass((s) => !s)}
                                aria-label={showPass ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                            >
                                {showPass ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        <div className="input-group relative">
                            <input
                                name="confirm"
                                type={showConfirm ? "text" : "password"}
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="تأكيد كلمة المرور"
                                className="input"
                                required
                            />
                            <button
                                type="button"
                                className="pass-toggle"
                                onClick={() => setShowConfirm((s) => !s)}
                                aria-label={showConfirm ? "إخفاء تأكيد كلمة المرور" : "إظهار تأكيد كلمة المرور"}
                            >
                                {showConfirm ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

                        <button
                            type="submit"
                            className="btn-primary-register w-full"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "جاري الحفظ..." : "تأكيد التغيير"}
                        </button>
                    </form>
                </section>

                {/* image side */}
                <aside className="image-side w-full md:w-1/2 relative hidden md:block">
                    <img src={image} alt="Change Password" className="h-full w-full object-cover" />
                </aside>
            </div>
        </main>
    );
}
