import React from "react";
import ReactDOM from "react-dom";
import ModalOverlayStyles from "./ModalOverlay.module.css";
import Modal from '../Modal/Modal';

const ModalOverlay = ( {show, close, getModal} ) => {

  return ReactDOM.createPortal (
    <>
      { show ? (
          <section className={ModalOverlayStyles.popup} onClick={close} >
            <Modal close={close} getModal={getModal}/> 
          </section>
        ) : null
      }
    </>, 
    document.getElementById('modals')
  )
}

export default ModalOverlay;
