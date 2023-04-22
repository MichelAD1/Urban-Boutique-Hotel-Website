import { useMemo, useState, useEffect } from "react";
import add_cp from "../../assets/icons/add-cp.svg";
import close_cp from "../../assets/icons/close-option.svg";
import BasicTable from "../../Global/Components/Tables/BasicTable";
import BasicTablePagination from "../../Global/Components/Tables/BasicTablePagination";
import { Link } from "react-router-dom";

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
		{ id: 3, budget_name: "Maintenance", amount: 3000 },
		{ id: 3, budget_name: "Maintenance", amount: 3000 },
		{ id: 3, budget_name: "Maintenance", amount: 3000 },
		{ id: 3, budget_name: "Maintenance", amount: 3000 },
		{ id: 3, budget_name: "Maintenance", amount: 3000 },
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
		[],
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
		[],
	);

	return (
		<div className='container'>
			<div className='budget-container'>
				<div className='request-box'>
					<div className='request-header'>
						<div className='title'>Budgets</div>
						<Link to='/maintenance/requests' className='item-redirect'>
							View All
						</Link>
					</div>

					<BasicTable reqData={budgets} columns={budget_columns} />
				</div>
			</div>
		</div>
	);
};

export default Finance;
