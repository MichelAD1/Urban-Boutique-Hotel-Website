import { useState, useEffect } from "react";

// Components
import Footer from "../../Global/Components/Footer";
import countries from "../../Global/Components/CountryCodes";

//APIs
import GetProfile from "../../api-client/Account/GetProfile";
import EditProfile from "../../api-client/Account/EditProfile";

const Profile = () => {
  const [user, setUser] = useState({});
  const [user_details, setUserDetails] = useState({});

  const [err, setErr] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [full_number, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [tmp_number, setTmpNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [edit, setEdit] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  //useEffects
  useEffect(() => {
    let user = GetProfile();
    user
      .then((res) => {
        setUsername(res.user.username);
        setEmail(res.user.email);
        setDob(res.user.dob);
        setGender(res.user.gender);
        setPhoneNumber(res.user_details.full_number);
        setUser(res.user);
        setUserDetails(res.user_details);
      })
      .catch((err) => {
        return err.response;
      });
  }, []);
  // Only send request if changes have been made
  useEffect(() => {
    if (
      username !== user.username ||
      email !== user.email ||
      full_number !== user_details.phone_number ||
      dob !== user.dob ||
      gender !== user.gender
    ) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  }, [username, email, full_number, dob, gender, user, user_details]);

  useEffect(() => {
    if (full_number) {
      setCountryCode(full_number.split(" ")[0]);
      setTmpNumber(full_number.split(" ")[1]);
    }
  }, [edit, full_number]);
  useEffect(() => {
    handleCancel();
  }, [user, user_details]);

  //Validators
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validateUsername = (username) => {
    return username.length <= 25 && username.length > 0;
  };
  const validateDate = (dob) => {
    const ageLimit = 18;
    const parsedDate = Date.parse(dob);
    if (dob === "") {
      return false;
    }
    // Check if input is a valid date string
    if (isNaN(parsedDate)) {
      return false;
    }

    const inputDate = new Date(parsedDate);

    // Check if input date is in the future
    if (inputDate.getTime() > Date.now()) {
      return false;
    }

    const diff = Date.now() - inputDate.getTime();
    const age = new Date(diff);

    // Check if age is exactly 18 years old
    if (age.getUTCFullYear() - 1970 === ageLimit) {
      const birthYear = inputDate.getFullYear();
      const todayYear = new Date().getFullYear();
      const isLeapYear = new Date(todayYear, 1, 29).getMonth() === 1;

      if (isLeapYear) {
        // Leap year, so February 29th is valid
        return inputDate.getMonth() === 1 && inputDate.getDate() === 29;
      } else {
        // Not a leap year, so February 28th is valid
        return inputDate.getMonth() === 1 && inputDate.getDate() === 28;
      }
    }

    return age.getUTCFullYear() - 1970 >= ageLimit;
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{7,15}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleEdit = () => {
    setEdit(true);
  };
  const handleCancel = () => {
    setErr("");
    setEdit(false);
    setUsername(user.username);
    setEmail(user.email);
    setPhoneNumber(user_details.phone_number);
    setDob(user.dob);
    setGender(user.gender);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!hasChanged) {
      setEdit(false);
      return;
    }
    setErr("");
    if (!validateUsername(username)) {
      if (username.length === 0) {
        setErr("Username field required");
      } else {
        setErr("Please enter a username that is not too long");
      }
      return;
    }
    if (!validateEmail(email)) {
      setErr("Please enter a valid email address");
      return;
    }
    if (!validatePhoneNumber(tmp_number)) {
      setErr("Please enter a valid phone number");
      return;
    }
    if (!validateDate(dob)) {
      setErr("Invalid date of birth");
      return;
    }
    const phone_number = countryCode + " " + tmp_number;
    setPhoneNumber(phone_number);
    event.preventDefault();
    const data = {
      username,
      email,
      gender,
      dob,
      phone_number,
    };
    let response = EditProfile(data);
    response.then((res) => {
      if (res.status === 409) {
        setErr("The email has already been taken");
      } else {
        setUser({
          ...user,
          username,
          email,
          gender,
          dob,
        });
        setUserDetails({
          ...user_details,
          phone_number,
        });
        setEdit(false);
      }
    });
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
              <div className="edit-error">{err}</div>
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
                <div className="info-item phone">
                  <select
                    className="account-input code"
                    value={countryCode}
                    onChange={(e) => {
                      setCountryCode(e.target.value);
                    }}
                  >
                    {countries.map((country) => (
                      <option key={country.name} value={country.dial_code}>
                        {country.dial_code} ({country.name})
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="account-input"
                    value={tmp_number}
                    onChange={(e) => {
                      setTmpNumber(e.target.value);
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
                  <select
                    className="account-input"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    {gender === "Female" ? (
                      <>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                      </>
                    ) : (
                      <>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </>
                    )}
                  </select>
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
