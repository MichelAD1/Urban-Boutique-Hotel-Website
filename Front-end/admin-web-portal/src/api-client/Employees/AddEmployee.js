import axios from "axios";
import moment from "moment";
export default async function addEmployee(
	username,
	email,
	password,
	full_name,
	number,
	dateofbirth,
	address,
	position,
	gender,
) {
	const dob = moment(dateofbirth).toDate();
	const formattedDate = moment(dob).format("YYYY/MM/DD");
	const data = {
		email: email,
		password: password,
		username: username,
		full_name: full_name,
		number: number,
		dob: formattedDate,
		address: address,
		position: position,
		gender: gender,
	};
	console.log(data);
	return axios
		.post("http://127.0.0.1:8000/api/v0.1/employee/add", data, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
}
