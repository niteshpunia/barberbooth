import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import "./slide.css";
export default class Slider extends Component {
  render() {
    return (
      // <Carousel style={{ marginTop: "0px", padding: 0 }}>
      //   <Carousel.Item
      //     classNameName="slider"
      //     style={{ marginTop: "0px", padding: 0 }}
      //   >
      //     <img
      //       classNameName="sliderImg"
      //       src="./pic/p1.jpg"
      //       style={{ marginTop: "0px", padding: 0 }}
      //       alt="First slide"
      //     />
      //     <Carousel.Caption classNameName="myText">
      //       <h3 style={{ color: "maroon", fontWeight: "800" }}>
      //         All Service At Your Doorstep
      //       </h3>
      //       <p style={{ color: "darkgrey", fontWeight: "800" }}>
      //         Skill hub is leading Plateform in the world
      //       </p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item classNameName="slider">
      //     <img classNameName="sliderImg" src="./pic/p2.jpg" alt="Third slide" />

      //     <Carousel.Caption classNameName="myText">
      //       <h3 style={{ color: "maroon", fontWeight: "800" }}>
      //         All Service At Your Doorstep
      //       </h3>
      //       <p style={{ color: "darkgrey", fontWeight: "800" }}>
      //         Skill hub is leading Plateform in the world
      //       </p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item classNameName="slider">
      //     <img classNameName="sliderImg" src="./pic/p3.jpg" alt="Third slide" />

      //     <Carousel.Caption classNameName="myText">
      //       <h3 style={{ color: "maroon", fontWeight: "800" }}>
      //         All Service At Your Doorstep
      //       </h3>
      //       <p style={{ color: "darkgrey", fontWeight: "800" }}>
      //         Skill hub is leading Plateform in the world
      //       </p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{
          marginTop: "120px",
          boxShadow: " 0px 0px 43px 0px rgba(0, 0, 0, 0.35)",
        }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active slider">
            <img className="sliderImg" src="./pic/s4.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="sliderImg" src="./pic/s1.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item slider">
            <img className="sliderImg" src="./pic/s3.jpg" alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ color: "#000", fontSize: "40px" }}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
