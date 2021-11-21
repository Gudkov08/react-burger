import React from 'react';
import AppStyles from "./App.module.css";

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <>
      <AppHeader  />
      <main className={AppStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor  />
      </main>
    </>
  );
}

export default App;
