import "./home-styles.css";
import "../../Global/Styles/styles.css";
import GetCounts from "../../api-client/Home/GetCounts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// used components
import BusinessRequest from "../../Global/Components/Businesses Request/PendingRequests";

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
				<div className='smallStats'>
					<p className='statsTitle'>Monthly Revenue</p>
					<p className='statsAmount'>USD 20K</p>
					<p className='statsLink'>
						<br />
					</p>
				</div>
				<div className='smallStats'>
					<p className='statsTitle'>Live Deals</p>
					<p className='statsAmount'>{deal_count}</p>
					<p className='statsLink'>
						<br />
					</p>
				</div>
				<div className='smallStats'>
					<p className='statsTitle'>Total Customers</p>
					<p className='statsAmount'>{client_count}</p>
					<Link to='/users' className='statsLink'>
						View entire list
					</Link>
				</div>
				<div className='smallStats'>
					<p className='statsTitle'>Total Partners</p>
					<p className='statsAmount'>{business_count}</p>
					<Link to='/businesses' className='statsLink'>
						View entire list
					</Link>
				</div>
			</div>
			<div className='bottomStats'>
				<BusinessRequest />
			</div>
		</div>
	);
}
