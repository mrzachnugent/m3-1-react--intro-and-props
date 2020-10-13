import React from "react";

const Avatar = (props) => {
  return (
    <img src={props.source} width={props.width} className="avatar" alt="" />
  );
};

export default Avatar;
