import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import Room from "./RoomCard";

// Icons
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

// API
import GetRoom from "../../api-client/Rooms/GetRoom";

function Rooms() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	let counter_key = 1;

	const { status, error, data: roomsData } = useQuery(["rooms_data"], GetRoom);
	useEffect(() => {
		if (roomsData) {
			setData(roomsData);
		}
	}, [roomsData, status]);

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
					<AiOutlineSearch className='search-icon' />
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
				<Link to='/room/profile'>
					<AiOutlinePlus className='add-button' />
				</Link>
			</div>
			<div className='rooms-container'>
				<div className='list-box'>
					{data.map((item) => {
						return <Room data={item.room} key={item.room.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Rooms;
