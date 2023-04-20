import axios from "axios";

export default async function deleteOption(type, option_id) {
	if (type === "Category") {
		return axios({
			method: "get",
			url: `http://127.0.0.1:8000/api/v0.1/category/delete/${option_id}`,
			headers: { Authorization: localStorage.getItem("token") },
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err.response;
			});
	} else {
		return axios({
			method: "get",
			url: `http://127.0.0.1:8000/api/v0.1/package/delete/${option_id}`,
			headers: { Authorization: localStorage.getItem("token") },
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err.response;
			});
	}
}
