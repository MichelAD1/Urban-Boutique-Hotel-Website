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
			Header: "Customer Name",
			accessor: "customer_name",
		},
		{
			Header: "Room",
			accessor: "room_name",
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
				room_name: "Room 1",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
			},
			{
				id: 2,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_name: "Room 2",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
			},
			{
				id: 3,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_name: "Room 1",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
			},
			{
				id: 4,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_name: "Room 1",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
			},
			{
				id: 5,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_name: "Room 1",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
			},
			{
				id: 6,
				checkin: "2021-01-01",
				checkout: "2021-01-02",
				room_name: "Room 1",
				customer_name: "John Doe",
				amount: 100,
				status: "paid",
				requests:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maiores reprehenderit id dolor non minima quis",
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
