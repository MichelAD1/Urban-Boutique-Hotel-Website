import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { AiOutlinePlus } from "react-icons/ai";
import search_icon from "../../../assets/icons/search.svg";

// Components
import OptionsCard from "../../../Global/Components/OptionsCard";

const FaqPolicyList = () => {
	const [data, setData] = useState([]);

	const [policies, setPolicies] = useState([]);
	const [faqs, setFaqs] = useState([]);

	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		setPolicies([
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

		setFaqs([
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
	}, [policies, faqs]);

	const mergeAndTagData = () => {
		let mergedAndTaggedData = [];
		policies.forEach((policy) => {
			mergedAndTaggedData.push({ ...policy, tag: "policy" });
		});
		faqs.forEach((faq) => {
			mergedAndTaggedData.push({ ...faq, tag: "faq" });
		});
		return mergedAndTaggedData;
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
					<option value=''>Filter by category</option>
				</select>
				<Link to='/room/profile'>
					<AiOutlinePlus className='add-button' />
				</Link>
			</div>
			<div className='options-list'>
				<div className='list-box'></div>
			</div>
		</div>
	);
};

export default FaqPolicyList;
