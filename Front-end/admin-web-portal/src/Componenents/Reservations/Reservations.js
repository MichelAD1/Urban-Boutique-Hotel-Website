import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import base_url from "../../api-client/BaseUrl";

import BasicTable from "../../Global/Components/Tables/BasicTablePagination";

// Icons
import search_icon from "../../assets/icons/search.svg";

// API
import FetchData from "../../api-client/FetchData";

const Reservations = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState("");

	const [loading, setLoading] = useState(true);

	const columns = [
		{
			Header: "Reservation Number",
			accessor: "id",
		},
		{
			Header: "Customer Email",
			accessor: "customer_object.email",
		},
		{
			Header: "Room",
			accessor: "room_object.title",
		},
		{
			Header: "Check-in",
			accessor: "reservation_date",
		},
		{
			Header: "Check-out",
			accessor: "reservation_end",
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
	const {
		status,
		error,
		data: reservationData,
	} = useQuery(
		["reservation_data", `${base_url}room/reservation/get`],
		FetchData,
	);
	useEffect(() => {
		if (reservationData) {
			setData(reservationData.reservations);
			if (reservationData.reservations.data.length === 0) {
				setErr("No reservations found");
			}
			setLoading(false);
		}
	}, [reservationData, status]);

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
				<div className='search-bar full'>
					<img src={search_icon} alt='' className='search-icon' />
					<input className='search-input' type='text' placeholder='Search' />
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
	);
};

export default Reservations;
