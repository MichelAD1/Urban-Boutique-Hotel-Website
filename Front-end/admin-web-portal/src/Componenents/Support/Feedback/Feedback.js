import { useState, useEffect, useMemo } from "react";

import BasicTable from "../../../Global/Components/Tables/BasicTablePagination";

const Feedback = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState("");

	const columns = useMemo(
		() => [
			{
				Header: "id",
				accessor: "id",
			},
			{
				Header: "Username",
				accessor: "username",
			},
			{
				Header: "Feedback",
				accessor: "feedback",
			},
			{
				Header: "Date",
				accessor: "date",
			},
		],
		[],
	);

	useEffect(() => {
		setData([
			{
				id: 1,
				username: "jdoe",
				feedback: "This is a review",
				date: "2021-01-01",
			},
			{
				id: 2,
				username: "asmith",
				feedback: "This is a review",
				date: "2021-01-01",
			},
			{
				id: 3,
				username: "bbrown",
				feedback: "This is a review",
				date: "2021-01-01",
			},
			{
				id: 4,
				username: "clee",
				feedback: "This is a review",
				date: "2021-01-01",
			},
			{
				id: 5,
				username: "drodriguez",
				feedback: "This is a review",
				date: "2021-01-01",
			},
		]);
	}, []);

	return (
		<div className='container'>
			<div className='requests-container'>
				<h2>Feedbacks</h2>
				<div className='reviews-container'>
					<BasicTable
						reqData={data}
						columns={columns}
						redirect={"feedback"}
						err={err}
					/>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
