import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientsTab = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }} className="mb-10">
      <Tab value="Булки" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export default BurgerIngredientsTab;
