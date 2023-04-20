import "../../Global/Styles/styles.css";
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
		let employees = GetEmployees();
		employees
			.then((res) => {
				if (res.data.data.length > 0) {
					setData(res.data);
				} else {
					setErr("No employees found");
				}
			})
			.catch((err) => {
				return err;
			});
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
			<div className='list-box'>
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
