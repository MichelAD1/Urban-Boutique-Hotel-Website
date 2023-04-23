import React, { useState, useEffect } from "react";

const Security = () => {
  const [reset, setReset] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    handleResetCancel();
    handleDeleteCancel();
  }, []);

  const handleReset = () => {
    setReset(true);
  };
  const handleResetCancel = () => {
    setReset(false);
  };
  const handleSubmit = () => {
    console.log("Submitted");
  };

  const handleDeleteOpen = () => {
    setDeleteAcc(true);
  };
  const handleDeleteCancel = () => {
    setDeleteAcc(false);
  };
  const handleDelete = () => {
    console.log("Deleted");
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-item">
            <div className="profile-title">
              <h2>Security</h2>
              <h5>Change your language and currency</h5>
            </div>
          </div>
          <div className="account-item">
            <label>Passwosrd</label>
            <form className="account-info">
              <div>
                {reset && (
                  <button
                    type="Submit"
                    className="profile-btn save"
                    onClick={handleSubmit}
                  >
                    Send email
                  </button>
                )}
                <button
                  type="button"
                  className="profile-btn"
                  onClick={() => {
                    if (reset) {
                      handleResetCancel();
                    } else {
                      handleReset();
                    }
                  }}
                >
                  {!reset ? "Reset" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
          <div className="account-item">
            <label>Language</label>
            <form className="account-info">
              <div>
                {deleteAcc && (
                  <button
                    type="Submit"
                    className="profile-btn save"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                )}
                <button
                  type="button"
                  className="profile-btn"
                  onClick={() => {
                    if (deleteAcc) {
                      handleDeleteCancel();
                    } else {
                      handleDeleteOpen();
                    }
                  }}
                >
                  {!deleteAcc ? "Delete account" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
