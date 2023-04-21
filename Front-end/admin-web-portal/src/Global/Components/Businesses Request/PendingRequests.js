import { useMemo } from "react";
import { Link } from "react-router-dom";

// Components
import BasicTable from "../Tables/BasicTable";

export default function PendingRequests() {
	const data = [
		{
			id: 1,
			name: "John Doe",
			res: "11254",
			room: "1578",
			status: "pending",
		},
	];

	const columns = useMemo(
		() => [
			{
				Header: "id",
				accessor: "id",
			},
			{
				Header: "customer",
				accessor: "name",
			},
			{
				Header: "reservation number",
				accessor: "res",
			},
			{
				Header: "room number",
				accessor: "room",
			},
			{
				Header: "status",
				accessor: "status",
			},
		],
		[],
	);

	return (
		<div className='request-box'>
			<div className='request-header'>
				<div className='title'>Pending room maintanance requests</div>
				<Link to='/businesses/requests' className='item-redirect'>
					View All
				</Link>
			</div>

			<BasicTable reqData={data} columns={columns} />
		</div>
	);
}
