import axios from "axios";
import base_url from "../BaseUrl";

export default async function addBudget(data) {
	return await axios({
		method: "post",
		url: `${base_url}budget/add`,
		data: data,
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
}
