import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// used components
import MaintenanceRequest from "../../Global/Components/Maintenance Request/PendingRequests";

// API
import GetCounts from "../../api-client/Home/GetCounts";

export default function Home() {
	const [revenueCount, setRevenueCount] = useState([]);
	const [reservationsCount, setReservationsCount] = useState([]);
	const [customersCount, setCustomersCount] = useState([]);
	const [roomsCount, setRoomsCount] = useState([]);

	useEffect(() => {
		let counts = GetCounts();
		counts
			.then((res) => {
				Promise.all(res).then((results) => {
					setReservationsCount(results[1].room_count);
					setCustomersCount(results[2].customer_count);
					setRoomsCount(results[3].room_count);
				});
			})
			.catch((err) => {
				return err;
			});
	}, []);
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
				<MaintenanceRequest />
			</div>
		</div>
	);
}
