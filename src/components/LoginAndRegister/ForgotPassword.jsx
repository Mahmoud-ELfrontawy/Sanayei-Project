// ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css";
import image from "../../sanayei-img/image-register.png";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const isValidEmail = (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isValidEmail(email)) {
            setError("من فضلك ادخل بريد إلكتروني صحيح.");
            return;
        }

        setStatus("sending");

        setTimeout(() => {
            setStatus("idle");
            navigate("/change-password", { state: { email } });
        }, 600);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="register-card max-w-5xl w-full bg-white rounded-lg shadow-lg
            overflow-hidden flex flex-col md:flex-row">
                <section className="form-side w-full md:w-1/2 p-8 md:p-12" dir="rtl">
                    <h2 className="text-main text-2xl font-bold">نسيت كلمة المرور؟</h2>
                    <p className="text-muted mt-2">أدخل البريد الإلكتروني المرتبط بحسابك وسنوجّهك لتغيير كلمة المرور.</p>

                    <form onSubmit={handleSubmit} className="form-forgot mt-6">
                        <div className="input-group">
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="البريد الإلكتروني"
                                className="input"
                                required
                            />
                        </div>

                        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

                        <button
                            type="submit"
                            className="btn-primary-register w-full"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "جاري المعالجة..." : "متابعة"}
                        </button>

                        <div className="link-forgot-password mt-4">
                            <a href="/login" className="link">الرجوع لتسجيل الدخول</a>
                        </div>
                    </form>
                </section>

                <aside className="image-side w-full md:w-1/2 relative hidden md:block">
                    <img src={image} alt="Worker" className="h-full w-full object-cover" />
                </aside>
            </div>
        </main>
    );
}
