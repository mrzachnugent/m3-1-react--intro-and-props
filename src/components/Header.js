import React from "react";
import Avatar from "../Avatar";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
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
              <Avatar source={user.avatar} width="55px" />
              <p className="others-name">{user.username}</p>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
