import React from "react";
import AppHeaderStyles from "./AppHeader.module.css";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${AppHeaderStyles.header} pb-4 pt-4`}>
        <div className={AppHeaderStyles.leftMenu}>
          <div className={`${AppHeaderStyles.headerItem} pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <p className={`${AppHeaderStyles.text} text text_type_main-default pl-2`}>Конструктор</p>
          </div>
          <div className={`${AppHeaderStyles.headerItem} pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <p className={`${AppHeaderStyles.text} text text_type_main-default pl-2`}>Лента заказов</p>
          </div>
        </div>
        <div className={AppHeaderStyles.logo}>
          <Logo />
        </div>
        <div className={`${AppHeaderStyles.headerItem} pl-5 pr-5`}>
          <ProfileIcon type="secondary" />
          <p className={`${AppHeaderStyles.text} text text_type_main-default pl-2`}>Личный кабинет</p>
        </div>
      </header>
    );
  }
}

export default AppHeader; 
