import "../../Global/Styles/styles.css";
import "./rooms-styles.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

import ConvertImage from "../../Global/Functions/ConvertImage";
import AddBusiness from "../../api-client/Business/AddBusiness";
import EditBusiness from "../../api-client/Business/EditBusiness";
import GetOptions from "../../api-client/Options/GetOptions";
//Icons
import add from "../../assets/icons/add-cp.svg";

// Images
import default_profile from "../../assets/default-profile.png";
import delete_icon from "../../assets/icons/cancel-icon.svg";
import DeleteBusiness from "../../api-client/Business/DeleteBusiness";

const RoomItem = () => {
  const loc = useLocation();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [isValid, setIsValid] = useState(loc.state);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [fb, setFb] = useState("");
  const [ig, setIg] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [menu, setMenu] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  const [profile, setProfile] = useState(default_profile);
  const [images, setImages] = useState([]);

  const [imagesChanged, setImagesChanged] = useState(false);
  const [addedImages, setAddedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  useEffect(() => {
    if (isValid) {
      setName(isValid.data.name);
      setProfile(isValid.data.logo_url);
      setUsername(isValid.data.username);
      setDescription(isValid.data.description);
      setEmail(isValid.data.email);
      setPhoneNumber(isValid.data.number);
      setLocation(isValid.data.location);
      setCategory(isValid.data.category_id);
      setFb(isValid.data.fb_link);
      setIg(isValid.data.ig_link);
      setTiktok(isValid.data.tiktok_link);
      setMenu(isValid.data.menu_link);
      setImages(isValid.data.images);
    }

    let options = GetOptions();
    options
      .then((res) => {
        Promise.all(res).then((results) => {
          setCategories(results[1].data);
        });
      })
      .catch((err) => {
        return err;
      });
  }, []);

  const removeImage = (id) => {
    const newData = images.filter((image) => image.id !== id);
    setImages(newData);
    setDeletedImages((deletedImages) => [...deletedImages, id]);
    setImagesChanged(true);
  };

  async function addImage(e) {
    let v_id = 0;
    if (images.length !== 0) {
      v_id = images[images.length - 1].id;
    }
    for (let i = 0; i < e.target.files.length; i++) {
      await ConvertImage(e.target.files[i]).then((res) => {
        setImages((images) => [...images, { id: v_id + 1, imageurl: res }]);
        setAddedImages((addedImages) => [
          ...addedImages,
          { id: v_id + 1, imageurl: res },
        ]);
        v_id++;
      });
    }
    setImagesChanged(true);
  }

  const dataToSend = () => {
    const requestData = new FormData();
    requestData.append("businessid", isValid.data.id);
    if (username !== isValid.data.username) {
      requestData.append("username", username);
    }
    if (name !== isValid.data.full_name) {
      requestData.append("name", name);
    }
    if (email !== isValid.data.email) {
      requestData.append("email", email);
    }
    if (phoneNumber !== isValid.data.number) {
      requestData.append("number", phoneNumber);
    }
    if (location !== isValid.data.location) {
      requestData.append("location", location);
    }
    if (description !== isValid.data.description) {
      requestData.append("description", description);
    }
    if (parseInt(category) !== isValid.data.category_id) {
      requestData.append("category_id", category);
    }
    if (fb !== isValid.data.fb_link) {
      console.log(fb);
      requestData.append("fb_link", fb);
    }
    if (ig !== isValid.data.ig_link) {
      requestData.append("ig_link", ig);
    }
    if (tiktok !== isValid.data.tiktok_link) {
      requestData.append("tiktok_link", tiktok);
    }
    if (menu !== isValid.data.menu_link) {
      requestData.append("menu_link", menu);
    }
    if (profile !== isValid.data.logo_url) {
      requestData.append("logo_url", profile);
    }
    if (password !== "") {
      requestData.append("password", password);
    }
    return requestData;
  };

  const checkChange = () => {
    return !(
      username === isValid.data.username &&
      name === isValid.data.name &&
      email === isValid.data.email &&
      phoneNumber === isValid.data.number &&
      location === isValid.data.location &&
      description === isValid.data.description &&
      parseInt(category) === parseInt(isValid.data.category_id) &&
      fb === isValid.data.fb_link &&
      ig === isValid.data.ig_link &&
      tiktok === isValid.data.tiktok_link &&
      menu === isValid.data.menu_link &&
      profile === isValid.data.logo_url &&
      password === "" &&
      profile === isValid.data.logo_url
    );
  };

  const mergeJson = (obj1, obj2, obj3) => {
    const obj4 = {};
    for (const attrname in obj1) {
      obj4[attrname] = obj1[attrname];
    }
    for (const attrname in obj2) {
      obj4[attrname] = obj2[attrname];
    }
    obj4["images"] = obj3;
    return obj4;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (profile === default_profile) {
      setErr("Please upload a profile picture");
    } else if (images.length === 0) {
      setErr("Please upload at least one image");
    } else {
      const resp = AddBusiness(
        username,
        email,
        password,
        phoneNumber,
        name,
        location,
        description,
        category,
        fb,
        ig,
        tiktok,
        menu,
        profile,
        images
      );
      resp.then((res) => {
        if (res.status === 422) {
          if (res.data.errors.email) {
            setErr(res.data.message);
          }
          if (res.data.errors.username) {
            setErr(res.data.message);
          }
          if (res.data.errors.number) {
            setErr(res.data.message);
          }
        } else {
          const new_data = mergeJson(res.user, res.business, res.images);
          navigate("/business/profile", { state: { data: new_data } });
          window.location.reload();
        }
      });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const resp = EditBusiness(
      isValid.data,
      dataToSend(),
      addedImages,
      deletedImages,
      imagesChanged,
      checkChange()
    );
    resp.then((res) => {
      navigate("/business/profile", { state: { data: res } });
      window.location.reload();
    });
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    openModal();
  };

  const handleConfirmDelete = () => {
    const user_id = isValid.data.id;
    const response = DeleteBusiness(user_id);
    response.then((res) => {
      if (res.status === 200) {
        navigate("/businesses");
      } else {
        setErr("Something went wrong");
      }
    });
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <form
        className="edit-container"
        onSubmit={(e) => {
          if (isValid) {
            handleEdit(e);
          } else {
            handleSubmit(e);
          }
        }}
      >
        <div className="gallery-box">
          <div className="gallery-header">
            <p className="gallery-title">Add up to 9 images</p>
            <label htmlFor="images-upload" className="custom-profile-upload">
              <img src={add} alt="" className="add-icon" />
            </label>
            <input
              type="file"
              className="change-profile"
              id="images-upload"
              name="images-upload"
              multiple
              onChange={(v_id) => addImage(v_id)}
              onClick={(e) => (e.target.value = "")}
            />
          </div>
          <div className="gallery">
            {images.map((item) => (
              <div key={item.id}>
                <img src={item.imageurl} alt="" className="images" />
                <img
                  src={delete_icon}
                  alt=""
                  className="delete-icon"
                  onClick={() => removeImage(item.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <div className="info-header">
            <img src={profile} alt="" className="profile" />
            <div className="name-edit">
              {isValid && <div className="name-item">{isValid.name}</div>}
              {isValid && (
                <label
                  htmlFor="profile-upload"
                  className="custom-profile-upload"
                >
                  Change profile
                </label>
              )}
              {!isValid && (
                <label
                  htmlFor="profile-upload"
                  className="custom-profile-upload"
                >
                  Add profile
                </label>
              )}
              <input
                type="file"
                className="change-profile"
                id="profile-upload"
                name="profile-upload"
                onChange={(e) => {
                  ConvertImage(e.target.files[0]).then((res) => {
                    setProfile(res);
                  });
                }}
              />
            </div>
          </div>
          <div className="edit-info">
            <div className="labels-section">
              <div className="label-text">Username: </div>
              <div className="label-text">Name: </div>
              <div className="label-text bio-label">Description: </div>
              <div className="label-text">Email: </div>
              <div className="label-text">Phone number: </div>
              <div className="label-text">Location: </div>
              <div className="label-text">Category: </div>
              <div className="label-text">Facebook: </div>
              <div className="label-text">Instagram: </div>
              <div className="label-text">Tiktok: </div>
              <div className="label-text">Menu: </div>
              <div className="label-text">Change password: </div>
            </div>
            <div className="inputs-section">
              <input
                type="text"
                className="input-box"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                className="input-box bio-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <input
                type="email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                className="input-box"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-box"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <select
                className="input-dropdown"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                {!isValid && (
                  <option value="" hidden>
                    Choose a category
                  </option>
                )}
                {categories.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="input-box"
                value={fb}
                onChange={(e) => setFb(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-box"
                value={ig}
                onChange={(e) => setIg(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-box"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-box"
                value={menu}
                onChange={(e) => setMenu(e.target.value)}
                required
              />
              {!isValid && (
                <input
                  type="password"
                  className="input-box"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="************"
                />
              )}
              {isValid && (
                <input
                  type="password"
                  className="input-box"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="***************"
                />
              )}
            </div>
          </div>
          <div className="action-buttons">
            {isValid && (
              <>
                {(checkChange() || imagesChanged) && (
                  <button className="action-bt save" type="submit">
                    Save
                  </button>
                )}
                {!(checkChange() || imagesChanged) && (
                  <button
                    className="action-bt save-disabled"
                    type="submit"
                    disabled
                  >
                    Save
                  </button>
                )}
                <button
                  className="action-bt delete"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <ReactModal
                  className="custom-modal"
                  isOpen={isModalOpen}
                  style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                  }}
                >
                  <div>
                    <h1>Confirm Delete</h1>
                    <p>
                      Are you sure you want to remove this employee? This action
                      cannot be undone.
                    </p>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={closeModal}>No</button>
                  </div>
                </ReactModal>
              </>
            )}
            {!isValid && (
              <button className="action-bt save" type="submit">
                Add
              </button>
            )}
          </div>
          <div className="add-error">{err}</div>
        </div>
      </form>
    </div>
  );
};

export default RoomItem;
