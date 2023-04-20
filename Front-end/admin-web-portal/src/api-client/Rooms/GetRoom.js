import axios from "axios";

export default async function GetRoom() {
  const resp = await axios
    .get("http://localhost:8000/api/v0.1/room/", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return resp;
}
