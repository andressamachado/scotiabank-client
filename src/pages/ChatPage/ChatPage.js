import React, { useState } from "react";
import "./ChatPage.scss";
import backarrow from "../../assets/icons/prime_arrow-up.svg";
import ProfileImage from "../../assets/icons/Ellipse-181.svg";
import paperClip from "../../assets/icons/paperclip-attach.svg";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <>
      <header>
        <img className="backarrow" src={backarrow} alt="back button" />
        <div className="advisor">
          <img
            className="advisor__image"
            src={ProfileImage}
            alt="profile picture"
          />
          <div className="advisor__details">
            <div className="advisor__name">Keanu Reeves</div>
            <div className="advisor__response">
              Typically replies within 24 hours
            </div>
          </div>
        </div>
        <div className="feedback">Share Feedback</div>
      </header>
      <section className="chatSpace"></section>
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="message-form">
          <input
            type="text"
            className="message-form__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <img
            className="message-form__attachement"
            src={paperClip}
            alt="attachements"
          />
          <button onClick={handleSendMessage}>Send</button>
        </form>
      </div>
    </>
  );
};

export default Chat;
