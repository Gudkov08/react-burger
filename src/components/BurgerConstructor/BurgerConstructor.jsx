import React from "react";
import PropTypes from 'prop-types';
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerConstructor = (props) => {

  const renderSelectedBunTop = props.selectedBun.map((item) => {
    return <ConstructorElement key={item._id} type="top" isLocked={true} text={`${item.name} (верх)`} price={item.price} thumbnail={item.image}/>
  });

  const renderSelectedBunBottom = props.selectedBun.map((item) => {
    return <ConstructorElement key={item._id} type="bottom" isLocked={true} text={`${item.name} (низ)`} price={item.price} thumbnail={item.image}/>
  });

  const renderNotBuns = props.notBuns.map((item) => {
    return (
      <div key={item._id} className={BurgerConstructorStyles.listItem}>
        <DragIcon type="primary" />
        <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
      </div>
    )
  });

  return (
    <section className="mt-25 mb-13">
        <div className={`${BurgerConstructorStyles.bun} mb-4 mr-4`}>
          {renderSelectedBunTop}
        </div>
        <ul className={`${BurgerConstructorStyles.list}`}>
          {renderNotBuns}
        </ul>
        <div className={`${BurgerConstructorStyles.bun} mt-4 mr-4`}>
          {renderSelectedBunBottom}
        </div>
      <div className={`${BurgerConstructorStyles.totalOrderWrapper} mt-10 pr-4`} >
        <span className="text text_type_digits-medium mr-2">610</span>
        <div className="mr-10">
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={() => props.showModal('orderButton')} type="primary" size="medium" key="buttonOrder">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  selectedBun: PropTypes.arrayOf(PropTypes.object).isRequired,
  notBuns: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
}

export default BurgerConstructor; 
