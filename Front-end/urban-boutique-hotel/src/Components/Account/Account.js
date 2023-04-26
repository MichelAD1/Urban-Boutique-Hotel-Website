import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// Icons
import { MdManageAccounts, MdMarkEmailUnread } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { BsPersonLock } from "react-icons/bs";
import Table from "../../Global/Components/Table";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const columns = [
    { id: "room_name", label: "Room Name", minWidth: 100 },
    { id: "checkin", label: "Check In Date", minWidth: 100 },
    { id: "checkout", label: "Check Out Date", minWidth: 100 },
  ];

  function createData(room_name, checkin, checkout) {
    return { room_name, checkin, checkout };
  }
  const initialRows = [
    createData("Standard Room", "2023-04-27", "2023-04-27"),
    createData("Exclusive Room", "2023-04-27", "2023-04-27"),
    createData("Deluxe Room", "2023-04-27", "2023-04-27"),
  ];
  useEffect(() => {
    if (initialRows.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [initialRows]);
  return (
    <div className="account-container">
      <div className="account-section">
        <h2>Account settings</h2>
        <h5>Manage your booking experience</h5>
        <div className="settings-container">
          <Link to="/account/profile" className="settings-box">
            <MdManageAccounts className="settings-icon" />
            <div className="settings-content">
              <h3>Personal information</h3>
              <p>Update your personal information</p>
              <div className="settings-link">
                Manage your personal information
              </div>
            </div>
          </Link>
          <Link to="/account/security" className="settings-box">
            <BsPersonLock className="settings-icon" />
            <div className="settings-content">
              <h3>Security</h3>
              <p>Adjust your security settings</p>
              <div className="settings-link">Manage security</div>
            </div>
          </Link>
          <Link to="/account/preferences" className="settings-box">
            <IoMdOptions className="settings-icon" />
            <div className="settings-content">
              <h3>Preferences</h3>
              <p>Change your language and currency</p>
              <div className="settings-link">Manage preferences</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="reservations-section">
        <h2>Reservations</h2>

        {isEmpty ? (
          <h5>You currently have no reservations</h5>
        ) : (
          <>
            <h5>Manage your reservations</h5>{" "}
            <Table columns={columns} initialRows={initialRows} />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
