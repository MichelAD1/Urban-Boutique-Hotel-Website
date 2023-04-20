import axios from "axios";
export default async function AddRoom(
  username,
  email,
  password,
  number,
  name,
  location,
  description,
  categoryid,
  fblink,
  iglink,
  tiktoklink,
  menulink,
  image,
  images
) {
  const data = {
    username: username,
    email: email,
    password: password,
    number: number,
    name: name,
    location: location,
    description: description,
    categoryid: categoryid,
    fblink: fblink,
    iglink: iglink,
    tiktoklink: tiktoklink,
    menulink: menulink,
    profile: image,
    business_images: images,
  };

  const resp = await axios
    .post("http://127.0.0.1:8000/api/v0.1/room/add", data, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response;
    });
  return resp;
}
