import axios from "axios";

export default async function getClients(url) {
	return axios({
		method: "get",
		url: url,
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			return err;
		});
}
