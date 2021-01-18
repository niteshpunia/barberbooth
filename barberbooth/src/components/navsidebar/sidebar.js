import React from "react";
import "./style.css";
import "boxicons";
import Log from "../loginLogout.js";
const sideDrawer = (props) => {
  return (
    <nav className="side-drawer">
      <div className="  container  d-flex align-items-center ">
        <div className="mw ">
          <a href="/home">
            <i
              className="fa fa-home"
              style={{
                position: "fixed",
                zIndex: 999,
                color: "#fff",
                fontSize: "30px",
                border: "none",
                marginTop: "25%",
              }}
            ></i>
          </a>
        </div>

        <div className="mw">
          <Log />
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;
