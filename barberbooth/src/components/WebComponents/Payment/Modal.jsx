import React from "react";
import "./Modal.css";
import Backdrop from "./Backdrop";
import ModalCard from "./ModalCard";
function Modal({ callModal }) {
  return (
    <div>
      <ModalCard callModal={callModal} />
      <Backdrop />
    </div>
  );
}

export default Modal;
