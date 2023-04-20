import { useMemo, useState, useEffect } from "react";
import add_cp from "../../assets/icons/add-cp.svg";
import close_cp from "../../assets/icons/close-option.svg";
import "../Finance/finance-styles.css";
import BasicTable from "../../Global/Components/Tables/BasicTable";
import BasicTablePagination from "../../Global/Components/Tables/BasicTablePagination";

import ReactModal from "react-modal";

const Finance = () => {
  // State for storing budget information
  const [err, setErr] = useState("");
  const [budgetErr, setBudgetErr] = useState("");
  const budget_type = "Budget";

  const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);

  const [budget_name, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const [budgets, setBudgets] = useState([
    { id: 1, budget_name: "Marketing", amount: 5000 },
    { id: 2, budget_name: "Employee Salaries", amount: 10000 },
    { id: 3, budget_name: "Maintenance", amount: 3000 },
  ]);
  const handleAddBudget = () => {
    setErr("");
    setBudgetName("");
    setAmount("");
    openBudgetModal();
  };
  const openBudgetModal = () => {
    setBudgetModalOpen(true);
  };
  const closeBudgetModal = () => {
    setBudgetModalOpen(false);
  };

  const budget_columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "name",
        accessor: "budget_name",
      },
      {
        Header: "amount",
        accessor: "amount",
      },
      {
        Header: "action",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Revenue",
        accessor: "revenue",
      },
      {
        Header: "Number of Transactions",
        accessor: "number_of_transactions",
      },
      {
        Header: "Average Transaction Value",
        accessor: "average_transaction_value",
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
      <div className="option-container">
        <div className="option-box">
          <div className="option-header">
            <div className="option-title">Budgets</div>
            <div>
              <img
                onClick={handleAddBudget}
                src={add_cp}
                className="add-cp"
                alt=""
              />{" "}
              <ReactModal
                className="custom-modal"
                isOpen={isBudgetModalOpen}
                style={{
                  overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                }}
              >
                <div>
                  <div className="header-options">
                    <div className="header-name">
                      <h1>Add Budget</h1>
                    </div>
                    <div className="header-close">
                      <img onClick={closeBudgetModal} src={close_cp} alt="" />
                    </div>
                  </div>

                  <div className="edit-info">
                    <div className="budget-section">
                      <div className="budget-text">Name: </div>
                      <div className="budget-text">Amount: </div>
                    </div>
                    <form>
                      <div className="input-section">
                        <input
                          type="text"
                          className="input-box"
                          value={budget_name}
                          onChange={(e) => setBudgetName(e.target.value)}
                        />
                        <input
                          type="number"
                          className="input-box"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <div className="add-pac-error">{err}</div>
                      <button className="budget-button" type="submit">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </ReactModal>
            </div>
          </div>

          <BasicTable
            reqData={budgets}
            columns={budget_columns}
            type={budget_type}
            err={budgetErr}
          />
        </div>
      </div>

      <div className="list-box">
        <BasicTablePagination
          reqData={""}
          columns={columns}
          redirect={"user"}
          err={err}
        />
      </div>
    </div>
  );
};

export default Finance;
