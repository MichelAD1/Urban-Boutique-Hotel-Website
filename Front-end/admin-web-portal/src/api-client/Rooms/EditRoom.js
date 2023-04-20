import axios from "axios";

export default async function EditRoom(
  data,
  reqData,
  addedImages,
  deletedImages,
  imagesChanged,
  infoChanged
) {
  const resp = data;
  if (infoChanged) {
    await axios
      .post("http://localhost:8000/api/v0.1/room/edit/all", reqData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        for (const attrname in res.data.room) {
          resp[attrname] = res.data.room[attrname];
        }
        for (const attrname in res.data.user) {
          resp[attrname] = res.data.user[attrname];
        }
      })
      .catch((err) => {
        return err;
      });
  }
  if (imagesChanged) {
    const images_data = {
      images_added: addedImages,
      images_removed: deletedImages,
      roomid: reqData.get("roomid"),
    };
    await axios
      .post("http://localhost:8000/api/v0.1/images/edit/", images_data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        resp["images"] = res.data.images;
      })
      .catch((err) => {
        return err;
      });
  }
  return resp;
}
