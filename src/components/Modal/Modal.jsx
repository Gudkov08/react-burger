import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ModalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {

  return ReactDOM.createPortal (
    <>
      { props.open ? (
          <section className={ModalStyles.popup} onClick={props.close} >
            <ModalOverlay />
            <div className={ModalStyles.popupContainer} onClick={(evt) => {evt.stopPropagation()}}>
              <CloseIcon type="primary" aria-label="кнопка Закрыть форму" onClick={props.close}/>
              {props.children}
            </div>
          </section>
        ) : null
      }
    </>, 
    document.getElementById('modals')
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
