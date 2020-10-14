import React from "react";
import Avatar from "./Avatar";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div className="new-convo-container">
        <div className="add-btn">
          <div className="plus-line-1"></div>
          <div className="plus-line-2"></div>
        </div>
        <p className="new-convo-text">New conversation</p>
      </div>
      <div className="conversations">
        <div className="group-avatars">
          {props.users.map((user) => {
            return <Avatar source={user.avatar} width="20px" alt="" />;
          })}
        </div>
        <div className="conversations-description">
          <div className="converstaion-title">
            <div className="group-headline">
              <p className="group-title">BFFL</p>
              <p className="convo-timestamp">
                {props.messages[props.messages.length - 1].timestamp}
              </p>
            </div>
            <p className="last-message">
              {props.messages[props.messages.length - 1].user.username} :{" "}
              {props.messages[props.messages.length - 1].body}
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-side-bar"></div>
    </div>
  );
};

export default SideBar;
