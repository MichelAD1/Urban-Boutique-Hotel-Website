import "./request-styles.css";

import { useMemo } from "react";
import { Link } from "react-router-dom";

// Components
import BasicTable from "../Tables/BasicTable";

export default function PendingRequests() {
	const data = [
		{
			id: 1,
			name: "John Doe",
			email: "johndoe@example.com",
			phone: "123-456-7890",
			business: "The Red Spoon",
			status: "pending",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "janesmith@example.com",
			phone: "555-123-4567",
			business: "La Trattoria",
			status: "pending",
		},
		{
			id: 3,
			name: "Bob Johnson",
			email: "bobjohnson@example.com",
			phone: "789-555-1234",
			business: "The Green Plate",
			status: "pending",
		},
		{
			id: 4,
			name: "Samantha Lee",
			email: "samanthalee@example.com",
			phone: "444-555-6666",
			business: "Sushi House",
			status: "pending",
		},
		{
			id: 5,
			name: "David Chen",
			email: "davidchen@example.com",
			phone: "777-888-9999",
			business: "The Golden Wok",
			status: "pending",
		},
		{
			id: 6,
			name: "Michael Brown",
			email: "michaelbrown@example.com",
			phone: "555-555-5555",
			business: "The Blue Plate",
			status: "pending",
		},
		{
			id: 7,
			name: "Emily Davis",
			email: "emilydavis@example.com",
			phone: "999-888-7777",
			business: "Pizza Palace",
			status: "pending",
		},
		{
			id: 8,
			name: "Jessica Kim",
			email: "jessicakim@example.com",
			phone: "222-333-4444",
			business: "Taco Time",
			status: "pending",
		},
		{
			id: 9,
			name: "Andrew Nguyen",
			email: "andrewn@example.com",
			phone: "111-222-3333",
			business: "Burger Joint",
			status: "pending",
		},
		{
			id: 10,
			name: "Sophie Patel",
			email: "sophiepatel@example.com",
			phone: "888-777-6666",
			business: "Indian Cuisine",
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
				Header: "name",
				accessor: "name",
			},
			{
				Header: "email",
				accessor: "email",
			},
			{
				Header: "phone number",
				accessor: "phone",
			},
			{
				Header: "shop/restaurant",
				accessor: "business",
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
				<div className='title'>Pending partners requests</div>
				<Link to='/businesses/requests' className='item-redirect'>
					View All
				</Link>
			</div>

			<BasicTable data={data} columns={columns} />
		</div>
	);
}
