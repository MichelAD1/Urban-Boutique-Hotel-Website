import axios from "axios";
import base_url from "../BaseUrl";

export default async function EditRoom(data) {
	await axios({
		method: "post",
		url: `${base_url}room/edit`,
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
}
