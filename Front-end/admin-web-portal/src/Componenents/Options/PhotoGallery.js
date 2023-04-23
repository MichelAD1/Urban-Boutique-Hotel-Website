import { useState, useEffect } from "react";

// Icons
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";

// Images
import room1 from "../../assets/dummy.png";
import room2 from "../../assets/dummy.png";
import room3 from "../../assets/dummy.png";

const PhotoGallery = () => {
	const [edit, setEdit] = useState(false);

	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages([
			{
				id: 1,
				image: room1,
			},
			{
				id: 2,
				image: room2,
			},
			{
				id: 3,
				image: room3,
			},
		]);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(false);
	};

	const handleCancel = () => {
		setEdit(false);
	};

	const addImage = (e) => {
		const files = e.target.files;
		const tmp_images = [];
		for (let i = 0; i < files.length; i++) {
			tmp_images.push(files[i]);
		}
		// setImages(...images, tmp_images);
		console.log(tmp_images);
	};

	return (
		<div className='container'>
			<form
				className='edit-container edit-container-large'
				onSubmit={handleSubmit}>
				<div className='edit-item'>
					<h2>Gallery</h2>
					{!edit && (
						<button className='button' onClick={() => setEdit(true)}>
							Edit
						</button>
					)}
					{edit && (
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
				<div className='gallery-container photo-gallery'>
					<div className='gallery-box '>
						<div className='gallery-header'>
							<div className='gallery-text'>
								<p>Add up to 15 images</p>
							</div>
							{edit && (
								<div>
									<label htmlFor='images-upload'>
										<AiOutlinePlus className='add-button' />
									</label>
									<input
										type='file'
										multiple
										onChange={(e) => addImage(e)}
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
									<div key={image.id}>
										<img className='gallery-images' src={image.image} />
										{edit && <RiDeleteBin2Fill className='delete-icon' />}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PhotoGallery;
