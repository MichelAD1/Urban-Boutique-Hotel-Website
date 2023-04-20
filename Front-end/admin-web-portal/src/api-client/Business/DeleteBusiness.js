import axios from "axios";

export default async function DeleteBusiness(userid) {
	const resp = await axios
		.get(`http://localhost:8000/api/v0.1/business/delete/${userid}`, {
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
