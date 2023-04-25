import axios from "axios";
import base_url from "../base_url";

export default async function Finance() {
	const budgets = await axios
		.get(`${base_url}/budget/get`, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});

	const transactions = await axios
		.get(`${base_url}/transaction/get`, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
}
