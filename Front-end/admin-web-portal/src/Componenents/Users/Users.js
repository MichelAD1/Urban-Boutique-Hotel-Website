import "../../Global/Styles/styles.css";
import GetClients from "../../api-client/Clients/GetClients";
import { useMemo, useState, useEffect } from "react";

// Components
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import add_box from "../../assets/icons/add-nf.svg";
import search_icon from "../../assets/icons/search.svg";

export default function Users() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		let clients = GetClients("http://127.0.0.1:8000/api/v0.1/client/");
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
			<div className='list-box'>
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