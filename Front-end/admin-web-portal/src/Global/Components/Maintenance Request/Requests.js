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
				employee: 1,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
			},
			{
				id: 1,
				name: "John Doe",
				res: "11254",
				room: "1578",
				status: "pending",
				employee: null,
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
			<div className='requests-container'>
				<h2>Room maintenance requests</h2>
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
