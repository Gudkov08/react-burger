import React from "react";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import BurgerIngredientsTab from "../BurgerIngredientsTab/BurgerIngredientsTab";
import BurgerIngredientsItem from "../BurgerIngredientsItem/BurgerIngredientsItem";
import Ingredients from "../../utils/data"

const buns = Ingredients.filter(item => item.type === 'bun');
const mains = Ingredients.filter(item => item.type === 'main');
const sauces = Ingredients.filter(item => item.type === 'sauce');

class BurgerIngredients extends React.Component {
  render() {
    const renBuns = buns.map((item, idx) => {
      return <BurgerIngredientsItem name={item.name} price={item.price} image={item.image} />
    });

    const renMains = mains.map((item, idx) => {
      return <BurgerIngredientsItem name={item.name} price={item.price} image={item.image} />
    });

    const renSauces = sauces.map((item, idx) => {
      return <BurgerIngredientsItem name={item.name} price={item.price} image={item.image} />
    });


    return (
      <section>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
        <BurgerIngredientsTab />
        <div className={BurgerIngredientsStyles.content}>
          <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`}>
            {renBuns}
          </ul>
          <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`}>
            {renMains}
          </ul>
          <h2 style= {{textAlign: 'left'}} className="text text_type_main-medium mb-6">Начинки</h2>
          <ul className={`${BurgerIngredientsStyles.list} pl-4 pr-4 mb-10`}>
            {renSauces}
          </ul>
        </div>
      </section>
    );
  }
}

export default BurgerIngredients; 
