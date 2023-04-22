import { useState, useEffect } from "react";

// Components
import Footer from "../../Global/Components/Footer";

//APIs
import GetProfile from "../../api-client/Account/GetProfile";
import EditProfile from "../../api-client/Account/EditProfile";

const Profile = () => {
  const [user, setUser] = useState({});
  const [user_details, setUserDetails] = useState({});

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [edit, setEdit] = useState(false);
  useEffect(() => {
    let user = GetProfile();
    console.log("Request");
    user
      .then((res) => {
        setUsername(res.user.username);
        setEmail(res.user.email);
        setDob(res.user.dob);
        setGender(res.user.gender);
        setPhoneNumber(res.user_details.phone_number);
        setUser(res.user);
        setUserDetails(res.user_details);
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  useEffect(() => {
    handleCancel();
  }, [user, user_details]);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleCancel = () => {
    setEdit(false);
    setUsername(user.username);
    setEmail(user.email);
    setPhoneNumber(user_details.phone_number);
    setDob(user.dob);
    setGender(user.gender);
  };
  const handleSubmit = () => {
    setEdit(console.log("Submitted"));
  };
  function formatDate(dateString) {
    if (!dateString || !dateString.includes("-")) {
      return "Invalid date format";
    }
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <div className="profile-container">
        <form className="profile-section">
          <div className="profile-item">
            <div className="profile-title">
              <h2>Personal information</h2>
              <h5>Update your personal information</h5>
            </div>
            <div>
              {edit && (
                <button
                  type="Submit"
                  className="profile-btn save"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              )}
              <button
                type="button"
                className="profile-btn"
                onClick={() => {
                  if (edit) {
                    handleCancel();
                  } else {
                    handleEdit();
                  }
                }}
              >
                {!edit ? "Edit" : "Cancel"}
              </button>
            </div>
          </div>
          <div className="account-item">
            <div className="account-info">
              <div className="info-item">
                <label>Display name</label>
              </div>
              {edit && (
                <div className="info-item">
                  <input
                    type="text"
                    className="account-input"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              )}
              {!edit && (
                <div className="info-item">
                  <p>{user.username}</p>
                </div>
              )}
            </div>
          </div>
          <div className="account-item">
            <div className="account-info">
              <div className="info-item">
                <label>Email</label>
              </div>
              {edit && (
                <div className="info-item">
                  <input
                    type="email"
                    className="account-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              )}
              {!edit && (
                <div className="info-item">
                  <p>{user.email}</p>
                </div>
              )}
            </div>
          </div>
          <div className="account-item">
            <div className="account-info">
              <div className="info-item">
                <label>Phone number</label>
              </div>
              {edit && (
                <div className="info-item">
                  <input
                    type="text"
                    className="account-input"
                    value={phone_number}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              )}
              {!edit && (
                <div className="info-item">
                  <p>{user_details.phone_number}</p>
                </div>
              )}
            </div>
          </div>
          <div className="account-item">
            <div className="account-info">
              <div className="info-item">
                <label>Date of birth</label>
              </div>
              {edit && (
                <div className="info-item">
                  <input
                    type="date"
                    className="account-input"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>
              )}
              {!edit && (
                <div className="info-item">
                  <p>{formatDate(user.dob)}</p>
                </div>
              )}
            </div>
          </div>

          <div className="account-item">
            <div className="account-info">
              <div className="info-item">
                <label>Gender</label>
              </div>
              {edit && (
                <div className="info-item">
                  <input
                    type="text"
                    className="account-input"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
              )}
              {!edit && (
                <div className="info-item">
                  <p>{user.gender}</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
