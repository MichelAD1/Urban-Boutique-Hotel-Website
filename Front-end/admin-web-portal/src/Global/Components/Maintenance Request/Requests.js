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
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
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
					reqData={search(data)}
					columns={columns}
					redirect={"request"}
				/>
			</div>
		</div>
	);
};

export default Requests;
