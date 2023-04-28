import axios from "axios";
import base_url from "../BaseUrl";

const EditOption = async (data, tag) => {
	let url = base_url;
	if (tag === "faq") url += `faq/remove/`;
	if (tag === "policy") url += `policy/remove/`;

	const response = await axios({
		method: "post",
		url: url,
		headers: { Authorization: localStorage.getItem("token") },
		data: data,
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
	return response;
};

export default EditOption;
