import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Rating from "../../../Global/Components/Rating";

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

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>Review #{data.id}</h2>
					<button className='button button-large'>Show on website</button>
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
		</div>
	);
};

export default ReviewItem;
