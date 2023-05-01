import axios from "axios";
export default async function editProfile(data) {
  return axios
    .post("http://127.0.0.1:8000/api/v0.1/room/reservation/edit", data, {
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
