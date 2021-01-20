import React, { useState } from "react";
import "./checkout.css";
import Calender from "../Calender";
export const Item = (props) => (
  <div className="item-container">
    <img className="item-image" src={props.img} />
    <div className="description">
      <h2
        className=" container d-flex justify-content-center  align-item-center mt-3 reservation"
        style={{
          color: " #fff",
          position: "absolute",
          zIndex: 2,

          fontWeight: "800",
          fontFamily: "'Times New Roman', Times, serif",
          textAlign: "center",
        }}
      >
        Make Your Reservation
      </h2>

      <p
        className=" container d-flex justify-content-center  align-item-center mt-3"
        style={{
          color: " #fff",
          position: "absolute",
          zIndex: 2,
          fontWeight: "800",
          bottom: "45px",
        }}
      >
        {props.description}
      </p>
    </div>
  </div>
);

export const Checkout = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <div
      className=" container checkout-container p-3 align-items-between"
      style={{ textAlign: "center" }}
    >
      <div className="col-12 name">
        <span>name:</span>
        <span>{props.name}</span>
      </div>
      <div className="col-12 name">
        <span>Hourly Price:</span>
        <span>{props.price}</span>
      </div>
      <div className="col-12 name">
        <span>Address:</span>
        <span>{props.address}</span>
      </div>
      <div className="col-12 name " style={{ minHeight: "100px" }}>
        <span className="desc">
          <span>Description:</span>
          {props.description}
        </span>
      </div>
      <div className="col-12 rating">
        <span>Rating</span>
        <span>
          {" "}
          <i
            class="fa fa-star"
            aria-hidden="true"
            fontSize="35px"
            style={{ color: "rgb(237, 175, 21)" }}
          ></i>
          <i
            class="fa fa-star"
            aria-hidden="true"
            style={{ color: "rgb(237, 175, 21)" }}
          ></i>
          <i
            class="fa fa-star"
            aria-hidden="true"
            style={{ color: "rgb(237, 175, 21)" }}
          ></i>
          <i
            class="fa fa-star"
            aria-hidden="true"
            style={{ color: "rgb(237, 175, 21)" }}
          ></i>
          <i
            class="fa fa-star-half-o"
            aria-hidden="true"
            style={{ color: "rgb(237, 175, 21)" }}
          ></i>
        </span>
      </div>
      <div
        className="col-12 date container d-flex justify-content-center mt-5 calender"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Calender />
      </div>

      <button
        className=" myNeed mt-5 "
        onClick={props.callModal}
        style={{ textAlign: "center" }}
        disable={false}
      >
        Book Now
      </button>
    </div>
  );
};
