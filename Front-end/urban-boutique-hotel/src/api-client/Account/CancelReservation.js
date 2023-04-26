import axios from "axios";

export default async function cancelReservation(id) {
  return axios
    .post(`http://127.0.0.1:8000/api/v0.1/room/reservation/cancel/${id}`, {
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
