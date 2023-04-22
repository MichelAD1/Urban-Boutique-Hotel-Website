import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import GetEmployees from "../../api-client/Employees/GetEmployees";

// Components
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import add_box from "../../assets/icons/add-nf.svg";
import search_icon from "../../assets/icons/search.svg";

export default function Employees() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		// let employees = GetEmployees();
		// employees
		// 	.then((res) => {
		// 		if (res.data.data.length > 0) {
		// 			setData(res.data);
		// 		} else {
		// 			setErr("No employees found");
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		return err;
		// 	});
		setData([
			{
				id: 1,
				username: "jdoe",
				full_name: "John Doe",
				email: "jdoe@example.com",
				number: "555-1234",
				position: "Software Engineer",
				dob: "1985-01-01",
				gender: "Male",
				authorization: "Super Admin",
			},
			{
				id: 2,
				username: "asmith",
				full_name: "Alice Smith",
				email: "asmith@example.com",
				number: "555-5678",
				position: "Product Manager",
				dob: "1990-02-15",
				gender: "Female",
				authorization: "Content Manager",
			},
			{
				id: 3,
				username: "bbrown",
				full_name: "Bob Brown",
				email: "bbrown@example.com",
				number: "555-9012",
				position: "UI/UX Designer",
				dob: "1988-07-22",
				gender: "Male",
				authorization: "User Manager",
			},
			{
				id: 4,
				username: "clee",
				full_name: "Carla Lee",
				email: "clee@example.com",
				number: "555-3456",
				position: "Data Analyst",
				dob: "1992-05-09",
				gender: "Female",
				authorization: "Reservation Manager",
			},
			{
				id: 5,
				username: "drodriguez",
				full_name: "David Rodriguez",
				email: "drodriguez@example.com",
				number: "555-7890",
				position: "DevOps Engineer",
				dob: "1986-11-30",
				gender: "Male",
				authorization: "Finance Manager",
			},
			{
				id: 6,
				username: "ereed",
				full_name: "Emily Reed",
				email: "ereed@example.com",
				number: "555-2345",
				position: "Marketing Manager",
				dob: "1994-04-18",
				gender: "Female",
				authorization: "Default Employee",
			},
			{
				id: 7,
				username: "fhernandez",
				full_name: "Frank Hernandez",
				email: "fhernandez@example.com",
				number: "555-6789",
				position: "Software Engineer",
				dob: "1989-09-12",
				gender: "Male",
				authorization: "Default Employee",
			},
		]);
	}, []);

	const columns = useMemo(
		() => [
			{
				Header: "id",
				accessor: "id",
			},
			{
				Header: "Username",
				accessor: "username",
			},
			{
				Header: "Full name",
				accessor: "full_name",
			},
			{
				Header: "Email",
				accessor: "email",
			},
			{
				Header: "Phone Number",
				accessor: "number",
			},
			{
				Header: "Position",
				accessor: "position",
			},
			{
				Header: "Date of Birth",
				accessor: "dob",
			},
			{
				Header: "Gender",
				accessor: "gender",
			},
		],
		[],
	);

	// Define a function to filter the data based on the search query
	// const filteredData = data.filter((item) =>
	//   item.full_name.toLowerCase().includes(query.toLowerCase())
	// );

	// Define a function to filter the data based on the selected position
	// const filteredByPositionData =
	// 	filter === ""
	// 		? filteredData
	// 		: filteredData.filter((item) => item.position === filter);

	// // Define an array of unique positions to populate the filter dropdown
	// const positions = Array.from(
	// 	new Set(data.map((item) => item.position)),
	// ).sort();
	return (
		<div className='container'>
			<h2>Staff</h2>
			<div className='searchAndFilter'>
				<div className='search-bar'>
					<img src={search_icon} alt='' className='search-icon' />
					<input
						className='search-input'
						type='text'
						placeholder='Search'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<select
					className='filterDropDown'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}>
					<option value=''>Filter by position</option>
					{/* {positions.map((position) => (
							<option key={position} value={position}>
								{position}
							</option>
						))} */}
				</select>
				<Link to='/employee/profile' className='add-button'>
					<img src={add_box} width='28px' height='28px' alt='' />
				</Link>
			</div>
			<div className='employees-container'>
				<BasicTable
					reqData={data}
					columns={columns}
					redirect={"employee"}
					err={err}
				/>
			</div>
		</div>
	);
}
