import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import base_url from "../../api-client/BaseUrl";

// Components
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import search_icon from "../../assets/icons/search.svg";

// API
import FetchData from "../../api-client/Clients/FetchData";

export default function Users() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	const [err, setErr] = useState("");
	const [loading, setLoading] = useState(true);

	const {
		status,
		error,
		data: usersData,
	} = useQuery(["users_data", `${base_url}customer/get`], FetchData, {
		staleTime: 300000, // 5 minutes
	});
	useEffect(() => {
		if (usersData) {
			if (usersData.data.length > 0) {
				setData(usersData);
			} else {
				setErr("No users found");
			}
			setLoading(false);
		}
	}, [usersData, status]);

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
				Header: "Phone Number",
				accessor: "phone_number",
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

	return (
		<>
			{loading ? (
				<div className='container-buffer'>
					<div className='buffer-loader home'></div>
				</div>
			) : (
				<div className='container'>
					<div className='searchAndFilter'>
						<div className='search-bar full'>
							<img src={search_icon} alt='' className='search-icon' />
							<input
								className='search-input'
								type='text'
								placeholder='Search'
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
					</div>
					<div className='users-container'>
						<BasicTable
							reqData={data}
							columns={columns}
							redirect={"user"}
							err={err}
						/>
					</div>
				</div>
			)}
		</>
	);
}
