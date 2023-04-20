import "./business-styles.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Business from "./BusinessCard";

// Icons
import add_cp from "../../assets/icons/add-cp.svg";
import search_icon from "../../assets/icons/search.svg";

import GetBusiness from "../../api-client/Business/getBusiness";

// Authorisation

function Businesses() {
	const [data, setData] = useState([]);
	const [paginate, setPaginate] = useState(9);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	let counter_key = 1;

	useEffect(() => {
		const resp = GetBusiness();
		resp.then((res) => {
			if (res.data.data.length > 0) {
				setData(res.data.data);
			} else {
				setErr("No businesses found");
			}

			// setData(res.data);
		});
	}, []);

	const search_parameters = Object.keys(Object.assign({}, ...data));
	const filter_items = [...new Set(data.map((item) => item.category))].map(
		(category) => {
			return { category: category, id: counter_key++ };
		},
	);

	function search(items) {
		return items.filter(
			(item) =>
				item.category.includes(filter) &&
				search_parameters.some((parameter) =>
					item[parameter]
						.toString()
						.toLowerCase()
						.includes(query.toLowerCase()),
				),
		);
	}
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
					{filter_items.map((item) => (
						<option value={item.category} key={item.id}>
							{item.category}
						</option>
					))}
				</select>
				<Link to='/business/profile' className='add-button'>
					<img src={add_cp} width='28px' height='28px' alt='' />
				</Link>
			</div>
			<div className='business-list'>
				{data.map((item) => (
					<Business data={item} key={item.id} />
				))}
			</div>
			{filter === "" && query === "" && (
				<button
					className='load-more'
					onClick={() => {
						setPaginate(paginate + 9);
					}}>
					Load more
				</button>
			)}
		</div>
	);
}

export default Businesses;
