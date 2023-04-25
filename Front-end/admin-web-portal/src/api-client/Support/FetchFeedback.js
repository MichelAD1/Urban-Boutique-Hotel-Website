import axios from "axios";
import base_url from "../BaseUrl";

export default async function FetchFeedback() {
	return await axios({
		method: "GET",
		url: `${base_url}feedback/get`,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
}
