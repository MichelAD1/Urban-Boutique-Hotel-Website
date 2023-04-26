import axios from "axios";
export default async function AddRoom(data) {
	const resp = await axios
		.post("http://127.0.0.1:8000/api/v0.1/room/add", data, {
			headers: { Authorization: localStorage.getItem("token") },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return err.response;
		});
	return resp;
}
