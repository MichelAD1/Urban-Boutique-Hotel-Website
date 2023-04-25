import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// used components
import MaintenanceRequest from "../../Global/Components/Maintenance Request/PendingRequests";

// API
import GetCounts from "../../api-client/Home/GetCounts";

export default function Home() {
	const [revenueCount, setRevenueCount] = useState([]);
	const [reservationsCount, setReservationsCount] = useState(0);
	const [customersCount, setCustomersCount] = useState(0);
	const [roomsCount, setRoomsCount] = useState(0);

	const [data, setData] = useState([]);

	const [loading, setLoading] = useState(true);

	const {
		status,
		error,
		data: homeData,
	} = useQuery(["home_data"], GetCounts, {
		staleTime: 300000, // 5 minutes
	});
	useEffect(() => {
		if (homeData) {
			Promise.all(homeData).then((results) => {
				setReservationsCount(results[0].room_count);
				setCustomersCount(results[1].customer_count);
				setRoomsCount(results[2].room_count);
				setData(results[3]);
			});
			setLoading(false);
		}
	}, [homeData, status]);

	return (
		<>
			{loading ? (
				<div className='container-buffer'>
					<div className='buffer-loader home'></div>
				</div>
			) : (
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
			)}
		</>
	);
}
