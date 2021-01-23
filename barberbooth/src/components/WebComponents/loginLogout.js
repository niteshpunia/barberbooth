import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../actions/index";
import { connect } from "react-redux";
class Log extends Component {
  logout = () => {
    axios.defaults.withCredentials = true;
    axios.get(`${baseUrl}/api/logout`).then((res) => {
      console.log(res);
      window.location = `${res.data.redirect}`;
    });
  };
  login = () => {
    if (this.props.auth) {
      return (
        <a onClick={this.logout} style={{ color: "rgb(237, 175, 21)" }}>
          <span
            className=" d-none d-sm-block"
            style={{
              color: "rgb(237, 175, 21)",
              margin: 0,
            }}
          >
            Logout
          </span>

          <i
            className="fa fa-sign-out"
            style={{
              position: "fixed",
              zIndex: 999,
              color: "#fff",
              fontSize: "30px",
              border: "none",
              marginTop: "45%",
              transform: "rotate(180deg)",
            }}
          ></i>
        </a>
      );
    } else {
      return (
        <a
          href="/login"
          style={{
            color: "rgb(237, 175, 21)",
            border: "none",
            textDecoration: "none",
          }}
        >
          <span
            className="d-none d-sm-block"
            style={{
              color: "rgb(237, 175, 21)",
              margin: 0,
            }}
          >
            Login
          </span>

          <i
            className="fa fa-sign-out"
            style={{
              position: "fixed",
              zIndex: 999,
              color: "#fff",
              fontSize: "30px",
              border: "none",
              marginTop: "45%",
            }}
          ></i>
        </a>
      );
    }
  };

  render() {
    return <div>{this.login()}</div>;
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Log);
