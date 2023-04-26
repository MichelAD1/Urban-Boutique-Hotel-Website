import axios from "axios";

export default async function Refresh() {
  return axios
    .get("http://127.0.0.1:8000/api/v0.1/auth/refresh", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
