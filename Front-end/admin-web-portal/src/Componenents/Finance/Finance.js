import { useMemo, useState, useEffect } from "react";
import add_cp from "../../assets/icons/add-cp.svg";
import close_cp from "../../assets/icons/close-option.svg";
import BasicTable from "../../Global/Components/Tables/BasicTable";
import BasicTablePagination from "../../Global/Components/Tables/BasicTablePagination";
import { Link } from "react-router-dom";

import ReactModal from "react-modal";

// Icons
import { AiOutlinePlus } from "react-icons/ai";

const Finance = () => {
	// State for storing budget information
	const [err, setErr] = useState("");
	const [budgetErr, setBudgetErr] = useState("");
	const budget_type = "Budget";

	const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);

	const [budget_name, setBudgetName] = useState("");
	const [amount, setAmount] = useState("");
	const [budgets, setBudgets] = useState([]);

	useEffect(() => {
		setBudgets([
			{ id: 1, budget_name: "Marketing", amount: 5000 },
			{ id: 2, budget_name: "Employee Salaries", amount: 10000 },
			{ id: 3, budget_name: "Maintenance", amount: 3000 },
			{ id: 3, budget_name: "Maintenance", amount: 3000 },
			{ id: 3, budget_name: "Maintenance", amount: 3000 },
			{ id: 3, budget_name: "Maintenance", amount: 3000 },
			{ id: 3, budget_name: "Maintenance", amount: 3000 },
		]);
	}, []);

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
				<div className='request-box' style={{ maxHeight: "25em" }}>
					<div className='request-header'>
						<div className='title'>Budgets</div>
						<AiOutlinePlus className='add-button' onClick={handleAddBudget} />
					</div>

					<BasicTable
						reqData={budgets}
						columns={budget_columns}
						type={"budget"}
					/>
				</div>
				<div className='request-box' style={{ maxHeight: "25em" }}>
					<div className='request-header'>
						<div className='title'>Revenue</div>
						<Link to='/maintenance/requests' className='item-redirect'>
							View All
						</Link>
					</div>

					<BasicTable
						reqData={budgets}
						columns={budget_columns}
						type={"budget"}
					/>
				</div>
			</div>
			<ReactModal
				className='custom-modal'
				isOpen={isBudgetModalOpen}
				style={{
					overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
					content: {
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						border: "none",
						width: "100%",
						height: "100%",
						margin: "auto",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: "100",
					},
				}}>
				<div style={{ height: "17em" }}>
					<form>
						<h1>Add budget</h1>
						<div
							className='edit-container'
							style={{ padding: "0", paddingBottom: "2em", width: "100%" }}>
							<div
								className='edit-item'
								style={{
									width: "75%",
									padding: "0",
									paddingLeft: "1em",
									paddingBottom: "1em",
									border: "0",
								}}>
								<div>
									<label style={{ marginRight: "1em" }}>Name</label>
								</div>
								<div>
									<input
										type='text'
										value={budget_name}
										onChange={(e) => setBudgetName(e.target.value)}
										className='input-box'
									/>
								</div>
							</div>
							<div
								className='edit-item'
								style={{
									width: "75%",
									padding: "0",
									paddingLeft: "1em",
									paddingBottom: "1em",
									border: "0",
								}}>
								<div>
									<label>Amount (USD)</label>
								</div>
								<div>
									<input
										type='number'
										value={amount}
										onChange={(e) => setAmount(e.target.value)}
										className='input-box'
									/>
								</div>
							</div>
						</div>
						<button onClick={handleAddBudget}>Add</button>
						<button onClick={closeBudgetModal}>Cancel</button>
					</form>
				</div>
			</ReactModal>
		</div>
	);
};

export default Finance;
