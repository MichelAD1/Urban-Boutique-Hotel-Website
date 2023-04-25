import axios from "axios";

export default async function ReserveRoom(data) {
  return axios
    .post("http://127.0.0.1:8000/api/v0.1/reservation/reserve", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
}
