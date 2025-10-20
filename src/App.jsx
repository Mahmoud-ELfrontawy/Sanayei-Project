import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import RequestService from "./pages/RequestService";
import ChooseSanay from "./pages/ChooseSanay";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/choose" element={<ChooseSanay />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      
    </>
  );
}

export default App;