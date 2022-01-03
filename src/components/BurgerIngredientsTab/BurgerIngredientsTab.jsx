import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientsTab = React.forwardRef ((props, ref) => {
  const [current, setCurrent] = React.useState('one')

  return (
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="Булки" active={current === 'one'} onClick={() => {setCurrent("one"); props.scroll(ref.bunsRef)} }>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'two'} onClick={() => {setCurrent("two"); props.scroll(ref.saucesRef)} } >
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'three'} onClick={() => {setCurrent("three"); props.scroll(ref.mainsRef)} }>
          Начинки
        </Tab>
      </div>
  )
});

BurgerIngredientsTab.propTypes = {
  scroll: PropTypes.func.isRequired,
}

export default BurgerIngredientsTab;
