import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// used components
import MaintenanceRequest from "../../Global/Components/Maintenance Request/PendingRequests";

// API
import GetCounts from "../../api-client/Home/GetCounts";
import PendingMaintenance from "../../api-client/Home/PendingMaintenance";
import PendingRequests from "../../Global/Components/Maintenance Request/PendingRequests";

export default function Home() {
	const [revenueCount, setRevenueCount] = useState([]);
	const [reservationsCount, setReservationsCount] = useState([]);
	const [customersCount, setCustomersCount] = useState([]);
	const [roomsCount, setRoomsCount] = useState([]);

	const [data, setData] = useState([]);
	const [err, setErr] = useState("");

	const {
		status,
		error,
		data: pendingRequests,
	} = useQuery(["pending_requests"], GetCounts, {
		staleTime: 300000, // 5 minutes
	});
	useEffect(() => {
		if (pendingRequests) {
			Promise.all(pendingRequests).then((results) => {
				setReservationsCount(results[0].room_count);
				setCustomersCount(results[1].customer_count);
				setRoomsCount(results[2].room_count);
			});
		}
	}, [pendingRequests, status]);

	// useEffect(() => {
	// 	let counts = ();
	// 	counts
	// 		.then((res) => {
	//
	// 		})
	// 		.catch((err) => {
	// 			return err;
	// 		});
	// 	let pending_maintenance = PendingMaintenance();
	// 	pending_maintenance.then((res) => {
	// 		setData(res);
	// 	});
	// }, []);
	return (
		<div className='container'>
			<div className='headerStats'>
				<Link className='smallStats'>
					<p className='statsTitle'>Monthly Revenue</p>
					<p className='statsAmount'>USD 20K</p>
					<p className='statsLink'>View entire list</p>
				</Link>
				<Link className='smallStats'>
					<p className='statsTitle'>Total reservations</p>
					<p className='statsAmount'>{reservationsCount}</p>
					<p className='statsLink'>View entire list</p>
				</Link>
				<Link to='/users' className='smallStats'>
					<p className='statsTitle'>Total Customers</p>
					<p className='statsAmount'>{customersCount}</p>
					<p className='statsLink'>View entire list</p>
				</Link>
				<Link to='/rooms' className='smallStats'>
					<p className='statsTitle'>Total Rooms</p>
					<p className='statsAmount'>{roomsCount}</p>
					<p className='statsLink'>View entire list</p>
				</Link>
			</div>
			<div className='bottomStats'>
				<MaintenanceRequest reqData={data} />
			</div>
		</div>
	);
}
