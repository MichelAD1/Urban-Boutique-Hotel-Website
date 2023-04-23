import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import search_icon from "../../../assets/icons/search.svg";

// Components
import OptionsCard from "../../../Global/Components/OptionsCard";
import ReactModal from "react-modal";

const RegulationDisasterList = () => {
	const [data, setData] = useState([]);

	const [regulations, setRegulations] = useState([]);
	const [disaster, setDisaster] = useState([]);

	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		setRegulations([
			{
				id: 1,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
			{
				id: 2,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
			{
				id: 3,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
		]);

		setDisaster([
			{
				id: 1,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
			{
				id: 2,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
			{
				id: 3,
				title: "What is the cancellation policy?",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
		]);

		setData(mergeAndTagData());
	}, []);

	useEffect(() => {
		setData(mergeAndTagData());
	}, [regulations, disaster]);

	const mergeAndTagData = () => {
		let mergedAndTaggedData = [];
		regulations.forEach((regulation) => {
			mergedAndTaggedData.push({ ...regulation, tag: "regulation" });
		});
		disaster.forEach((disaster) => {
			mergedAndTaggedData.push({ ...disaster, tag: "disaster" });
		});
		return mergedAndTaggedData;
	};

	const capitalize = (str) => {
		if (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	};

	const filterByTag = (data) => {
		if (filter) {
			return data.filter((item) => item.tag === filter.toLowerCase());
		}
		return data;
	};

	const tags = ["Regulation", "Disaster"];

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleRedirect = (item) => {
		closeModal();
		// navigate("/options/faqs_policies/info", item);
	};

	return (
		<div className='container'>
			<div className='searchAndFilter'>
				<div className='search-bar'>
					<img src={search_icon} alt='' className='search-icon' />
					<input
						className='search-input'
						type='text'
						placeholder='Search'
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<select
					className='filterDropDown'
					onChange={(e) => setFilter(e.target.value)}>
					<option value=''>All</option>
					{tags.map((tag) => (
						<option key={tag} value={tag}>
							{capitalize(tag)}
						</option>
					))}
				</select>
				<div onClick={() => openModal()}>
					<AiOutlinePlus className='add-button' />
				</div>
			</div>
			<div className='options-list'>
				<div className='list-box'>
					{filterByTag(data).map((item, i) => (
						<OptionsCard reqData={item} key={i} />
					))}
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
					<div className='modal-header'>
						<h1>Choose option</h1>
						<AiOutlineClose className='close-button' onClick={closeModal} />
					</div>

					<p>Which option do you want to add?</p>
					<button
						onClick={() =>
							handleRedirect({
								state: { tag: "Disaster response plan", type: "add" },
							})
						}>
						Disaster response plan
					</button>
					<button
						style={{ backgroundColor: "#aca0a0", color: "#fff" }}
						onClick={() =>
							handleRedirect({ state: { tag: "Regulation", type: "add" } })
						}>
						Regulation
					</button>
				</div>
			</ReactModal>
		</div>
	);
};

export default RegulationDisasterList;
