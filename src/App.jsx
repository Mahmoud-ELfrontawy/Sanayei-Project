import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import RequestServiceSection from "./components/Home/RequestServiceSection";
import ChooseSanay from "./components/Home/ChooseSanay";
import Orders from "./pages/Orders";
import Register from "./components/LoginAndRegister/Register";
import Login from "./components/LoginAndRegister/Login";
import ForgotPassword from "./components/LoginAndRegister/ForgotPassword";
import ChangePassword from "./components/LoginAndRegister/ChangePassword";

import WorkerProfile from "./components/Home/WorkerProfile";
import Services from "./components/Features/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-service" element={<RequestServiceSection />} />
        <Route path="/choose" element={<ChooseSanay />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/worker/:id" element={<WorkerProfile />} />
        <Route path="/choose" element={<ChooseSanay />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
