import "../../Global/Styles/styles.css";
import { useMemo, useState, useEffect } from "react";
import BasicTable from "../../Global/Components/Tables/BasicTablePagination";
export default function Support() {
  const [err, setErr] = useState("");
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
          reqData={""}
          columns={reviews_columns}
          redirect={"reviews"}
          err={err}
        />
        <BasicTable
          reqData={""}
          columns={feedback_columns}
          redirect={"reviews"}
          err={err}
        />
      </div>
    </div>
  );
}
