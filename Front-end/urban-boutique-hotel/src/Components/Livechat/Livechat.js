import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Livechat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatBottomRef = useRef(null);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  });
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "receiver" }]);
      setInputValue("");
    }
  };
  useEffect(() => {
    document.title = "Live Chat";
  }, []);

  useEffect(() => {
    chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="live-chat-container">
      <div className="chat-header">
        <h2>{t("livechat")}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div className={`chat-${message.sender}`} key={index}>
            <div className={`message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={chatBottomRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">{t("send")}</button>
      </form>
    </div>
  );
};

export default Livechat;
