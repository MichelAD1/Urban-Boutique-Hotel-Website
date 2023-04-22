import { useState, useEffect } from "react";

import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import search_icon from "../../assets/icons/search.svg";

const Reservations = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState("");
	const [query, setQuery] = useState("");

	const columns = [
		{
			Header: "Reservation Number",
			accessor: "id",
		},
		{
			Header: "Check-in",
			accessor: "checkin",
		},
		{
			Header: "Check-out",
			accessor: "checkout",
		},
		{
			Header: "Room",
			accessor: "room_id",
		},
		{
			Header: "Payment amount",
			accessor: "amount",
		},
		{
			Header: "Payment Status",
			accessor: "status",
		},
	];
	useEffect(() => {
		setData([
			{
				id: 1,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
			{
				id: 2,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
			{
				id: 3,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
			{
				id: 4,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
			{
				id: 5,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
			{
				id: 6,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_id: 1,
				amount: 100,
				status: "paid",
			},
		]);
	}, []);

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
						redirect={"reservation"}
						err={err}
					/>
				</div>
			</div>
		</div>
	);
};

export default Reservations;
