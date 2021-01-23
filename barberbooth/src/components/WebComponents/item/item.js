import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchWorker } from "../../../actions";
import { connect } from "react-redux";
import "./items.css";
class Details extends Component {
  componentDidMount() {
    const obj = { cat_id: this.props.match.params.id };
    this.props.fetchWorker(obj);
  }
  renderlist = () => {
    const ar = Object.values(this.props.worker);
    return ar.map((work) => {
      return (
        // <div className="box col-12 col-sm-6 col-md-6">
        //   <div className="row">
        //     <div className="col-6 col-sm-5 col-md-5 ml-0.5">
        //       <div>
        //         {" "}
        //         <img src={`/pic/${work.w_img}`} className="w_photo" />
        //       </div>
        //     </div>
        //     <div className="col-6 col-sm-7 col-md-7">
        //       <div className="row">
        //         <div className="rate">
        //           {" "}
        //           <div className=" col-6 name">price</div>
        //           <div className="name col-6">
        //             <span>{work.w_price}/hr</span>
        //           </div>
        //         </div>
        //       </div>

        //       <div className="row but ">
        //         <div className="drop">
        //           <select className="bt1 ml-1" name="month" id="month">
        //             // <option value="1">1 Hour</option>
        //             // <option value="2"> 2 Hour</option>
        //             // <option value="12">3 Hour</option>

        //           </select>
        //         </div>
        //         <div
        //           className=" add "
        //           style={{ marginTop: "20px", textAlign: "center" }}
        //         >
        //           <a href={`/check/${work._id}`}>Get Appointment</a>
        //         </div>
        //       </div>

        //       <div></div>
        //     </div>
        //     <div className="bod">
        //       <span className="span">{work.w_desc}</span>
        //     </div>
        //   </div>
        // </div>
        <div className="items">
          <div className="itemCard   mr-sm-5 ">
            <img
              className="itemCardImg"
              src={`/pic/${work.w_img}`}
              alt="itemCardImg "
            />

            <div className="itemCardBody">
              <h5 id="title">{work.w_price}/hr</h5>
              <div className="row d-flex justify-content-between">
                <div className="ml-3 workerName">{`${work.w_name}`}</div>
                <div className="mr-3">
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
                    class="fa fa-star"
                    aria-hidden="true"
                    style={{ color: "rgb(237, 175, 21)" }}
                  ></i>
                  <i
                    class="fa fa-star-half-o"
                    aria-hidden="true"
                    style={{ color: "rgb(237, 175, 21)" }}
                  ></i>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <Link to={`/check/${work._id}`} className="appointment">
                  Get Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="  row d-flex justify-content-center  ">
          {this.renderlist()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ worker }) {
  return { worker };
}
export default connect(mapStateToProps, { fetchWorker })(Details);
