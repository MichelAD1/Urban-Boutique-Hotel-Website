import axios from "axios";
export default async function addOption(
	option_type,
	categoryname,
	packagetitle,
	description,
	price,
	duration,
	quantity,
	icon,
) {
	if (option_type === "Category") {
		const data = {
			name: categoryname,
			logourl: icon,
		};
		const resp = await axios
			.post("http://127.0.0.1:8000/api/v0.1/category/add", data, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((res) => {
				return res.data.data;
			})
			.catch((err) => {
				// return err.response;
				console.log(err);
			});
		return resp;
	} else {
		const data = {
			title: packagetitle,
			description: description,
			price: price,
			duration: duration,
			quantity: quantity,
		};
		const resp = await axios
			.post("http://127.0.0.1:8000/api/v0.1/package/add", data, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((res) => {
				return res.data.data;
			})
			.catch((err) => {
				return err.response;
			});
		return resp;
	}
}
