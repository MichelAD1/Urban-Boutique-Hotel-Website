import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Room from "./RoomCard";

// Icons
import { AiOutlinePlus } from "react-icons/ai";
import search_icon from "../../assets/icons/search.svg";

import GetRoom from "../../api-client/Rooms/GetRoom";

import room1 from "../../assets/dummy.png";

function Rooms() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	let counter_key = 1;

	useEffect(() => {
		// const resp = GetRoom();
		// resp.then((res) => {
		//   if (res.data.data.length > 0) {
		//     setData(res.data.data);
		//   } else {
		//     setErr("No rooms found");
		//   }

		//   setData(res.data);
		// });
		setData([
			{
				id: 1,
				name: "Standard Room",
				price: 100.0,
				old_price: 150.0,
				guests: 2,
				type: "Queen Bed",
				size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1, room1, room1, room1, room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
				breakfast: false,
				pets: true,
			},
			{
				id: 1,
				name: "Standard Room",
				price: 100.0,
				old_price: null,
				guests: 2,
				type: "Queen Bed",
				size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
				breakfast: false,
				pets: true,
			},
			{
				id: 1,
				name: "Standard Room",
				price: 100.0,
				old_price: null,
				guests: 2,
				type: "Queen Bed",
				size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
				breakfast: false,
				pets: true,
			},
			{
				id: 1,
				name: "Standard Room",
				price: 100.0,
				old_price: null,
				guests: 2,
				type: "Queen Bed",
				size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
				breakfast: false,
				pets: true,
			},
			{
				id: 1,
				name: "Standard Room",
				price: 100.0,
				old_price: null,
				guests: 2,
				type: "Queen Bed",
				size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
				breakfast: false,
				pets: true,
			},
		]);
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
				<Link to='/room/profile'>
					<AiOutlinePlus className='add-button' />
				</Link>
			</div>
			<div className='rooms-container'>
				<div className='list-box'>
					{data.map((item) => (
						<Room data={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Rooms;
