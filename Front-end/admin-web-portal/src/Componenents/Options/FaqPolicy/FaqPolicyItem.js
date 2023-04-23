import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const FaqPolicyItem = () => {
	const loc = useLocation();
	const [isValid, setIsValid] = useState(loc.state);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tag, setTag] = useState("");

	const [edit, setEdit] = useState(false);

	useEffect(() => {
		if (isValid) {
			setIsValid(loc.state.data);
		}
	}, [loc.state]);

	useEffect(() => {
		if (isValid) {
			setTitle(isValid.title);
			setDescription(isValid.description);
			setTag(isValid.tag);
		}
	}, [isValid]);

	const capitalize = (str) => {
		if (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setEdit(false);
		setTitle(isValid.title);
		setDescription(isValid.description);
		setTag(isValid.tag);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setEdit(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(false);
	};

	return (
		<div className='container'>
			<form
				className='edit-container'
				onSubmit={(e) => {
					if (isValid) {
						handleSubmit(e);
					} else {
						handleEdit(e);
					}
				}}>
				<div className='edit-item'>
					<h2>
						{capitalize(tag)} #{isValid.id}
					</h2>
					{edit && (
						<>
							<button className='save-button' type='submit'>
								Save
							</button>
							<button className='button' onClick={(e) => handleCancel(e)}>
								cancel
							</button>
						</>
					)}
					{!edit && (
						<button className='button' onClick={() => setEdit(true)}>
							Edit
						</button>
					)}
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Title</label>
						</div>
						<div>
							{!edit && <p>{title}</p>}
							{edit && (
								<textarea
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className='input-box bio-input'
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
			</form>
			{/* <ReactModal
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
			</ReactModal> */}
		</div>
	);
};

export default FaqPolicyItem;
