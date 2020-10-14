import React from "react";
import Avatar from "../Avatar";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="menu-and-name">
        <div className="hamburger-container">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <p className="name">{props.currentUser.username}</p>
      </div>
      <div className="parts-icons">
        <div className="chat-participants">
          <p className="group">BFFL</p>
          {props.users
            .filter((others) => {
              if (others.username !== props.currentUser.username) {
                return true;
              } else {
                return false;
              }
            })
            .map((user) => {
              return (
                <div className="others">
                  <Avatar source={user.avatar} width="35px" />
                  <p className="others-name">{user.username}</p>
                </div>
              );
            })}
        </div>
        <div className="hamburger-container">
          <div className="three-dots"></div>
          <div className="three-dots"></div>
          <div className="three-dots"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
