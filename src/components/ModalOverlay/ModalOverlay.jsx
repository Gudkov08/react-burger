import React from "react";
import PropTypes from 'prop-types';
import ModalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return <div className={ModalOverlayStyles.overlay} onClick={props.close} > </div>
}

ModalOverlay.propTypes = {
  close: PropTypes.func,
}

export default ModalOverlay;
