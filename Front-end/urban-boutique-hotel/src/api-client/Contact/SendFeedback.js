import axios from "axios";

export default async function SendFeedback(data) {
  return axios
    .post("http://127.0.0.1:8000/api/v0.1/feedback/add", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
}
