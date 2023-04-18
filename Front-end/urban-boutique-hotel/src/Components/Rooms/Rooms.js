import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

import RoomsList from "./RoomsList";

import room1 from "../../assets/images/room-1.jpeg";
import room2 from "../../assets/images/room-2.jpeg";
import room3 from "../../assets/images/room-3.jpeg";
import room4 from "../../assets/images/room-4.jpeg";
import room5 from "../../assets/images/room-5.jpeg";
import room6 from "../../assets/images/room-6.jpeg";

const Rooms = () => {
	const [rooms, setRooms] = useState([]);
	const [tmpRooms, setTmpRooms] = useState([]);
	const [types, setTypes] = useState(["All"]);
	const [capacity, setCapacity] = useState(0);
	const [people, setPeople] = useState([]);

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [price, setPrice] = useState(0);

	const [minSize, setMinSize] = useState(0);
	const [maxSize, setMaxSize] = useState(0);
	const [breakfast, setBreakfast] = useState(false);
	const [pets, setPets] = useState(false);

	const [type, setType] = useState("All");

	// Get all unique items
	const getUnique = (items, value) => {
		return [...new Set(items.map((item) => item[value]))];
	};

	useEffect(() => {
		setRooms([
			{
				id: 1,
				room_name: "Standard Room",
				price: 100.0,
				old_price: 150.0,
				guests: 2,
				room_type: "Queen Bed",
				room_size: 250,
				wifi: true,
				tv: true,
				shower: true,
				towels: false,
				minibar: true,
				desk: false,
				images: [room1],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
			{
				id: 2,
				room_name: "Executive Suite",
				price: 350.0,
				old_price: 400.0,
				guests: 4,
				room_type: "Two Queen Beds",
				room_size: 600,
				wifi: true,
				tv: false,
				shower: true,
				towels: true,
				minibar: false,
				desk: false,
				images: [room2],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
			{
				id: 3,
				room_name: "Executive Suite",
				price: 350.0,
				guests: 4,
				room_type: "Two Queen Beds",
				room_size: 600,
				wifi: true,
				tv: false,
				shower: true,
				towels: true,
				minibar: false,
				desk: false,
				images: [room3],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
			{
				id: 4,
				room_name: "Family Room",
				price: 200.0,
				guests: 6,
				room_type: "Two Queen Beds and a Sofa Bed",
				room_size: 500,
				wifi: true,
				tv: false,
				shower: true,
				towels: true,
				minibar: false,
				desk: false,
				images: [room4],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
			{
				id: 5,
				room_name: "Luxury Suite",
				price: 500.0,
				guests: 2,
				room_type: "King Bed",
				room_size: 800,
				wifi: true,
				tv: false,
				shower: true,
				towels: true,
				minibar: false,
				desk: false,
				images: [room5],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
			{
				id: 6,
				room_name: "Penthouse",
				price: 1000.0,
				guests: 8,
				room_type: "Three Queen Beds and a King Bed",
				room_size: 1200,
				wifi: true,
				tv: false,
				shower: true,
				towels: true,
				minibar: false,
				desk: false,
				images: [room6],
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
			},
		]);
		setTmpRooms([
			{
				id: 1,
				room_name: "Standard Room",
				price: 100.0,
				guests: 2,
				room_type: "Queen Bed",
				room_size: 250,
				breakfast: false,
				pets: true,
				images: [room1],
			},
			{
				id: 2,
				room_name: "Executive Suite",
				price: 350.0,
				guests: 4,
				room_type: "Two Queen Beds",
				room_size: 600,
				breakfast: true,
				pets: false,
				images: [room2],
			},
			{
				id: 3,
				room_name: "Executive Suite",
				price: 350.0,
				guests: 4,
				room_type: "Two Queen Beds",
				room_size: 600,
				breakfast: true,
				pets: false,
				images: [room3],
			},
			{
				id: 4,
				room_name: "Family Room",
				price: 200.0,
				guests: 6,
				room_type: "Two Queen Beds and a Sofa Bed",
				room_size: 500,
				breakfast: true,
				pets: true,
				images: [room4],
			},
			{
				id: 5,
				room_name: "Luxury Suite",
				price: 500.0,
				guests: 2,
				room_type: "King Bed",
				room_size: 800,
				breakfast: true,
				pets: false,
				images: [room5],
			},
			{
				id: 6,
				room_name: "Penthouse",
				price: 1000.0,
				guests: 8,
				room_type: "Three Queen Beds and a King Bed",
				room_size: 1200,
				breakfast: true,
				pets: false,
				images: [room6],
			},
		]);
	}, []);

	useEffect(() => {
		const types = ["All", ...getUnique(rooms, "room_type")];
		const people = getUnique(rooms, "guests");
		const minPrice = Math.min(...rooms.map((item) => item.price));
		const maxPrice = Math.max(...rooms.map((item) => item.price));
		const minSize = Math.min(...rooms.map((item) => item.room_size));
		const maxSize = Math.max(...rooms.map((item) => item.room_size));

		setTypes(types);
		setPeople(people);
		setMinPrice(minPrice);
		setMaxPrice(maxPrice);
		setMaxSize(maxSize);
		setMinSize(minSize);
		setPrice(minPrice);
	}, [rooms]);

	const filterRoom = (tmpRooms) => {
		// filter by type
		if (type !== "All") {
			tmpRooms = tmpRooms.filter((room) => room.room_type === type);
		}

		// filter by capacity
		if (capacity > 1) {
			tmpRooms = tmpRooms.filter((room) => room.guests >= capacity);
		}

		// filter by price
		tmpRooms = tmpRooms.filter((room) => room.price >= price);

		// filter by size
		tmpRooms = tmpRooms.filter(
			(room) => room.room_size >= minSize && room.room_size <= maxSize,
		);

		// filter by breakfast
		if (breakfast) {
			tmpRooms = tmpRooms.filter((room) => room.breakfast === true);
		}

		// filter by pets
		if (pets) {
			tmpRooms = tmpRooms.filter((room) => room.pets === true);
		}
		return tmpRooms;
	};

	return (
		<>
			<div className='roomsHero'>
				<div className='banner'>
					<h1>Our Rooms</h1>

					<ScrollLink
						to='roomlist'
						smooth={true}
						duration={1000}
						offset={-100}
						className='btn-primary'>
						Book your room
					</ScrollLink>
				</div>
			</div>
			<section className='filter-container'>
				<div className='section-title'>
					<h4>Search rooms</h4>
					<div />
				</div>
				<form className='filter-form'>
					{/* select type */}
					<div className='form-group'>
						<label htmlFor='type'>room type</label>
						<select
							name='type'
							id='type'
							value={type}
							className='form-control'
							onChange={(e) => {
								setType(e.target.value);
							}}>
							{types.map((item, id) => {
								return (
									<option key={id} value={item}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					{/* end of select type */}
					{/* guest */}
					<div className='form-group'>
						<label htmlFor='capacity'>guests</label>
						<select
							name='capacity'
							id='capacity'
							value={capacity}
							className='form-control'
							onChange={(e) => {
								setCapacity(e.target.value);
							}}>
							{people.map((item, id) => {
								return (
									<option key={id} value={item}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					{/* end of guest */}
					{/* rooms price */}
					<div className='form-group'>
						<label htmlFor='price'>room price ${price}</label>
						<input
							type='range'
							id='price'
							name='price'
							min={minPrice}
							max={maxPrice}
							value={price}
							onChange={(e) => {
								setPrice(e.target.value);
							}}
							className='form-control price-range'
						/>
					</div>
					{/* end of rooms price */}
					{/* extras */}
					<div className='form-group'>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='breakfast'
								id='breakfast'
								checked={breakfast}
								className='checkbox-input'
								onChange={(e) => {
									setBreakfast(e.target.checked);
								}}
							/>
							<label htmlFor='breakfast'>breakfast</label>
						</div>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='pets'
								id='pets'
								checked={pets}
								className='checkbox-input'
								onChange={(e) => {
									setPets(e.target.checked);
								}}
							/>
							<label htmlFor='pets'>pets</label>
						</div>
					</div>
					{/* end of extras */}
				</form>
			</section>
			<RoomsList rooms={filterRoom(tmpRooms)} />
		</>
	);
};

export default Rooms;
