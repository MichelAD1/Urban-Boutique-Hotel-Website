import axios from "axios";
import base_url from "../BaseUrl";

export default async function DeleteRoom(roomid) {
	const resp = await axios
		.get(`${base_url}room/remove/${roomid}`, {
			headers: { Authorization: localStorage.getItem("token") },
		})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
	return resp;
}
