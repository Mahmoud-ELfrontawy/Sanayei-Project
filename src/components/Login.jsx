// Login.jsx
import AuthForm from "../components/AuthForm";

export default function Login() {
    const submitLogin = (values) => {
        console.log("login submit", values);
    };

    return <AuthForm mode="login" onSubmit={submitLogin} showSocials={true} />;
}
