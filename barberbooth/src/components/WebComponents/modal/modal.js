// import React,{Component} from "react"
// import axios from 'axios';
// export default class modal extends Component{
//  state={
//    name:" "
//  }
//   inp=(e)=>{
//     console.log(e)
// this.setState({name:e.target.value})
//   }
//   handle=(e)=>{
//     axios.post("/api",this.state)
//     e.preventDefault();

//     console.log(this.state)
//   }
//   render(){
//     return(

//       <div style={{marginTop:"500px"}}>
//         <input type="text" onChange={this.inp}/>
//         <input type ="submit" onClick={this.handle}/>
//       </div>
//     )
//   }
// }

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./modal.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Popup from "reactjs-popup";
import Log from "../loginLogout";
import Blur from "./blur";
import { baseUrl } from "../../../actions";
export default class Modal extends Component {
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
  r_login = (e) => {
    axios.post(`${baseUrl}/api/login`, this.state).then((res) => {
      if (res.data.success) {
        window.location = `${res.data.redirectUrl}`;
      } else {
        window.alert("username does not match with password");
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
                      Log In
                    </h2>
                    <div
                      class="tab-pane fade in show active"
                      id="login"
                      role="tabpanel"
                    >
                      {/* <div className="social" style={{textAlign:"center"}}>
<button className="google_btn">       <a  href="/auth/google"  className="btn btn-social-icon"><i class=" fa fa-google-plus-official"></i> Sign in with google </a></button>

{/* <a  href="http://localhost:5555/auth/facebook"  className="btn btn-social-icon"><button className="fb_btn"><i class=" fa fa-facebook"></i> Sign in with Facebook</button></a> */}

                      {/* </div>  */}
                      <div
                        className="login-form"
                        style={{ textAlign: "center" }}
                      >
                        <div>
                          {" "}
                          <input
                            type="text"
                            onChange={this.r_email}
                            name="username"
                            placeholder="Username"
                            required
                          />
                        </div>

                        <div>
                          {" "}
                          <input
                            type="password"
                            name="password"
                            onChange={this.r_pass}
                            placeholder="Password"
                            required
                          />
                        </div>
                        {/* <div> <input type="submit"  onClick={this.r_login} value="Login"/> */}
                        <div>
                          <button
                            style={{
                              border: "none",
                              width: "200px",
                              height: "40px",
                              borderRadius: "12px",
                              backgroundColor: "khaki",
                              color: "maroon",
                              fontWeight: "700",
                              marginBottom: "10px",
                              marginTop: "25px",
                            }}
                            className="login_btn"
                            type="submit"
                            onClick={this.r_login}
                            value="Login"
                          >
                            Login
                          </button>
                        </div>

                        <div
                          class=" nav options text-right"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <p
                            class="pt-1"
                            style={{ color: "#fff", fontSize: "15px" }}
                          >
                            New user click here to ?{" "}
                            <a
                              class="nav-link"
                              href="/register"
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
                              Signup
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
        </div>
      </Fragment>
    );
  }
}
