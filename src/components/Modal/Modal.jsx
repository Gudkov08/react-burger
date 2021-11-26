import React from "react";
import ModalStyles from "./Modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails"
import IngredientDetails from "../IngredientDetails/IngredientDetails"

const Modal = (props) => {
  return (
    <div className={ModalStyles.popupContainer} onClick={(evt) => {evt.stopPropagation()}}>
      <CloseIcon type="primary" aria-label="кнопка Закрыть форму" onClick={props.close}/>
      {/* <OrderDetails /> */}
      <IngredientDetails />
    </div>
  )
}

export default Modal;
