import axios from "axios";

export default async function GetBusiness() {
	const resp = await axios
		.get("http://localhost:8000/api/v0.1/business/", {
			headers: { Authorization: localStorage.getItem("token") },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
	return resp;
}
