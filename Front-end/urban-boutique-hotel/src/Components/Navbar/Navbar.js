import { useLocation, Link, useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="links-section">
        {" "}
        <Link to="/" className="nav-link">
          <div className={`routes ${path === "/" ? "active" : ""}`}>Home</div>
        </Link>
        <Link to="/rooms" className="nav-link">
          <div className={`routes ${path === "/rooms" ? "active" : ""}`}>
            Rooms
          </div>
        </Link>
        <Link to="/offers" className="nav-link">
          <div className={`routes ${path === "/offers" ? "active" : ""}`}>
            Services
          </div>
        </Link>
        <Link to="/findus" className="nav-link">
          <div className={`routes ${path === "/findus" ? "active" : ""}`}>
            Find Us
          </div>
        </Link>
        <Link to="/discover" className="nav-link">
          <div className={`routes ${path === "/discover" ? "active" : ""}`}>
            About
          </div>
        </Link>
        <Link to="/contact" className="nav-link">
          <div className={`routes ${path === "/contact" ? "active" : ""}`}>
            Contact
          </div>
        </Link>
      </div>
      <div className="login-section">
        <div className="login-btn">
          <Link to="/login" className="nav-link">
            <div className="login-img">
              <HiUserCircle className="nav-image" />
            </div>
            <div className="routes nav-btn">Sign In</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
