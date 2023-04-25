import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import BasicTable from "../Tables/BasicTable";

export default function PendingRequests({ reqData }) {
	const [data, setData] = useState([]);
	const [err, setErr] = useState("");

	useEffect(() => {
		if (reqData > 0) setData(reqData);
		else setErr("No pending requests");
	}, [reqData]);

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

	const navigate = useNavigate();
	const maintenanceRedirect = () => {
		navigate("/maintenance/requests", { state: { data: data } });
	};

	return (
		<div className='request-box'>
			<div className='request-header'>
				<div className='title'>Pending room maintanance requests</div>
				<div className='item-redirect' onClick={maintenanceRedirect}>
					View All
				</div>
			</div>

			<BasicTable reqData={data} columns={columns} err={err} />
		</div>
	);
}
