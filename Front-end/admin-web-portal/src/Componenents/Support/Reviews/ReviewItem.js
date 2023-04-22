import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Rating from "../../../Global/Components/Rating";
import ReactModal from "react-modal";

const ReviewItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [username, setUsername] = useState(data.username);
	const [review, setReview] = useState(data.review);
	const [rating, setRating] = useState(data.rating);
	const [date, setDate] = useState(data.date);

	useEffect(() => {
		setUsername(data.username);
		setReview(data.review);
		setRating(data.rating);
		setDate(data.date);
	}, []);

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const handleAdd = () => {
		openModal();
	};

	const handleConfirmAdd = () => {
		closeModal();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>Review #{data.id}</h2>
					<button className='button button-large' onClick={handleAdd}>
						Show on website
					</button>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Username</label>
						</div>
						<div>
							<p>{username}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Review</label>
						</div>
						<div>
							<p>{review}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Rating</label>
						</div>
						<div>
							<Rating rate={rating} />
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Date</label>
						</div>
						<div>
							<p>{date}</p>
						</div>
					</div>
				</div>
			</div>
			<ReactModal
				className='custom-modal'
				isOpen={isModalOpen}
				style={{
					overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
					content: {
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						border: "none",
						width: "100%",
						height: "100%",
						margin: "auto",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: "100",
					},
				}}>
				<div>
					<h1>Confirm Add</h1>
					<p>Are you sure you want to add this to the website home page?</p>
					<button onClick={handleConfirmAdd}>Yes</button>
					<button onClick={closeModal}>No</button>
				</div>
			</ReactModal>
		</div>
	);
};

export default ReviewItem;
