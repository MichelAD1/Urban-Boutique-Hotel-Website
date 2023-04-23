import { useState, useEffect } from "react";

const FaqPolicyItem = () => {
	return (
		<div className='container'>
			{/* <div className='edit-container'>
				<div className='edit-item'>
					<h2>Review #{data.id}</h2>
					{!replied && (
						<button className='save-button' onClick={handleAddReply}>
							Save
						</button>
					)}
					<button className='button' onClick={handleAdd}>
						Show
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
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Reply</label>
						</div>
						<div>
							{replied && <p>{reply}</p>}
							{!replied && (
								<textarea
									value={reply}
									onChange={(e) => setReply(e.target.value)}
									className='input-box bio-input'
								/>
							)}
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
			</ReactModal> */}
		</div>
	);
};

export default FaqPolicyItem;
