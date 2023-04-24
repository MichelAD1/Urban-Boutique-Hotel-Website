import axios from "axios";
import FormData from "form-data";

export default async function FetchCred(email, password) {
	let args = new FormData();
	args.append("email", email);
	args.append("password", password);
	args.append("type", 1);

	return axios({
		method: "post",
		url: "http://127.0.0.1:8000/api/v0.1/auth/login",
		data: args,
	})
		.then((res) => {
			if (res.data.message) {
				return res.data.message;
			} else {
				return res.data;
			}
		})
		.catch((err) => {
			return err.response;
		});
}
