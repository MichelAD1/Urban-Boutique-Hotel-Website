import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const path = useLocation().pathname;
  const [active, setActive] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    navbar.style.height = active ? "auto" : "4em";
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const login_btn = document.getElementById("login-btn");
      if (window.innerWidth === window.screen.width) {
        login_btn.style.opacity = "1";
        login_btn.style.pointerEvents = "all";
        handleClose();
      } else {
        login_btn.style.opacity = "0";
        login_btn.style.pointerEvents = "none";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleToggle = () => {
    setActive(!active);
    const navbar = document.getElementById("navbar");
    const links = document.getElementById("links-section");
    const login_btn = document.getElementById("login-btn");

    navbar.style.height = "auto";
    links.style.pointerEvents = "all";
    login_btn.style.opacity = "1";
    login_btn.style.pointerEvents = "all";
  };

  const handleClose = () => {
    setActive(!active);
    const navbar = document.getElementById("navbar");
    const links = document.getElementById("links-section");
    const login_btn = document.getElementById("login-btn");

    navbar.style.height = "4em";
    links.style.pointerEvents = "none";
    login_btn.style.opacity = "0";
    login_btn.style.pointerEvents = "none";
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-image">Logo</div>
      <ul
        className={active ? "links-section" : "links-section show-nav"}
        id="links-section"
      >
        {" "}
        <Link to="/" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/" ? "active" : ""}`}>Home</li>
        </Link>
        <Link to="/rooms" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/rooms" ? "active" : ""}`}>
            Rooms
          </li>
        </Link>
        <Link to="/services" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/services" ? "active" : ""}`}>
            Services
          </li>
        </Link>
        <Link to="/findus" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/findus" ? "active" : ""}`}>
            Find Us
          </li>
        </Link>
        <Link to="/discover" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/discover" ? "active" : ""}`}>
            Discover
          </li>
        </Link>
        <Link to="/contact" className="nav-link" onClick={handleClose}>
          <li className={`routes ${path === "/contact" ? "active" : ""}`}>
            Contact
          </li>
        </Link>
      </ul>
      <div className="login-section">
        <div className="login-btn" id="login-btn">
          <Link to="/login" className="nav-link" onClick={handleClose}>
            <div className="login-img">
              <HiUserCircle className="nav-image" />
            </div>
            <div className="routes">Log in</div>
          </Link>
        </div>
      </div>
      {!active && (
        <button type="button" className="nav-btn" onClick={handleToggle}>
          <FaAlignRight className="nav-icon" />
        </button>
      )}
      {active && (
        <button
          type="button"
          className="nav-btn close-btn"
          onClick={handleClose}
        >
          <AiOutlineClose className="nav-icon" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
