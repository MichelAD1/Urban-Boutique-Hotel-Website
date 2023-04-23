import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About Us</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
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
