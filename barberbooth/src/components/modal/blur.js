import React, { Component } from "react";
import { render } from "react-dom";
import "./modal.css";
import { Card, Button } from "react-bootstrap";
export default class Modal extends Component {
  render() {
    return (
      <div
        className="blur"
        style={{ backgroundColor: "#000", opacity: "0.9" }}
      ></div>
    );
  }
}
