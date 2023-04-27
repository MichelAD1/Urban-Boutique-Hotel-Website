import axios from "axios";

export default async function Logout() {
  return axios
    .get("http://127.0.0.1:8000/api/v0.1/auth/logout", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("Translate");
      localStorage.removeItem("Lg");
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
