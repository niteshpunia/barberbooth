import React, { Component, Fragment } from "react";
import axios from "axios";
import cors from "cors";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/WebComponents/navsidebar/index1.js";
import Slider from "./components/WebComponents/slider/slider.js";
import Card from "./components/WebComponents/main.js";
import Login from "./components/WebComponents/modal/modal.js";
import Footer from "./components/WebComponents/footer/footer.js";
import Details from "./components/WebComponents/item/item.js";
import Check from "./components/WebComponents/checkout/mainpage";
import Payment from "./components/WebComponents/Payment/Modal";
import Cat from "./admin/insertcat";
import Register from "./components/WebComponents/modal/Register.js";
import Work from "./admin/insertworker";
import * as actions from "./actions";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.User();
  }
  render() {
    return (
      <Fragment>
        {window.location.pathname === "/login" ||
        window.location.pathname === "/register" ? (
          ""
        ) : (
          <Header />
        )}

        <BrowserRouter>
          <Route exact path="/" component={Card} exact={true} />
          <Route exact path="/home" component={Card}></Route>
          {/* <Route exact path="/Login" component={Login}></Route> */}
          <Route exact path="/check/:id" component={Check}></Route>
          <Route exact path="/details/:id" component={Details}></Route>
          <Route exact path="/insertworker" component={Work}></Route>
          <Route exact path="/insertcat" component={Cat}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/payment" component={Payment}></Route>
        </BrowserRouter>
      </Fragment>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, actions)(App);
