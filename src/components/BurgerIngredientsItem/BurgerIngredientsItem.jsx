import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredientsItemStyles from "./BurgerIngredientsItem.module.css";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredientsItem extends React.Component {
  render() {
    return (
      <li className={BurgerIngredientsItemStyles.listItem}>
        <div style={{textAlign: 'center'}}>
          <img className="mb-1" src={this.props.image} alt={this.props.name} />
          <Counter count={1} size="default" />
          <div className={`${BurgerIngredientsItemStyles.imgCaption} mb-1`}>
            <span className="text text_type_digits-default mr-2">{this.props.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <span className="text text_type_main-default">{this.props.name}</span>
        </div>
      </li>
    ); 
  }
}

BurgerIngredientsItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerIngredientsItem;
