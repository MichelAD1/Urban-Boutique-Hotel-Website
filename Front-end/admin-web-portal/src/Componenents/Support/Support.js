import "../../Global/Styles/styles.css";
import { useMemo, useState, useEffect } from "react";
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";
export default function Support() {
  const [err, setErr] = useState("");
  const [data, setData] = useState([
    { review: "Marketing", room_id: 1, username: "Hello", date: "10-09-2023" },
    { review: "Business", room_id: 2, username: "Hello", date: "10-09-2023" },
    { review: "Economics", room_id: 3, username: "Hello", date: "10-09-2023" },
  ]);
  const reviews_columns = useMemo(
    () => [
      {
        Header: "Review",
      },
      {
        Header: "Text",
        accessor: "review",
      },
      {
        Header: "Room ID",
        accessor: "room_id",
      },
      {
        Header: "Username",
        accessor: "username",
      },

      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );
  const feedback_columns = useMemo(
    () => [
      {
        Header: "Feedback",
      },
      {
        Header: "Text",
        accessor: "review",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );
  return (
    <div className="container">
      <div className="list-box">
        <BasicTable
          reqData={data}
          columns={reviews_columns}
          redirect={"review"}
          err={err}
        />
        <BasicTable
          reqData={data}
          columns={feedback_columns}
          redirect={"feedback"}
          err={err}
        />
      </div>
    </div>
  );
}
