import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import FetchData from "../../api-client/FetchData";
import base_url from "../../api-client/BaseUrl";

// Components
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import { AiOutlinePlus } from "react-icons/ai";

import search_icon from "../../assets/icons/search.svg";

export default function Employees() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");
	const [err, setErr] = useState("");

	const [loading, setLoading] = useState(true);

	const {
		status,
		error,
		data: staffData,
	} = useQuery(["staff_data", `${base_url}staff/get`], FetchData);
	useEffect(() => {
		if (staffData) {
			if (staffData.data.length > 0) {
				setData(staffData);
			} else {
				setErr("No staff found");
			}
			setLoading(false);
		}
	}, [staffData, status]);

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
				accessor: "name",
			},
			{
				Header: "Email",
				accessor: "email",
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

	if (loading) {
		return (
			<div className='container-buffer'>
				<div className='buffer-loader home'></div>
			</div>
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
				<Link to='/employee/profile'>
					<AiOutlinePlus className='add-button' />
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
