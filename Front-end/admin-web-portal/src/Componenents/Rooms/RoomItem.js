import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

import ConvertImage from "../../Global/Functions/ConvertImage";
import AddRoom from "../../api-client/Rooms/AddRoom";
import EditRoom from "../../api-client/Rooms/EditRoom";
import GetOptions from "../../api-client/Options/GetOptions";
//Icons
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";

// Images
import delete_icon from "../../assets/icons/cancel-icon.svg";
import DeleteRoom from "../../api-client/Rooms/DeleteRoom";

const RoomItem = () => {
	const loc = useLocation();
	const navigate = useNavigate();

	const [edit, setEdit] = useState(false);

	const [isValid, setIsValid] = useState(loc.state);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [size, setSize] = useState(0);
	const [guests, setGuests] = useState(0);
	const [type, setType] = useState("");
	const [minibar, setMinibar] = useState(false);
	const [shower, setShower] = useState(false);
	const [towels, setTowels] = useState(false);
	const [tv, setTv] = useState(false);
	const [wifi, setWifi] = useState(false);
	const [desk, setDesk] = useState(false);
	const [breakfast, setBreakfast] = useState(false);
	const [pets, setPets] = useState(false);
	const [floor, setFloor] = useState(0);

	const [err, setErr] = useState("");

	const [images, setImages] = useState([]);

	const [imagesChanged, setImagesChanged] = useState(false);
	const [addedImages, setAddedImages] = useState([]);
	const [deletedImages, setDeletedImages] = useState([]);

	useEffect(() => {
		if (isValid) {
			handleCancel();
		} else {
			setEdit(true);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
		setEdit(false);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		console.log("Edit");
		setEdit(false);
	};

	const handleCancel = () => {
		if (isValid) {
			setEdit(false);
			setName(isValid.data.room.title);
			setDescription(isValid.data.room.description);
			setImages(isValid.data.images);
			setPrice(isValid.data.room.rent);
			setDiscount(isValid.data.room.discount);
			setSize(isValid.data.room.size);
			setMinibar(isValid.data.room.minibar);
			setGuests(isValid.data.room.guests);
			setType(isValid.data.room.beds);
			setShower(isValid.data.room.shower);
			setTowels(isValid.data.room.towels);
			setTv(isValid.data.room.tv);
			setWifi(isValid.data.room.wifi);
			setDesk(isValid.data.room.desk);
			setBreakfast(isValid.data.room.breakfast);
			setPets(isValid.data.room.pets);
			setFloor(isValid.data.room.floor);
		} else {
			navigate("/rooms");
		}
	};

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const handleDelete = () => {
		openModal();
	};

	const handleConfirmDelete = () => {
		const user_id = isValid.data.id;
		const response = DeleteRoom(user_id);
		response.then((res) => {
			if (res.status === 200) {
				navigate("/rooms");
			} else {
				setErr("Something went wrong");
			}
		});
		closeModal();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='container'>
			<form
				className='room-edit-container'
				onSubmit={(e) => {
					if (isValid) {
						handleEdit(e);
					} else {
						handleSubmit(e);
					}
				}}>
				<div className='edit-container edit-container-large'>
					<div className='edit-item'>
						{isValid && <h2>Room #{isValid.data.room.id}</h2>}
						{!isValid && <h2>Add Room</h2>}
						{isValid && (
							<button className='button' onClick={() => handleDelete()}>
								Delete
							</button>
						)}
						{!edit && isValid && (
							<button className='button' onClick={() => setEdit(true)}>
								Edit
							</button>
						)}
						{(edit || !isValid) && (
							<>
								<button className='save-button' type='submit'>
									Save
								</button>
								<button
									className='button'
									type='button'
									onClick={() => handleCancel()}>
									Cancel
								</button>
							</>
						)}
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Name</label>
							</div>
							<div>
								{!edit && <p>{name}</p>}
								{edit && (
									<input
										type='text'
										value={name}
										onChange={(e) => setName(e.target.value)}
										className='input-box'
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div style={{ alignSelf: "flex-start" }}>
								<label>Description</label>
							</div>
							<div>
								{!edit && <p>{description}</p>}
								{edit && (
									<textarea
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										className='input-box bio-input'
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Bed type</label>
							</div>
							<div>
								{!edit && <p>{type}</p>}
								{edit && (
									<input
										type='text'
										value={type}
										className='input-box'
										onChange={(e) => setType(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Guests</label>
							</div>
							<div>
								{!edit && <p>{guests}</p>}
								{edit && (
									<input
										type='number'
										value={guests}
										className='input-box'
										onChange={(e) => setGuests(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Size {edit ? "(sqft)" : ""}</label>
							</div>
							<div>
								{!edit && <p>{size} sqft</p>}
								{edit && (
									<input
										type='number'
										value={size}
										className='input-box'
										onChange={(e) => setSize(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Floor</label>
							</div>
							<div>
								{!edit && <p>{floor}th</p>}
								{edit && (
									<input
										type='number'
										value={floor}
										className='input-box'
										onChange={(e) => setFloor(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Price {edit ? "(USD)" : ""}</label>
							</div>
							<div>
								{!edit && <p>USD {price}</p>}
								{edit && (
									<input
										type='number'
										value={price}
										className='input-box'
										onChange={(e) => setPrice(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div>
								<label>Discount {edit ? "(USD)" : ""}</label>
							</div>
							<div>
								{!edit && <p>USD {discount}</p>}
								{edit && (
									<input
										type='number'
										value={discount}
										className='input-box'
										onChange={(e) => setDiscount(e.target.value)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='edit-item'>
						<div className='edit-info info-large'>
							<div style={{ alignSelf: "flex-start" }}>
								<label>Ammeneties</label>
							</div>
							<div className='amm-checkbox'>
								{(minibar || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={minibar}
												onChange={(e) => setMinibar(e.target.checked)}
											/>
										)}
										<label>Minibar</label>
									</div>
								)}
								{(shower || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={shower}
												onChange={(e) => setShower(e.target.checked)}
											/>
										)}
										<label>Shower</label>
									</div>
								)}
								{(towels || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={towels}
												onChange={(e) => setTowels(e.target.checked)}
											/>
										)}
										<label>Towels</label>
									</div>
								)}
								{(tv || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={tv}
												onChange={(e) => setTv(e.target.checked)}
											/>
										)}
										<label>Tv</label>
									</div>
								)}
								{(wifi || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={wifi}
												onChange={(e) => setWifi(e.target.checked)}
											/>
										)}
										<label>WI-FI</label>
									</div>
								)}
								{(desk || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={desk}
												onChange={(e) => setDesk(e.target.checked)}
											/>
										)}
										<label>Desk</label>
									</div>
								)}
								{(breakfast || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={breakfast}
												onChange={(e) => setBreakfast(e.target.checked)}
											/>
										)}
										<label>Breakfast</label>
									</div>
								)}
								{(pets || edit) && (
									<div className='checkbox-item'>
										{edit && (
											<input
												type='checkbox'
												checked={pets}
												onChange={(e) => setPets(e.target.checked)}
											/>
										)}
										<label>Pets</label>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='gallery-container'>
					<div className='gallery-box'>
						<div className='gallery-header'>
							<div className='gallery-text'>
								<h2>Gallery</h2>
								<p>Add up to 9 images</p>
							</div>
							{edit && (
								<div>
									<label htmlFor='images-upload'>
										<AiOutlinePlus className='add-button' />
									</label>
									<input
										type='file'
										multiple
										id='images-upload'
										name='images-upload'
										className='upload-image'
									/>
								</div>
							)}
						</div>
						<div className='gallery'>
							{images.map((image) => {
								return (
									<div>
										<img className='gallery-images' src={image} />
										{edit && <RiDeleteBin2Fill className='delete-icon' />}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</form>
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
					<h1>Confirm Delete</h1>
					<p>
						Are you sure you want to remove this room? This action cannot be
						undone.
					</p>
					<button onClick={handleConfirmDelete}>Yes</button>
					<button onClick={closeModal}>No</button>
				</div>
			</ReactModal>
		</div>
	);
};

export default RoomItem;
