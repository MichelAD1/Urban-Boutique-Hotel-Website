import Footer from "../../Global/Components/Footer";
import Slideshow from "../../Global/Components/Slideshow";

// Images
// Attractions
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";
import att_3 from "../../assets/images/att-3.jpg";
import att_4 from "../../assets/images/att-4.jpg";
import att_5 from "../../assets/images/att-5.jpg";
import map from "../../assets/images/map.jpg";

// Arrival
import S_ban from "../../assets/images/S-Bahn.jpg";
import cat from "../../assets/images/CAT.jpg";
import postbus from "../../assets/images/Postbus.jpg";
import taxi from "../../assets/images/Taxi.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function FindUs() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  }, []);

  const slideshowd_data = [
    {
      id: 1,
      title: t("findus_title1"),
      description: t("findus_desc1"),
      image: att_1,
    },
    {
      id: 2,
      title: t("findus_title2"),
      description: t("findus_desc2"),
      image: att_2,
    },
    {
      id: 3,
      title: t("findus_title3"),
      description: t("findus_desc3"),
      image: att_3,
    },
    {
      id: 4,
      title: t("findus_title4"),
      description: t("findus_desc4"),
      image: att_4,
    },
    {
      id: 5,
      title: t("findus_title5"),
      description: t("findus_desc5"),
      image: att_5,
    },
  ];
  const arrival = [
    {
      id: 1,
      title: t("findus_arr1"),
      description: t("findus_arrd1"),
      image: S_ban,
    },
    {
      id: 2,
      title: t("findus_arr2"),
      description: t("findus_arrd2"),
      image: cat,
    },
    {
      id: 3,
      title: t("findus_arr3"),
      description: t("findus_arrd3"),
      image: postbus,
    },
    {
      id: 4,
      title: t("findus_arr4"),
      description: t("findus_arrd4"),
      image: taxi,
    },
  ];
  return (
    <>
      <Slideshow data={slideshowd_data} type={"Find"} />
      <div className="find-info">
        <div className="find-title">
          <h2>{t("arrival")} </h2>
          <div />
        </div>
      </div>
      {arrival.map((item) => (
        <div className="service-item" key={item.id}>
          {item.id % 2 === 0 ? (
            <>
              <div className="service-content">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-description">{item.description}</p>
              </div>
              <div className="service-image-container-inversed">
                <img src={item.image} alt="image" className="service-image" />
              </div>
            </>
          ) : (
            <>
              <div className="service-image-container">
                <img src={item.image} alt="image" className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-description">{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
      <div className="find-info">
        <div className="find-title">
          <h2>{t("con_location")}</h2>
          <div />
        </div>
        <div className="location-description">
          <p>{t("find_location_desc")}</p>
        </div>
        <img src={map} alt="" className="location-map" />
      </div>
      <Footer />
    </>
  );
}

export default FindUs;
