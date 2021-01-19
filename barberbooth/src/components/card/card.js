import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import Slider from "../slider/slider.js";
import "./card.css";
import { connect } from "react-redux";
import { fetchCategory } from "../../../actions";
class Cards extends Component {
  componentDidMount() {
    this.props.fetchCategory();
  }

  renderlist = () => {
    // const peopleArray = Object.values(peopleObj)
    // const peopleArray = Object.keys(peopleObj).map(i => peopleObj[i])
    const ar = Object.values(this.props.cat);
    return ar.map((cat) => {
      return (
        <div className="card  ml-sm-2 mr-sm-2 mt-5">
          <img className="cardImg" src={`./pic/${cat.c_img}`} alt="cardImg " />
          <div className="cardBody">
            <h5 id="title">{cat.c_name}</h5>
            <p className="card-text">{cat.c_desc}</p>
            <div className="d-flex justify-content-center">
              <Link to={`/details/${cat._id}`} className="need">
                Book
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "600",
            fontSize: "45px",
          }}
        >
          <i class="fab fas-servicestack"></i>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "15px",
              fontWeight: "600",
              fontSize: "45px",
              marginTop: "40px",
              color: "#000",
              fontFamily: "Roboto",
            }}
          >
            Our Services
          </h1>
        </div>
        <div className="row d-flex justify-content-center  p-0 p-sm-4 p-md-5 mt-0 ">
          {this.renderlist()}
        </div>
        }
      </>
    );
  }
}
function mapStateToProps({ cat }) {
  return { cat };
}
export default connect(mapStateToProps, { fetchCategory })(Cards);
