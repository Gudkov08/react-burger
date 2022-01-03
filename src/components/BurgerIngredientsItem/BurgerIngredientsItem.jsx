import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredientsItemStyles from "./BurgerIngredientsItem.module.css";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredientsItem(props) {
  return (
    <li className={BurgerIngredientsItemStyles.listItem} onClick={() => props.showModal('ingredient', props.id)}>
      <div style={{textAlign: 'center'}}>
        <img className="mb-1" src={props.image} alt={props.name} />
        <Counter count={1} size="default" />
        <div className={`${BurgerIngredientsItemStyles.imgCaption} mb-1`}>
          <span className="text text_type_digits-default mr-2">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className="text text_type_main-default">{props.name}</span>
      </div>
    </li>
  ); 
}

BurgerIngredientsItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerIngredientsItem;
