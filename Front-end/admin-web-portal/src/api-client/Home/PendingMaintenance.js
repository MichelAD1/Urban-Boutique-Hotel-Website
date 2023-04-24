import axios from "axios";
import base_url from "../BaseUrl";

const PendingMaintenance = () => {
	const pending_maintenance = axios({
		method: "get",
		url: `${base_url}maintenance/get`,
		headers: { Authorization: localStorage.getItem("token") },
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});

	return pending_maintenance;
};

export default PendingMaintenance;
