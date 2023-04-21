import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

import ConvertImage from "../../Global/Functions/ConvertImage";
import AddRoom from "../../api-client/Rooms/AddRoom";
import EditRoom from "../../api-client/Rooms/EditRoom";
import GetOptions from "../../api-client/Options/GetOptions";
//Icons
import add from "../../assets/icons/add-cp.svg";

// Images
import default_profile from "../../assets/default-profile.png";
import delete_icon from "../../assets/icons/cancel-icon.svg";
import DeleteRoom from "../../api-client/Rooms/DeleteRoom";

const RoomItem = () => {
	const loc = useLocation();
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);

	const [isValid, setIsValid] = useState(loc.state);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [oldPrice, setOldPrice] = useState(0);
	const [size, setSize] = useState(0);
	const [minibar, setMinibar] = useState(false);

	const [err, setErr] = useState("");

	const [profile, setProfile] = useState(default_profile);
	const [images, setImages] = useState([]);

	const [imagesChanged, setImagesChanged] = useState(false);
	const [addedImages, setAddedImages] = useState([]);
	const [deletedImages, setDeletedImages] = useState([]);

	useEffect(() => {
		if (isValid) {
			setName(isValid.data.name);
			setDescription(isValid.data.description);
		}
	}, []);

	const removeImage = (id) => {
		const newData = images.filter((image) => image.id !== id);
		setImages(newData);
		setDeletedImages((deletedImages) => [...deletedImages, id]);
		setImagesChanged(true);
	};

	async function addImage(e) {
		let v_id = 0;
		if (images.length !== 0) {
			v_id = images[images.length - 1].id;
		}
		for (let i = 0; i < e.target.files.length; i++) {
			await ConvertImage(e.target.files[i]).then((res) => {
				setImages((images) => [...images, { id: v_id + 1, imageurl: res }]);
				setAddedImages((addedImages) => [
					...addedImages,
					{ id: v_id + 1, imageurl: res },
				]);
				v_id++;
			});
		}
		setImagesChanged(true);
	}

	const dataToSend = () => {
		const requestData = new FormData();
		requestData.append("id", isValid.data.id);
		return requestData;
	};

	const checkChange = () => {
		return !(
			name === isValid.data.name &&
		);
	};

	const mergeJson = (obj1, obj2, obj3) => {
		const obj4 = {};
		for (const attrname in obj1) {
			obj4[attrname] = obj1[attrname];
		}
		for (const attrname in obj2) {
			obj4[attrname] = obj2[attrname];
		}
		obj4["images"] = obj3;
		return obj4;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setErr("");
		// if (profile === default_profile) {
		// 	setErr("Please upload a profile picture");
		// } else if (images.length === 0) {
		// 	setErr("Please upload at least one image");
		// } else {
		// 	const resp = AddRoom(
		// 		email,
		// 		password,
		// 		phoneNumber,
		// 		name,
		// 		location,
		// 		description,
		// 		category,
		// 		fb,
		// 		ig,
		// 		tiktok,
		// 		menu,
		// 		profile,
		// 		images,
		// 	);
		// 	resp.then((res) => {
		// 		if (res.status === 422) {
		// 			if (res.data.errors.email) {
		// 				setErr(res.data.message);
		// 			}
		// 			if (res.data.errors.number) {
		// 				setErr(res.data.message);
		// 			}
		// 		} else {
		// 			const new_data = mergeJson(res.user, res.business, res.images);
		// 			navigate("/room/profile", { state: { data: new_data } });
		// 			window.location.reload();
		// 		}
		// 	});
		// }
    console.log("submit")
	};

	const handleEdit = (e) => {
		e.preventDefault();
		// const resp = EditRoom(
		// 	isValid.data,
		// 	dataToSend(),
		// 	addedImages,
		// 	deletedImages,
		// 	imagesChanged,
		// 	checkChange(),
		// );
		// resp.then((res) => {
		// 	navigate("/room/profile", { state: { data: res } });
		// 	window.location.reload();
		// });
    console.log("Edit")
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

	console.log(isValid);

	return (
		<div className='container'>
			<form
				className='edit-container edit-container-large'
				onSubmit={(e) => {
					if (isValid) {
						handleEdit(e);
					} else {
						handleSubmit(e);
					}
				}}>
				<div className='edit-item'>
					<h2>Room #{isValid.data.id}</h2>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Name</label>
						</div>
						<div>
							<p>{name}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Description</label>
						</div>
						<div>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RoomItem;
