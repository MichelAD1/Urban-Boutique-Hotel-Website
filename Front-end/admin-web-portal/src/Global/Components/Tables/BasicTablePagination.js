import { useTable, usePagination } from "react-table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GetClients from "../../../api-client/Clients/GetClients";

const Table = ({ reqData, columns, redirect, err }) => {
	const [data, setData] = useState([]);
	const [next, setNext] = useState("");
	const [prev, setPrev] = useState("");
	const [current, setCurrent] = useState(1);
	const [lastNum, setLastNum] = useState(0);

	useEffect(() => {
		if (reqData) {
			setData(reqData);
			setNext(reqData.next_page_url);
			setPrev(reqData.prev_page_url);
			setLastNum(reqData.last_page);
		}
	}, [reqData]);

	const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
		useTable(
			{
				columns,
				data,
				initialState: { pageIndex: 0, pageSize: 14 },
			},
			usePagination,
		);

	const navigate = useNavigate();
	const handleRedirect = (row) => {
		if (redirect === "user") {
			navigate("/user/profile", { state: { data: row.original } });
		} else if (redirect === "employee") {
			navigate("/employee/profile", { state: { data: row.original } });
		} else if (redirect === "request") {
			navigate("/maintenance/requests/info", { state: { data: row.original } });
		} else if (redirect === "review") {
			navigate("/support/review", { state: { data: row.original } });
		} else if (redirect === "feedback") {
			navigate("/support/feedback", {
				state: { data: row.original },
			});
		}
	};

	const handleNextPage = () => {
		if (next) {
			GetClients(next).then((res) => {
				setData(res.data);
				setNext(res.next_page_url);
				setPrev(res.prev_page_url);
				setCurrent(res.current_page);
			});
		}
	};

	const handlePreviosPage = () => {
		if (prev) {
			GetClients(prev).then((res) => {
				setData(res.data);
				setNext(res.next_page_url);
				setPrev(res.prev_page_url);
				setCurrent(res.current_page);
			});
		}
	};

	return (
		<>
			<table {...getTableProps()} className='basic-table'>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()} className='basic-heading'>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				{err && (
					<tbody>
						<tr>
							<td className='error'>{err}</td>
						</tr>
					</tbody>
				)}
				{!err && (
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr
									{...row.getRowProps()}
									className='basic-row hovering'
									onClick={() => handleRedirect(row)}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()} className='basic-body'>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				)}
			</table>
			{lastNum > 1 && (
				<div className='pagination'>
					<button
						onClick={() => handlePreviosPage()}
						className='paginationButton'>
						{"<"}
					</button>{" "}
					<button
						onClick={() => {
							handleNextPage();
						}}
						className='paginationButton'>
						{">"}
					</button>{" "}
					<span className='paginationText'>
						Page{" "}
						<strong>
							{current} of {lastNum}
						</strong>{" "}
					</span>
				</div>
			)}
		</>
	);
};

export default Table;
