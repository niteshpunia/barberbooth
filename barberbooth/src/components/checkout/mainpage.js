import React, { useEffect, useState } from "react";
import { Checkout, Item } from "./checkout";
import "./checkout.css";
import { connect } from "react-redux";
import _ from "lodash";
import Modal from "../Payment";
import * as actions from "../../../actions";
const Check = (props) => {
  useEffect(() => {
    props.fetchoneWorker({ one_id: props.match.params.id });
  }, []);

  const [modal, setModal] = useState(false);
  const callModal = () => {
    setModal(!modal);
  };
  const render_list = () => {
    if (!props.auth) {
      window.location = "/login";
    } else {
      return (
        <div className="row checkout">
          <div className="col-12 col-md-6 m-0 p-0">
            <Item img={`/pic/${props.worker.w_img}`} />
          </div>

          <div
            className="col-12 col-md-6 "
            style={{ backgroundColor: "rgb(131, 92, 14)" }}
          >
            <Checkout
              name={`${props.worker.w_name}`}
              price={`${props.worker.w_price}`}
              description={`${props.worker.w_desc}`}
              address={`${
                props.worker.w_address
                  ? props.worker.w_address
                  : "asanduse 5 , majaka,Tallin"
              }`}
              callModal={callModal}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {modal && <Modal callModal={callModal} />}
      <div
        className="container check d-flex justify-content-center"
        style={{ marginTop: "120px" }}
      >
        {render_list()}
      </div>
      ;
    </>
  );
};

function mapStateToProps({ worker, auth }) {
  return { worker, auth };
}
export default connect(mapStateToProps, actions)(Check);
