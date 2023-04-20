import axios from "axios";

export default async function deleteEmployee(user_id) {
	return axios({
		method: "get",
		url: `http://127.0.0.1:8000/api/v0.1/employee/remove/${user_id}`,
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
}
