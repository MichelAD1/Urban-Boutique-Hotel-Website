import { useLocation, Link, useNavigate } from "react-router-dom";

// ***************** Logo and Icons *****************
// Logo
import logo from "../../assets/logo.png";

// Icons no fill
import home_nf from "../../assets/icons/home-nf.svg";
import options_nf from "../../assets/icons/apps-nf.svg";
import room_nf from "../../assets/icons/room-nf.svg";
import employee_nf from "../../assets/icons/employees-nf.svg";
import user_nf from "../../assets/icons/person-nf.svg";
import finance_nf from "../../assets/icons/finance-nf.svg";
import logout_nf from "../../assets/icons/logout-nf.svg";

// Icons fill
import home_fill from "../../assets/icons/home-fill.svg";
import room_fill from "../../assets/icons/room-fill.svg";
import employee_fill from "../../assets/icons/employee-fill.svg";
import finance_fill from "../../assets/icons/finance-fill.svg";
import user_fill from "../../assets/icons/person-fill.svg";
// import logout_fill from "../../assets/icons/logout-nf.svg";

import Logout from "../../api-client/Auth/Logout";

export default function Navbar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* Home Page navigation */}
        {path !== "/" && (
          <Link to="/" className="nav-link">
            <img className="icons" src={home_nf} alt="" />
            <div className="routes">Home</div>
          </Link>
        )}
        {path === "/" && (
          <div className="nav-link">
            <img className="icons" src={home_fill} alt="" />
            <div className="routes active">Home</div>
          </div>
        )}

        {/* Options Page navigation */}
        {path === "/options" && (
          <div className="nav-link">
            <img className="icons" src={options_nf} alt="" />
            <div className="routes active">Options</div>
          </div>
        )}

        {path !== "/options" && (
          <Link to="/options" className="nav-link">
            <img className="icons" src={options_nf} alt="" />
            <div className="routes">Options</div>
          </Link>
        )}
        {/* Room Page navigation */}
        {path !== "/rooms" && (
          <Link to="/rooms" className="nav-link">
            <img className="icons" src={room_nf} alt="" />
            <div className="routes">Rooms</div>
          </Link>
        )}
        {path === "/rooms" && (
          <div className="nav-link">
            <img className="icons" src={room_fill} alt="" />
            <div className="routes active">Rooms</div>
          </div>
        )}
        {/* Finance Page navigation */}
        {path === "/finance" && (
          <div className="nav-link">
            <img className="icons" src={finance_fill} alt="" />
            <div className="routes active">Finance</div>
          </div>
        )}

        {path !== "/finance" && (
          <Link to="/finance" className="nav-link">
            <img className="icons" src={finance_nf} alt="" />
            <div className="routes">Finance</div>
          </Link>
        )}
        {/* Employees Page navigation */}
        {path !== "/employees" && (
          <Link to="/employees" className="nav-link">
            <img className="icons" src={employee_nf} alt="" />
            <div className="routes">Staff</div>
          </Link>
        )}
        {path === "/employees" && (
          <div className="nav-link">
            <img className="icons" src={employee_fill} alt="" />
            <div className="routes active">Staff</div>
          </div>
        )}
        {/* Users Page navigation */}
        {path === "/users" && (
          <div className="nav-link">
            <img className="icons" src={user_fill} alt="" />
            <div className="routes active">Users</div>
          </div>
        )}
        {path !== "/users" && (
          <Link to="/users" className="nav-link">
            <img className="icons" src={user_nf} alt="" />
            <div className="routes">Users</div>
          </Link>
        )}
      </div>

      <div
        className="nav-link logout"
        onClick={() => {
          const response = Logout();
          response
            .then((res) => {
              navigate("/login");
            })
            .catch((err) => err);
        }}
      >
        <img className="icons" src={logout_nf} alt="" />
        <div className="routes">Log out</div>
      </div>
    </nav>
  );
}
