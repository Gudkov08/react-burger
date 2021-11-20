import React from "react";
import PropTypes from 'prop-types';
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "../../utils/data"

//ниже код только для верстки для 1й сдачи
const bunKrator = Ingredients.filter(item => item.name === 'Краторная булка N-200i');
const notBuns = Ingredients.filter(item => item.type !== 'bun');

class BurgerConstructor extends React.Component {
  render() {
    //ниже код только для верстки для 1й сдачи
    const renBunKratorTop = bunKrator.map((item, idx) => {
      return <ConstructorElement type="top" isLocked={true} text={item.name} price={item.price} thumbnail={item.image}/>
    });

    const renBunKratorBottom = bunKrator.map((item, idx) => {
      return <ConstructorElement type="bottom" isLocked={true} text={item.name} price={item.price} thumbnail={item.image}/>
    });

    const renNotBuns = notBuns.map((item, idx) => {
      return (
        <div className={BurgerConstructorStyles.listItem}>
          <DragIcon type="primary" />
          <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
        </div>
      )
    });

    return (
      <section className="mt-25 mb-13">
{/*         <ul className={BurgerConstructorStyles.list}> */}
          <div className={`${BurgerConstructorStyles.bun} mb-4 mr-4`}>
            {renBunKratorTop}
          </div>
          <ul className={`${BurgerConstructorStyles.list}`}>
            {renNotBuns}
          </ul>
          <div className={`${BurgerConstructorStyles.bun} mt-4 mr-4`}>
            {renBunKratorBottom}
          </div>
       {/*  </ul> */}
        <div className={`${BurgerConstructorStyles.totalOrderWrapper} mt-10 pr-4`} >
          <span className="text text_type_digits-medium mr-2">610</span>
          <div className="mr-10">
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}

ConstructorElement.propTypes = {
  thumbnail: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isLocked: PropTypes.bool,
  type: PropTypes.oneOf(['top', 'bottom']),
}

export default BurgerConstructor; 
