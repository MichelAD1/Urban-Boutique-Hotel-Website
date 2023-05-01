import axios from "axios";
export default async function maintenanceRequest(data) {
  return axios
    .post("http://127.0.0.1:8000/api/v0.1/maintenance/add", data, {
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
