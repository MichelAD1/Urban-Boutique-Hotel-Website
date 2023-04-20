import axios from "axios";
import moment from "moment";
export default async function editEmployee(data) {
	const dob = moment(data.get("dob")).toDate();
	if (dob) {
		const formattedDate = moment(dob).format("YYYY/MM/DD");
		data.set("dob", formattedDate);
	}

	return axios
		.post("http://127.0.0.1:8000/api/v0.1/employee/edit", data, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
}
