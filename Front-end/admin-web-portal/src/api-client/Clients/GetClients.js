import axios from "axios";
import base_url from "../BaseUrl";

export default async function getClients(url) {
	let path = `${base_url}customer/get`;
	if (url !== "") {
		path = url;
	}
	return axios({
		method: "get",
		url: path,
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
}
