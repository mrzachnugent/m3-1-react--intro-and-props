import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="message-blocks">
        <p className="username">{props.user.username}</p>
        <div className="picture-message-received">
          <Avatar source={props.user.avatar} width="45px" />
          <p className="message-body">
            {props.body}
            <img src="/assets/tip-received.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

const SentMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="message-blocks">
        <div className="picture-message-sent">
          <p className="message-sent">
            {props.body}
            <img src="/assets/tip-sent.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage user={props.user} body={props.body} />;
  } else {
    return <ReceivedMessage user={props.user} body={props.body} />;
  }
};

export default ChatMessage;
