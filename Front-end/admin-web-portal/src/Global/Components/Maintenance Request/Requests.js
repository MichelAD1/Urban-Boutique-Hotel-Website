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

	useEffect(() => {
		if (data.data.length === 0) setErr("No pending requests");
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
				accessor: "customer_object.email",
			},

			{
				Header: "Room",
				accessor: "room_object.title",
			},
			{
				Header: "Status",
				accessor: "status",
			},
		],
		[],
	);
	return (
		<div className='container'>
			<div className='requests-container'>
				<h2>Room maintenance requests</h2>
				<BasicTable
					reqData={data}
					columns={columns}
					redirect={"request"}
					err={err}
				/>
			</div>
		</div>
	);
};

export default Requests;
