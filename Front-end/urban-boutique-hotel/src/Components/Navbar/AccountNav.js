// Images
import logo from "../../assets/images/logo.png";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../api-client/Auth/Logout";

const AccountNav = () => {
  const navigation = useNavigate();
  const handleLogout = () => {
    const response = Logout();
    response
      .then((res) => {
        navigation(-1);
      })
      .catch((err) => err);
  };
  return (
    <nav className="account-navbar" id="navbar">
      <Link to="/">
        <img className="nav-image" src={logo} />
      </Link>
      <div className="nav-link" onClick={handleLogout}>
        <div className="login-img">
          <HiUserCircle className="account-image" />
        </div>
        <div className="routes">Log out</div>
      </div>
    </nav>
  );
};

export default AccountNav;
