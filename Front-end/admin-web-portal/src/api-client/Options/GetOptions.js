import axios from "axios";

export default async function getOptions() {
	const categories = await axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/v0.1/category/",
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return err.response.data;
		});

	const packages = await axios({
		method: "get",
		url: "http://127.0.0.1:8000/api/v0.1/package/all",
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response.data;
		});

	return [packages, categories];
}
