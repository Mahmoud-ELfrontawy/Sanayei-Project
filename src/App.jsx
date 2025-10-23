import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import RequestServiceSection from "./components/RequestServiceSection";
import ChooseSanay from "./components/ChooseSanay";
import Orders from "./pages/Orders";
import Register from "./components/Register"
import Login from "./components/Login";

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
      </Routes>
      
    </>
  );
}

export default App;