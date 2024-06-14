import React from "react";
import { MdOutlineMessage } from "react-icons/md";

const Button = (props) => {
  return (
    <button className="props.isOutline ? .secondary-btn : Primary-btn">
     
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
