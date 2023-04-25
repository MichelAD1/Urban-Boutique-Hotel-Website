import "../../Styles/styles.css";
import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import BasicTable from "../Tables/BasicTablePagination";

// API
import fetchMaintenance from "../../../api-client/Maintenance/fetchMaintenance";

const Requests = () => {
	const location = useLocation();
	const [data, setData] = useState(location.state.data);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("");

	const [err, setErr] = useState("");

	let counter_key = 1;

	useEffect(() => {
		if (data.length === 0) setErr("No pending requests");
	}, [data]);

	const columns = useMemo(
		() => [
			{
				Header: "ID",
				accessor: "id",
			},
			{
				Header: "Reservation Number",
				accessor: "reservation_id",
			},
			{
				Header: "Customer Email",
				accessor: "email",
			},

			{
				Header: "Room",
				accessor: "title",
			},
			{
				Header: "Status",
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
					err={err}
				/>
			</div>
		</div>
	);
};

export default Requests;
