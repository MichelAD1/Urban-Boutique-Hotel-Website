import axios from "axios";
import base_url from "./BaseUrl";

async function Search(query) {
	return await axios({
		method: "post",
		url: `${base_url}staff/search/`,
		data: query,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});
}

export default Search;
