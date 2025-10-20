// Header.jsx
import { NavLink, Link } from "react-router-dom";
import img from "../sanayei-img/logo project.png";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";
import Button from "./Button";

function Header() {
        const activeClass = ({ isActive }) =>
        isActive ? "text-[#FF8031] font-semibold" : "text-black";

    return (
        <header className="bg-white">
            <nav className="flex items-center gap-3">
                {/* Logo */}
                <Link to="/" className="logo flex items-center gap-3">
                    <img src={img} alt="Sanay3y logo" className="w-12 h-12 object-contain" />
                    <div className="logo-text">
                        <h1 className="text-[#FF8031] text-4xl font-bold">صنايعي</h1>
                        <h1 className="sanay-text">sanay3y.com</h1>
                    </div>
                </Link>

                {/* Nav links */}
                <ul className="hidden md:flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={activeClass} end>
                            الرئيسية
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/request-service"
                            className={({ isActive }) =>
                                `flex items-center gap-1 ${isActive ?
                                    "text-[#FF8031] font-semibold" : ""}`
                            }
                        >
                            طلب خدمة <IoIosArrowDown />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/choose" className={activeClass}>
                            اختر صنايعي
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/orders" className={activeClass}>
                            متابعة الطلبات
                        </NavLink>
                    </li>
                </ul>

                {/* Buttons */}
                <Button showIcon/>

                {/* Mobile menu placeholder */}
                <div className="md:hidden">
                    <button aria-label="menu" className="p-2 text-2xl">
                        ☰
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
