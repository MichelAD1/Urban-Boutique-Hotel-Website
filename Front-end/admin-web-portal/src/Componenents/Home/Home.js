import GetCounts from "../../api-client/Home/GetCounts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// used components
import MaintenanceRequest from "../../Global/Components/Maintenance Request/PendingRequests";

export default function Home() {
	const [client_count, setClientsCount] = useState("");
	const [business_count, setBusinessesCount] = useState("");
	const [deal_count, setDealsCount] = useState("");

	useEffect(() => {
		let counts = GetCounts();
		counts
			.then((res) => {
				Promise.all(res).then((results) => {
					setDealsCount(results[0].count);
					setClientsCount(results[1].count);
					setBusinessesCount(results[2].count);
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
					<p className='statsAmount'>1000</p>
					<p className='statsLink'>View entire list</p>
				</Link>
				<Link to='/users' className='smallStats'>
					<p className='statsTitle'>Total Customers</p>
					<p className='statsAmount'>2000</p>
					<p className='statsLink'>View entire list</p>
				</Link>
				<Link to='/rooms' className='smallStats'>
					<p className='statsTitle'>Total Rooms</p>
					<p className='statsAmount'>500</p>
					<p className='statsLink'>View entire list</p>
				</Link>
			</div>
			<div className='bottomStats'>
				<MaintenanceRequest />
			</div>
		</div>
	);
}
