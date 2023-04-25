import { useMemo, useState, useEffect } from "react";
import BasicTable from "../../Global/Components/Tables/BasicTable";
import { Link } from "react-router-dom";

import ReactModal from "react-modal";

// Icons
import { AiOutlinePlus } from "react-icons/ai";

// API
import addBudget from "../../api-client/Finance/addBudget";

const Finance = () => {
	// State for storing budget information
	const [err, setErr] = useState("");
	const [budgetErr, setBudgetErr] = useState("");
	const budget_type = "Budget";

	const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);

	const [budgets, setBudgets] = useState([]);
	const [budget_name, setBudgetName] = useState("");
	const [amount, setAmount] = useState("");

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		// setBudgets([
		// 	{ id: 1, budget_name: "Marketing", amount: 5000 },
		// 	{ id: 2, budget_name: "Employee Salaries", amount: 10000 },
		// 	{ id: 3, budget_name: "Maintenance", amount: 3000 },
		// 	{ id: 3, budget_name: "Maintenance", amount: 3000 },
		// 	{ id: 3, budget_name: "Maintenance", amount: 3000 },
		// 	{ id: 3, budget_name: "Maintenance", amount: 3000 },
		// 	{ id: 3, budget_name: "Maintenance", amount: 3000 },
		// ]);
		// setTransactions([
		// 	{
		// 		id: 1234,
		// 		customer_name: "John Smith",
		// 		amount: 1000.5,
		// 		date: "2023-04-22",
		// 	},
		// 	{
		// 		id: 5678,
		// 		customer_name: "Jane Doe",
		// 		amount: 750.2,
		// 		date: "2023-05-10",
		// 	},
		// 	{
		// 		id: 9101,
		// 		customer_name: "Bob Johnson",
		// 		amount: 2500.0,
		// 		date: "2023-06-15",
		// 	},
		// 	{
		// 		id: 1121,
		// 		customer_name: "Alice Lee",
		// 		amount: 500.0,
		// 		date: "2023-07-01",
		// 	},
		// 	{
		// 		id: 3141,
		// 		customer_name: "Charlie Brown",
		// 		amount: 1500.75,
		// 		date: "2023-08-20",
		// 	},
		// ]);
	}, []);

	const handleAddBudget = (e) => {
		e.preventDefault();
		const reqData = {
			name: budget_name,
			amount: amount,
		};

		addBudget(reqData);
		openBudgetModal();
	};
	const openBudgetModal = () => {
		setBudgetModalOpen(true);
	};
	const closeBudgetModal = () => {
		setBudgetModalOpen(false);
		setErr("");
		setBudgetName("");
		setAmount("");
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
				Header: "Reservation number",
				accessor: "id",
			},
			{
				Header: "Customer name",
				accessor: "customer_name",
			},
			{
				Header: "Transaction Amount",
				accessor: "amount",
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
				<div className='request-box' style={{ maxHeight: "24em" }}>
					<div className='request-header'>
						<div className='title'>Budgets</div>
						<AiOutlinePlus className='add-button' onClick={openBudgetModal} />
					</div>

					<BasicTable
						reqData={budgets}
						columns={budget_columns}
						type={"budget"}
					/>
				</div>
				<div className='request-box' style={{ maxHeight: "24em" }}>
					<div className='request-header'>
						<div className='title'>Revenue</div>
						<Link to='/finance/transactions' className='item-redirect'>
							View All
						</Link>
					</div>

					<BasicTable
						reqData={transactions}
						columns={columns}
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
						<button onClick={(e) => handleAddBudget(e)}>Add</button>
						<button onClick={closeBudgetModal}>Cancel</button>
					</form>
				</div>
			</ReactModal>
		</div>
	);
};

export default Finance;
