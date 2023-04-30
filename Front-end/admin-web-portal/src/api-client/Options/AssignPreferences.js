import axios from "axios";
import base_url from "../BaseUrl";

const AssignPreferences = async (data) => {
	if (data.languages) {
		await axios({
			method: "post",
			url: `${base_url}language/select`,
			data: {
				selections: data.languages,
			},
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	}
};

export default AssignPreferences;
