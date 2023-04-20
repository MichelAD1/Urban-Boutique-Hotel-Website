import "../../Global/Styles/styles.css";
import ReactModal from "react-modal";
import close_cp from "../../assets/icons/close-option.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const ReviewItem = () => {
  const [isReplyModalOpen, setReplyModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loc = useLocation();
  const [data, setData] = useState(loc.state.data);
  const [err, setErr] = useState("");

  const [ban, setBan] = useState("");
  const [username, setUsername] = useState(data.username);
  const [room_id, setRoomID] = useState(data.room_id);
  const [review, setReview] = useState(data.review);
  const [reply, setReply] = useState("");
  const [date, setDate] = useState(data.date);

  useEffect(() => {
    setUsername(data.username);
    setRoomID(data.room_id);
    setReview(data.review);
    setDate(data.date);
  }, []);

  const handleReply = () => {
    setErr("");
    setReply("");
    openReplyModal();
  };
  const openReplyModal = () => {
    setReplyModalOpen(true);
  };
  const closeReplyModal = () => {
    setReplyModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleBan = () => {
    openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="edit-user">
        <div className="info-box">
          <div className="edit-info">
            <div className="labels-section">
              <div className="label-text">Type: </div>
              <div className="label-text">Username: </div>
              <div className="label-text">Room ID: </div>
              <div className="label-text">Date: </div>
              <div className="label-text">Review: </div>
            </div>
            <div className="inputs-section">
              <div type="text" className="info-text">
                Review
              </div>
              <div type="text" className="info-text">
                {username}
              </div>
              <div type="text" className="info-text">
                {room_id}
              </div>
              <div type="text" className="info-text">
                {date}
              </div>
              <div type="text" className="info-text">
                {review}
              </div>
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={handleBan} className="action-bt delete">
              Delete
            </button>
            <button onClick={handleReply} className="action-bt save">
              Reply
            </button>
          </div>
          <ReactModal
            className="custom-modal"
            isOpen={isModalOpen}
            style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
          >
            <div>
              <h1>Confirm Delete</h1>
              <p>Are you sure you want to delete this review?</p>
              <button>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </ReactModal>
          <ReactModal
            className="custom-modal"
            isOpen={isReplyModalOpen}
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
            }}
          >
            <div>
              <div className="header-options">
                <div className="header-name">
                  <h1>Reply</h1>
                </div>
                <div className="header-close">
                  <img onClick={closeReplyModal} src={close_cp} alt="" />
                </div>
              </div>

              <div className="edit-info">
                <div className="budget-section">
                  <div className="budget-text">Message: </div>
                </div>
                <form>
                  <div className="input-section">
                    <input
                      type="textarea"
                      className="input-box"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                    />
                  </div>
                  <div className="add-pac-error">{err}</div>
                  <button className="budget-button" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
