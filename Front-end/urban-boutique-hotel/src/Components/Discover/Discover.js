import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import aboutImage1 from "../../assets/images/about-image1.jpg";
import aboutImage2 from "../../assets/images/about-image2.jpeg";
import galleryImage1 from "../../assets/images/gallery-image1.jpg";
import galleryImage2 from "../../assets/images/gallery-image2.jpeg";

const Discover = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // disable scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
    document.body.style.overflow = "auto"; // enable scrolling
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // enable scrolling on unmount
    };
  }, []);

  return (
    <>
      <div className="aboutHero">
        <div className="banner">
          <h1>{t("discover")}</h1>
          <div></div>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={1000}
            offset={-100}
            className="btn-primary"
          >
            {t("home_w")}
          </ScrollLink>
        </div>
      </div>
      <div className="about">
        <section className="about-section" id="about-section">
          <div className="about-img">
            <div className="about-img1">
              <img src={aboutImage2} alt="" className="about-image1" />
            </div>
            <div className="about-img2">
              <img src={aboutImage1} alt="" className="about-image2" />
            </div>
          </div>
          <div className="about-description">
            <div className="heading">
              <h5>{t("discover_w1")}</h5>
            </div>
            <h2>{t("discover_w2")}</h2>
            <p>{t("discover_p")}</p>
            <p>{t("discover_p2")}</p>
          </div>
        </section>
      </div>
      {modalOpen && (
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            <FaTimes />
          </button>
          <img src={selectedImage} alt="" />
        </div>
      )}

      <div className="gallery">
        <h2>{t("photogallery")}</h2>
        <div className="gallery-images">
          <div
            className="gallery-image"
            onClick={() => openModal(galleryImage1)}
          >
            <img src={galleryImage1} alt="" />
          </div>
          <div
            className="gallery-image"
            onClick={() => openModal(galleryImage2)}
          >
            <img src={galleryImage2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
