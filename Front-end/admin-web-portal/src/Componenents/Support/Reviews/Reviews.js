import { useState, useEffect, useMemo } from "react";

import BasicTable from "../../../Global/Components/Tables/BasicTablePagination";

const Reviews = () => {
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
				Header: "Review",
				accessor: "review",
			},
			{
				Header: "Rating",
				accessor: "rating",
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
				rating: "5",
				review: "This is a review",
				date: "2021-01-01",
				reply: "",
			},
			{
				id: 2,
				username: "asmith",
				rating: "4",
				review: "This is a review",
				date: "2021-01-01",
				reply: "",
			},
			{
				id: 3,
				username: "bbrown",
				rating: "3",
				review: "This is a review",
				date: "2021-01-01",
				reply: "This is a reply",
			},
			{
				id: 4,
				username: "clee",
				rating: "2",
				review: "This is a review",
				date: "2021-01-01",
				reply: "This is a reply",
			},
			{
				id: 5,
				username: "drodriguez",
				rating: "1",
				review: "This is a review",
				date: "2021-01-01",
				reply: "This is a reply",
			},
		]);
	}, []);

	return (
		<div className='container'>
			<div className='requests-container'>
				<h2>Reviews</h2>
				<div className='reviews-container'>
					<BasicTable
						reqData={data}
						columns={columns}
						redirect={"review"}
						err={err}
					/>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
