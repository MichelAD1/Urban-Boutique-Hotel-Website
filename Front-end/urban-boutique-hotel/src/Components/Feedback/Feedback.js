import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  });

  useEffect(() => {
    document.title = "Feedback";
  }, []);

  const handleSubmit = () => {};

  return (
    <div className="feedback-section" id="feedback-section">
      <div className="message-form">
        <div className="message-header">
          <h1>{t("feedback_head")}</h1>
        </div>
        <div className="message-paragraph">
          <p>{t("feedback_w")}</p>
        </div>
        <form className="message-inputs feedback" onSubmit={handleSubmit}>
          <div className="message-textarea">
            <textarea
              id="message"
              name="message"
              placeholder={t("feed_message")}
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <div className="feedback-button">
            {" "}
            <button
              disabled={!text}
              type="submit"
              className={!text ? "disabled-button" : ""}
            >
              {t("con_send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
