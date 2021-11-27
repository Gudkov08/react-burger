import React from "react";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import BurgerIngredientsTab from "../BurgerIngredientsTab/BurgerIngredientsTab";
import BurgerIngredientsItem from "../BurgerIngredientsItem/BurgerIngredientsItem";

function BurgerIngredients(props) {

  const renderBuns = props.buns.map((item) => {
    return <BurgerIngredientsItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} showModal={props.showModal} />
  });

  const renderMains = props.mains.map((item) => {
    return <BurgerIngredientsItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} showModal={props.showModal} />
  });

  const renderSauces = props.sauces.map((item) => {
    return <BurgerIngredientsItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} showModal={props.showModal} />
  });

  return (
    <section>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTab />
      <div className={BurgerIngredientsStyles.content}>
        <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6" >Булки</h2>
        <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`} >
          {renderBuns}
        </ul>
        <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6">Соусы</h2>
        <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`}>
          {renderMains}
        </ul>
        <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6">Начинки</h2>
        <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`}>
          {renderSauces}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients; 
