import "../../Global/Styles/styles.css";
import ReactModal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BanUser from "../../api-client/Clients/BanUser";
const UserItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [ban, setBan] = useState("");
	const [username, setUsername] = useState(data.username);
	const [name, setName] = useState(data.full_name);
	const [email, setEmail] = useState(data.email);
	const [phoneNumber, setPhoneNumber] = useState(data.number);
	const [dob, setDob] = useState(data.dob);
	const [gender, setGender] = useState(data.gender);

	useEffect(() => {
		if (data.banned) {
			setBan("Unban");
		} else {
			setBan("Ban");
		}
		setUsername(data.username);
		setName(data.full_name);
		setEmail(data.email);
		setPhoneNumber(data.number);
		setDob(data.dob);
		setGender(data.gender);
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const handleBan = () => {
		openModal();
	};

	const handleConfirmBan = () => {
		let user_id = data.id;
		const response = BanUser(user_id);
		response.then((res) => {
			if (res.banned) {
				setBan("Unban");
			} else {
				setBan("Ban");
			}
		});
		closeModal();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='container'>
			<div className='edit-user'>
				<div className='info-box'>
					<div className='edit-info'>
						<div className='labels-section'>
							<div className='label-text'>Username: </div>
							<div className='label-text'>Name: </div>
							<div className='label-text'>Email: </div>
							<div className='label-text'>Phone number: </div>
							<div className='label-text'>Date of Birth: </div>
							<div className='label-text'>Gender: </div>
						</div>
						<div className='inputs-section'>
							<div type='text' className='info-text'>
								{username}
							</div>
							<div type='text' className='info-text'>
								{name}
							</div>
							<div type='text' className='info-text'>
								{email}
							</div>
							<div type='text' className='info-text'>
								{phoneNumber}
							</div>
							<div type='text' className='info-text'>
								{dob}
							</div>
							<div type='text' className='info-text'>
								{gender}
							</div>
						</div>
					</div>
					<div className='action-buttons'>
						<button onClick={handleBan} className='action-bt delete'>
							{ban}
						</button>
					</div>
					<ReactModal
						className='custom-modal'
						isOpen={isModalOpen}
						style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}>
						<div>
							<h1>Confirm {ban}</h1>
							<p>Are you sure you want to {ban} this user?</p>
							<button onClick={handleConfirmBan}>Yes</button>
							<button onClick={closeModal}>No</button>
						</div>
					</ReactModal>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
