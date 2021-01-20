import React from "react";
import "./style.css";
function ModalCard({ callModal }) {
  return (
    <>
      <div
        className="modalCard p-3"
        style={{ backgroundColor: "rgb(131, 92, 14)" }}
      >
        <div className="closeBtn">
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={callModal}
          >
            <span
              style={{ marginLeft: "12px", color: "#fff" }}
              aria-hidden="true"
            >
              &times;
            </span>
          </button>
        </div>
        <div className="container d-flex justify-content-center mt-3 mb-5">
          <h1>Payment Details</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.alert(
              "Your reservation has been confirmed please check your email for reservation ticket thanks!"
            );
            window.location = "/home";
          }}
        >
          <Input label="Cardholder's Name" type="text" name="name" required />
          <Input
            label="Card Number"
            type="number"
            name="card_number"
            imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
            required
          />
          <div className="row">
            <div className="col">
              <Input label="Expiration Date" type="month" name="exp_date" />
            </div>
            <div className="col">
              <Input label="CVV" type="number" name="cvv" />
            </div>
          </div>
          <div>
            <Button text="Place order" />
          </div>
        </form>
      </div>
    </>
  );
}
const Input = (props) => (
  <div className="input">
    <label className="lab">{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} required />
      <img src={props.imgSrc} />
    </div>
  </div>
);

const Button = (props) => (
  <div className="container d-flex justify-content-center">
    <button type="submit" className="checkout-btn">
      {props.text}
    </button>
  </div>
);

export default ModalCard;
