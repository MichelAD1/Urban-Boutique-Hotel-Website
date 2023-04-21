import "../../Styles/styles.css";
import { useMemo, useState, useEffect } from "react";

// Components
import BasicTable from "../Tables/BasicTablePagination";

// Icons
import add_box from "../../../assets/icons/add-nf.svg";
import search_icon from "../../../assets/icons/search.svg";

const Requests = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");

	let counter_key = 1;

	useEffect(() => {
		setData([
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
			{
				id: 11,
				name: "Chris Martin",
				email: "chrismartin@example.com",
				phone: "555-777-1111",
				business: "Bakery Delight",
				status: "accepted",
			},
			{
				id: 12,
				name: "Olivia Rodriguez",
				email: "oliviarodriguez@example.com",
				phone: "123-789-4560",
				business: "Mexican Grill",
				status: "accepted",
			},
			{
				id: 13,
				name: "Alexandra Brown",
				email: "alexandrabrown@example.com",
				phone: "333-444-5555",
				business: "The French Bistro",
				status: "accepted",
			},
			{
				id: 14,
				name: "Karen Johnson",
				email: "karenjohnson@example.com",
				phone: "555-555-5555",
				business: "The Silver Spoon",
				status: "rejected",
			},
			{
				id: 15,
				name: "Ethan Lee",
				email: "ethanlee@example.com",
				phone: "333-333-3333",
				business: "The Purple Plate",
				status: "rejected",
			},
			{
				id: 16,
				name: "Lila Rodriguez",
				email: "lilarodriguez@example.com",
				phone: "777-777-7777",
				business: "Mexican Grill",
				status: "rejected",
			},
			{
				id: 17,
				name: "Oliver Zhang",
				email: "oliverzhang@example.com",
				phone: "999-999-9999",
				business: "The Jade Palace",
				status: "accepted",
			},
			{
				id: 18,
				name: "Maria Garcia",
				email: "mariagarcia@example.com",
				phone: "444-444-4444",
				business: "Spanish Tapas",
				status: "accepted",
			},
			{
				id: 19,
				name: "Ryan Davis",
				email: "ryandavis@example.com",
				phone: "777-777-7777",
				business: "Brewpub",
				status: "accepted",
			},
			{
				id: 20,
				name: "Ava Kim",
				email: "avakim@example.com",
				phone: "222-222-2222",
				business: "Sushi Bar",
				status: "accepted",
			},
		]);
	}, []);

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
	const search_parameters = Object.keys(Object.assign({}, ...data));
	const filter_items = [...new Set(data.map((item) => item.status))].map(
		(status) => {
			return { status: status, id: counter_key++ };
		},
	);

	console.log(data);

	function search(items) {
		return items.filter(
			(item) =>
				item.status.includes(filter) &&
				search_parameters.some((parameter) =>
					item[parameter]
						.toString()
						.toLowerCase()
						.includes(query.toLowerCase()),
				),
		);
	}
	return (
		<div className='container'>
			<div className='list-box'>
				<div className='searchAndFilter'>
					<div className='search-bar'>
						<img src={search_icon} alt='' className='search-icon' />
						<input
							className='search-input'
							type='text'
							placeholder='Search'
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<select
						className='filterDropDown'
						onChange={(e) => setFilter(e.target.value)}>
						<option value=''>Filter by position</option>
						{filter_items.map((item) => (
							<option value={item.status} key={item.id}>
								{item.status.charAt(0).toUpperCase() + item.status.slice(1)}{" "}
								applications
							</option>
						))}
					</select>
					<div className='add-button'>
						<img src={add_box} width='28px' height='28px' alt='' />
					</div>
				</div>
				<BasicTable
					data={search(data)}
					columns={columns}
					redirect={"request"}
				/>
			</div>
		</div>
	);
};

export default Requests;
