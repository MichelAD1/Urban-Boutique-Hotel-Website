import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// Icons
import { MdManageAccounts, MdMarkEmailUnread } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { BsPersonLock } from "react-icons/bs";
import Table from "../../Global/Components/Table";

//Apis
import GetReservations from "../../api-client/Account/GetReservations";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [initialRows, setRows] = useState([]);

  const {
    status,
    error,
    data: reservationData,
  } = useQuery(["reservationdata"], GetReservations, {
    staleTime: 300000, // 5 minutes
  });

  useEffect(() => {
    if (status === "success" && reservationData) {
      const newRows = reservationData.map((reservation) =>
        createData(
          reservation.name,
          reservation.reservation_date,
          reservation.reservation_end
        )
      );
      setRows(newRows);
      setLoading(false);
    }
  }, [reservationData, status, error]);

  const columns = [
    { id: "name", label: "Room Name", minWidth: 100 },
    { id: "reservation_date", label: "Check In Date", minWidth: 100 },
    { id: "reservation_end", label: "Check Out Date", minWidth: 100 },
  ];
  function createData(name, reservation_date, reservation_end) {
    return { name, reservation_date, reservation_end };
  }
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
          <>
            {loading ? (
              <div className="buffer-space">
                <div className="buffer-loader home"></div>
              </div>
            ) : (
              <h5>You currently have no reservations</h5>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div className="buffer-space">
                <div className="buffer-loader home"></div>
              </div>
            ) : (
              <div>
                <h5>Manage your reservations</h5>{" "}
                <Table columns={columns} initialRows={initialRows} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
