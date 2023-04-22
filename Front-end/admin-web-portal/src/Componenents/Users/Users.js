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
		// let clients = GetClients("http://127.0.0.1:8000/api/v0.1/client/");
		// clients
		// 	.then((res) => {
		// 		if (res.data.length > 0) {
		// 			setData(res);
		// 		} else {
		// 			setErr("No clients found");
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
				dob: "1985-01-01",
				gender: "male",
				number: "555-87521",
			},
			{
				id: 2,
				username: "asmith",
				full_name: "Alice Smith",
				email: "asmith@example.com",
				dob: "1990-02-15",
				gender: "female",
				number: "555-87521",
			},
			{
				id: 3,
				username: "bbrown",
				full_name: "Bob Brown",
				email: "bbrown@example.com",
				dob: "1988-07-22",
				gender: "male",
				number: "555-87521",
			},
			{
				id: 4,
				username: "clee",
				full_name: "Carla Lee",
				email: "clee@example.com",
				dob: "1992-05-09",
				gender: "female",
				number: "555-87521",
			},
			{
				id: 5,
				username: "drodriguez",
				full_name: "David Rodriguez",
				email: "drodriguez@example.com",
				dob: "1986-11-30",
				gender: "male",
				number: "555-87521",
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
				<div className='users-container'>
					<BasicTable
						reqData={data}
						columns={columns}
						redirect={"user"}
						err={err}
					/>
				</div>
			</div>
		</div>
	);
}
