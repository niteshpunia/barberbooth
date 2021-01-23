import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./modal.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Popup from "reactjs-popup";
import Log from "../loginLogout";
import Blur from "./blur";
import { baseUrl } from "../../../actions";

export default class Register extends Component {
  state = {
    username: " ",
    password: " ",
  };
  r_email = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  r_pass = (e) => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };
  r_submit = (e) => {
    axios.post(`${baseUrl}/api/register`, this.state).then((res) => {
      if (res.data.user) {
        window.alert(res.data.message);
      } else {
        window.location.href = `${res.data.redirect}`;
      }
    });
  };
  render() {
    return (
      <Fragment>
        <Blur />

        <div className="log1">
          <div className=" container ">
            <div class="  modal-dialog cascading-modal ">
              <div class="modal-content">
                <div
                  class="modal-c-tabs"
                  style={{ backgroundColor: "rgb(131, 92, 14)" }}
                >
                  {/* <ul
                    class="nav nav-tabs md-tabs tabs-2 light-blue darken-3"
                    role="tablist"
                  >
                    <li class=" nav-item  loginbtn1  ">
                      <a
                        class="nav-link active "
                        data-toggle="tab"
                        href="#login"
                        role="tab"
                      >
                        <i class="fas fa-user mr-1"></i>
                        Login
                      </a>
                    </li>
                    <li class=" regbtn1 nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                      >
                        <i class="fas fa-user-plus mr-1"></i>
                        Register
                      </a>
                    </li>
                  </ul> */}

                  <div className="tab-content ">
                    <h2
                      style={{
                        textAlign: "center",
                        color: "rgb(237, 175, 21)",
                        marginBottom: "40px",
                        fontWeight: "800",
                        fontFamily: "Roboto",
                        fontSize: "50px",
                      }}
                    >
                      Sign Up
                    </h2>

                    <div
                      class="tab-pane fade in show active"
                      id="register"
                      role="tabpanel"
                    >
                      <form onSubmit={this.r_submit} class="modal-body">
                        <div class="md-form form-sm mb-5">
                          <i
                            class="fa fa-envelope prefix"
                            style={{ color: "#fff", marginTop: 15 }}
                          ></i>
                          {/* <i
                            class="fa fa-envelope"
                            aria-hidden="true"
                            style={{ color: "#fff" }}
                          ></i> */}
                          <input
                            className="email"
                            type="email"
                            onChange={this.r_email}
                            name="email"
                            id="modalLRInput12"
                            class="form-control form-control-sm validate"
                            style={{ marginTop: "15px", color: "#fff" }}
                            required
                          />
                          <label style={{ color: "#fff", fontSize: "25px" }}>
                            Your email
                          </label>
                        </div>

                        <div class="md-form form-sm mb-4">
                          <i
                            class="fa fa-lock prefix"
                            style={{ color: "#fff", marginTop: 15 }}
                          ></i>
                          <input
                            type="password"
                            onChange={this.r_pass}
                            id="modalLRInput14"
                            class="form-control form-control-sm validate"
                            style={{ marginTop: "15px" }}
                            required
                          />
                          <label
                            data-error="wrong"
                            data-success="right"
                            for="modalLRInput14"
                            style={{ color: "#fff", fontSize: "25px" }}
                          >
                            Password
                          </label>
                        </div>

                        <div class="text-center  mt-2">
                          <button
                            type="submit"
                            className="myNeed"
                            style={{ width: "200px", borderRadius: 8 }}
                          >
                            <i
                              class="fa fa-user-plus"
                              aria-hidden="true"
                              style={{
                                color: "rgb(131, 92, 14)",
                                fontWeight: "400",
                              }}
                            ></i>
                            &nbsp; Sign up
                          </button>
                        </div>
                      </form>

                      <div
                        class=" nav options text-right"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p
                          class="pt-1"
                          style={{ color: "#fff", fontSize: "15px" }}
                        >
                          Already have an account?{" "}
                          <a
                            class="nav-link"
                            href="/login"
                            class="blue-text"
                            style={{
                              color: "#fff",
                              fontSize: "20px",
                              backgroundColor: "transparent",
                              outline: "none",
                              border: "none",
                              textDecoration: "underline",
                            }}
                          >
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
