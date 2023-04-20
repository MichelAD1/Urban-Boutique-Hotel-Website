import axios from "axios";

export default async function getDealsCount() {
	const deal_count = axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/v0.1/deal/count",
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});

	const client_count = axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/v0.1/client/count",
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
	const business_count = axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/v0.1/business/count",
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
	return [deal_count, client_count, business_count];
}
