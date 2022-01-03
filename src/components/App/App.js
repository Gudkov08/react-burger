import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from "../OrderDetails/OrderDetails"
import IngredientDetails from "../IngredientDetails/IngredientDetails"


function App() {

  /*  НАЧАЛЬНОЕ СОСТОЯНИЕ ПРИЛОЖЕНИЯ */
  //получение данных с сервера
  const [data, setData] = useState([]);

  //сортировка массива данных с сервера
  const [buns, setBuns] = useState([]);
  const [mains, setMains] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [selectedBun, setSelectedBun] = useState([]);
  const [notBuns, setNotBuns] = useState([]);

  //открытие и закрытие модальных окон
  const [isOpen, setIsOpen] = useState(false);

  //устанавливаем вариант модалки
  const [modalVariant, setModalVariant] = useState({});


  /*  УСТАНОВКА СЕТОВ */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setModal = (variant, id) => {
    setModalVariant({
      variant: variant,
      id: id,
    });
  };
  const showModal = (variant, id) => {
    openModal();
    setModal(variant, id);
  };

  /*  ИСПОЛЬЗУЕМ useEffect */
  //получение данных с сервера
  useEffect(() => {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return Promise.reject(`Ошибка: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  //сортировка массива данных с сервера
  useEffect(() => {
    setBuns(data.filter((item) => item.type === "bun"));
    setMains(data.filter((item) => item.type === "main"));
    setSauces(data.filter((item) => item.type === "sauce"));
    setSelectedBun(
      data.filter((item) => item.name === "Краторная булка N-200i")
    );
    setNotBuns(data.filter((item) => item.type !== "bun"));
  }, [data]);

  //закрытие модалки по клавише ESC
  useEffect(() => {
    const closeKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", closeKey);
    return () => window.removeEventListener("keydown", closeKey);
  }, []);

 
  /*  ОТРИСОВКА ПРИЛОЖЕНИЯ */
  return (
    <>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients
          buns={buns}
          mains={mains}
          sauces={sauces}
          showModal={showModal}
        />
        <BurgerConstructor
          selectedBun={selectedBun}
          notBuns={notBuns}
          showModal={showModal}
        />
      </main>
      <Modal open={isOpen} close={closeModal}>
        {modalVariant.variant === "orderButton" && <OrderDetails />}
        {modalVariant.variant === "ingredient" && (
          <IngredientDetails id={modalVariant.id} data={data} />
        )}
      </Modal>
    </>
  );
}

export default App;
