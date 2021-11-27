import React from "react";
import ModalStyles from "./Modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {
  return (
    <div className={ModalStyles.popupContainer} onClick={(evt) => {evt.stopPropagation()}}>
      <CloseIcon type="primary" aria-label="кнопка Закрыть форму" onClick={props.close}/>
      {props.getModal()}
    </div>
  )
}

export default Modal;
