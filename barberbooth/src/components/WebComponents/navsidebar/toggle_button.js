import React, { Fragment } from "react";

import "./style.css";

const drawerToggleButton = (props) => (
  <button
    className=" togbtn1 toggle-button ml-2"
    onClick={props.click}
    style={{ marginTop: "18px" }}
  >
    <i
      className="fa fa-align-justify fa-2x "
      style={{ color: "rgb(237, 175, 21)" }}
    ></i>
  </button>
);

export default drawerToggleButton;
