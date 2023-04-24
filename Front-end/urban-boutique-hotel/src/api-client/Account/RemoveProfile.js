import axios from "axios";

export default async function removeProfile() {
  return axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/v0.1/customer/remove",
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((res) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
} // const response = removeProfile();
// response
//   .then((res) => {
//     navigation(-1);
//   })
//   .catch((err) => err);
