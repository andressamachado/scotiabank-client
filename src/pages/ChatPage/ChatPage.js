import React, { useState } from "react";
import "./ChatPage.scss";
import backarrow from "../../assets/icons/prime_arrow-up.svg";
import ProfileImage from "../../assets/icons/Ellipse-181.svg";
import paperClip from "../../assets/icons/paperclip-attach.svg";
import uparrow from "../../assets/icons/up-arrow.svg";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <>
      <header className="chat__header">
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
      {/* where the messages appear */}
      <section className="chatSpace">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="messages__display">
              {message.text}
            </div>
          ))}
        </div>
      </section>
      {/* bottom part where you type your message */}
      <div className="chat-container">
        <form className="message-form" onSubmit={handleSendMessage}>
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
          <button className="submit-message__button" type="submit">
            <img className="submit__arrow" src={uparrow} alt="Submit message" />{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
