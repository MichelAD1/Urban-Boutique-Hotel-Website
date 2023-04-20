import axios from "axios";

export default async function DeleteRoom(roomid) {
  const resp = await axios
    .get(`http://localhost:8000/api/v0.1/room/delete/${roomid}`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return resp;
}
