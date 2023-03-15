import React from "react";
import "./Empty.css";
import { FaRegTimesCircle } from "react-icons/fa";
const Empty = (props) => {
  return (
    <div className="empty">
      <h1 className="emptyIcon">
        {props.name}
        <br />
        <FaRegTimesCircle />
        <br />
        is Empty
      </h1>
    </div>
  );
};

export default Empty;
