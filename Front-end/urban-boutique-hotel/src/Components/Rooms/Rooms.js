import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import RoomsList from "./RoomsList";

const Rooms = () => {
	const [rooms, setRooms] = useState([]);
	const [types, setTypes] = useState([]);
	const [capacity, setCapacity] = useState(0);
	const [people, setPeople] = useState([]);

	const minPrice = Math.min(...rooms.map((item) => item.price));
	const maxPrice = Math.max(...rooms.map((item) => item.price));
	const [price, setPrice] = useState([minPrice, maxPrice]);

	const [minSize, setMinSize] = useState(0);
	const [maxSize, setMaxSize] = useState(0);
	const [breakfast, setBreakfast] = useState(false);
	const [pets, setPets] = useState(false);

	const [type, setType] = useState("all");

	const handleChange = () => {
		console.log("hello");
	};

	const handleChecked = (e) => {
		if (e.target.name === "breakfast") {
			setBreakfast(e.target.checked);
		} else if (e.target.name === "pets") {
			setPets(e.target.checked);
		}
	};

	useEffect(() => {}, []);
	return (
		<>
			<div className='roomsHero'>
				<div className='banner'>
					<h1>Our Rooms</h1>
					<div></div>
					<Link to='/rooms' className='btn-primary'>
						Book your room
					</Link>
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
							onChange={handleChange}>
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
							onChange={handleChange}>
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
							onChange={handleChange}
							className='form-control'
						/>
					</div>
					{/* end of rooms price */}
					{/* size */}
					<div className='form-group'>
						<label htmlFor='size'>room size</label>
						<div className='size-inputs'>
							<input
								type='number'
								name='minSize'
								id='size'
								value={minSize}
								onChange={handleChange}
								className='size-input'
							/>
							<input
								type='number'
								name='maxSize'
								id='size'
								value={maxSize}
								onChange={handleChange}
								className='size-input'
							/>
						</div>
					</div>
					{/* end of size */}
					{/* extras */}
					<div className='form-group'>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='breakfast'
								id='breakfast'
								checked={breakfast}
								onChange={handleChecked}
							/>
							<label htmlFor='breakfast'>breakfast</label>
						</div>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='pets'
								id='pets'
								checked={pets}
								onChange={handleChecked}
							/>
							<label htmlFor='pets'>pets</label>
						</div>
					</div>
					{/* end of extras */}
				</form>
			</section>
			<RoomsList rooms={rooms} />
		</>
	);
};

export default Rooms;
