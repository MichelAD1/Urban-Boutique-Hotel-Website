// Images
import logo from "../../assets/images/logo.png";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const AccountNav = () => {
  return (
    <nav className="account-navbar" id="navbar">
      <Link to="/">
        <img className="nav-image" src={logo} />
      </Link>
      <HiUserCircle className="account-image" />
    </nav>
  );
};

export default AccountNav;
