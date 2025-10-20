// Button.jsx
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";

function Button({ showIcon = false }) {
    return (
        <div className="buttons-header hidden md:flex items-center gap-3">
            <Link to="/request-service" className="btn-primary">
                اطلب الان
            </Link>

            <NavLink
                to="/signup"
                className={({ isActive }) =>
                    isActive ?
                "btn-outline btn-outline--active flex items-center gap-1" :
                "btn-outline flex items-center gap-1"
                }
            >
                سجل الان {showIcon && <IoIosArrowDown />}
            </NavLink>
        </div>
    );
}

export default Button;
