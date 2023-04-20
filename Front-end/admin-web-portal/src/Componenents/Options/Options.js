import "./option-styles.css";

import { useMemo, useState, useEffect } from "react";
import GetOptions from "../../api-client/Options/GetOptions";
import ReactModal from "react-modal";
import ConvertImage from "../../Global/Functions/ConvertImage";
import AddOptions from "../../api-client/Options/AddOptions";
// Componenets
import BasicTable from "../../Global/Components/Tables/BasicTable";

// Icons
import add_cp from "../../assets/icons/add-cp.svg";
import close_cp from "../../assets/icons/close-option.svg";

function Options() {
	const categorie_type = "Category";
	const package_type = "Package";
	const [categories, setCategories] = useState([]);
	const [icon, setIcon] = useState("");
	const [packages, setPackages] = useState([]);

	const [catErr, setCatErr] = useState("");
	const [packErr, setPackErr] = useState("");

	const [option, setOption] = useState("");
	const [err, setErr] = useState("");

	const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
	const [isPackageModalOpen, setPackageModalOpen] = useState(false);

	const [categoryname, setCategoryName] = useState("");
	const [packagetitle, setPackageTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [duration, setDuration] = useState("");
	const [quantity, setQuantity] = useState("");

	const openCategoryModal = () => {
		setCategoryModalOpen(true);
	};
	const openPackageModal = () => {
		setPackageModalOpen(true);
	};

	const handleAddCategory = () => {
		setErr("");
		setCategoryName("");
		setOption("Category");
		openCategoryModal();
	};
	const handleAddPackage = () => {
		setErr("");
		setPackageTitle("");
		setDescription("");
		setPrice("");
		setDuration("");
		setQuantity("");
		setOption("Package");
		openPackageModal();
	};

	const handleConfirmAdd = (e) => {
		e.preventDefault();
		if (option === "Category") {
			if (categoryname === "" || icon === "") {
				setErr("All fields are required.");
			} else {
				const response = AddOptions(
					option,
					categoryname,
					packagetitle,
					description,
					price,
					duration,
					quantity,
					icon,
				);
				response.then((res) => {
					setCategories([...categories, res]);
					closeCategoryModal();
				});
			}
		} else if (option === "Package") {
			if (
				packagetitle === "" ||
				description === "" ||
				price === "" ||
				duration === "" ||
				quantity === ""
			) {
				setErr("All fields are required.");
			} else {
				const response = AddOptions(
					option,
					categoryname,
					packagetitle,
					description,
					price,
					duration,
					quantity,
				);
				response.then((res) => {
					setPackages([...packages, res]);
					closePackageModal();
				});
			}
		}
	};

	const closeCategoryModal = () => {
		setCategoryModalOpen(false);
	};
	const closePackageModal = () => {
		setPackageModalOpen(false);
	};
	// Categories columns
	const categories_columns = useMemo(
		() => [
			{
				Header: "id",
				accessor: "id",
			},
			{
				Header: "category",
				accessor: "name",
			},
			{
				Header: "count",
				accessor: "business_count",
			},
			{
				Header: "action",
			},
		],
		[],
	);

	// Packages columns
	const packages_columns = useMemo(
		() => [
			{
				Header: "id",
				accessor: "id",
			},
			{
				Header: "title",
				accessor: "title",
			},
			{
				Header: "price",
				accessor: "price",
			},
			{
				Header: "duration",
				accessor: "duration",
			},
			{
				Header: "sales",
				accessor: "sales_count",
			},
			{
				Header: "action",
			},
		],
		[],
	);

	useEffect(() => {
		let options = GetOptions();
		options
			.then((res) => {
				Promise.all(res).then((results) => {
					if (results[0].status === "error") {
						setPackErr(results[0].message);
					}
					if (results[1].status === "error") {
						setCatErr(results[1].message);
					}
					if (results[0].status === "success") {
						setPackages(results[0].data);
					}
					if (results[1].status === "success") {
						setCategories(results[1].data);
					}
				});
			})
			.catch((err) => {
				return err;
			});
	}, []);

	return (
		<div className='container'>
			<div className='option-container'>
				<div className='option-box'>
					<div className='option-header'>
						<div className='option-title'>Categories</div>
						<div>
							<img
								onClick={handleAddCategory}
								src={add_cp}
								className='add-cp'
								alt=''
							/>

							<ReactModal
								className='custom-modal'
								isOpen={isCategoryModalOpen}
								style={{
									overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
								}}>
								<div>
									<div className='header-options'>
										<div className='header-name'>
											<h1>Add Category</h1>
										</div>
										<div className='header-close'>
											<img onClick={closeCategoryModal} src={close_cp} alt='' />
										</div>
									</div>

									<div className='edit-info'>
										<div className='labels-section'>
											<div className='labels-section'>
												<div className='label-text options category'>Name:</div>
												<div
													className='label-text options category'
													htmlFor='icon-upload'>
													Icon:
												</div>
											</div>
										</div>
										<form onSubmit={handleConfirmAdd}>
											<div className='input-section'>
												<input
													type='text'
													className='input-box'
													value={categoryname}
													onChange={(e) => setCategoryName(e.target.value)}
												/>
												<input
													type='file'
													className='input-box'
													id='icon-upload'
													required
													onChange={(e) => {
														ConvertImage(e.target.files[0]).then((res) => {
															setIcon(res);
														});
													}}
												/>
											</div>
											<div className='add-cat-error'>{err}</div>
											<button className='button category' type='submit'>
												Add
											</button>
										</form>
									</div>
								</div>
							</ReactModal>
						</div>
					</div>

					<BasicTable
						reqData={categories}
						columns={categories_columns}
						type={categorie_type}
						err={catErr}
					/>
				</div>
				<div className='option-box'>
					<div className='option-header'>
						<div className='option-title'>Packages</div>
						<div>
							<img
								onClick={handleAddPackage}
								src={add_cp}
								className='add-cp'
								alt=''
							/>{" "}
							<ReactModal
								className='custom-modal packages'
								isOpen={isPackageModalOpen}
								style={{
									overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
								}}>
								<div>
									<div className='header-options'>
										<div className='header-name'>
											<h1>Add Package</h1>
										</div>
										<div className='header-close packages'>
											<img onClick={closePackageModal} src={close_cp} alt='' />
										</div>
									</div>

									<div className='edit-info packages'>
										<div className='labels-section'>
											<div className='label-text options'>Title: </div>
											<div className='label-text options'>Description: </div>
											<div className='label-text options'>
												Duration (in hours):{" "}
											</div>
											<div className='label-text options'>Price (USD): </div>
											<div className='label-text options'>Quantity: </div>
										</div>
										<form onSubmit={handleConfirmAdd}>
											<div className='input-section'>
												<input
													type='text'
													className='input-box'
													value={packagetitle}
													onChange={(e) => setPackageTitle(e.target.value)}
												/>
												<input
													type='text'
													className='input-box'
													value={description}
													onChange={(e) => setDescription(e.target.value)}
												/>
												<input
													type='number'
													className='input-box'
													value={duration}
													onChange={(e) => setDuration(e.target.value)}
												/>
												<input
													type='number'
													className='input-box'
													value={price}
													onChange={(e) => setPrice(e.target.value)}
												/>
												<input
													type='number'
													className='input-box'
													value={quantity}
													onChange={(e) => setQuantity(e.target.value)}
												/>
											</div>
											<div className='add-pac-error'>{err}</div>
											<button className='button package' type='submit'>
												Add
											</button>
										</form>
									</div>
								</div>
							</ReactModal>
						</div>
					</div>

					<BasicTable
						reqData={packages}
						columns={packages_columns}
						type={package_type}
						err={packErr}
					/>
				</div>
			</div>
		</div>
	);
}

export default Options;
