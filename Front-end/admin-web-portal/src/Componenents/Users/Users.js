import "../../Global/Styles/styles.css";
import GetClients from "../../api-client/Clients/GetClients";
import { useMemo, useState, useEffect } from "react";

// Components
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import search_icon from "../../assets/icons/search.svg";

export default function Users() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		let clients = GetClients("");
		clients
			.then((res) => {
				if (res.data.length > 0) {
					setData(res);
				} else {
					setErr("No clients found");
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
	);
}
