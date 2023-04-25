import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            <Link to="/" className="footer-link">
              <li>Home</li>
            </Link>

            <Link to="/discover" className="footer-link">
              <li>Discover</li>
            </Link>

            <Link to="/rooms" className="footer-link">
              <li>Rooms</li>
            </Link>

            <Link to="/services" className="footer-link">
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About Us</h4>
          <ul className="footer-links">
            <Link to="/contact" className="footer-link">
              <li>Contact</li>
            </Link>
            <Link to="/privacypolicies" className="footer-link">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/FAQ" className="footer-link">
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in">
                  {" "}
                  <FaLinkedinIn />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-sm-center">
          &copy;{new Date().getFullYear()} Urban Boutique Hotel - All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
