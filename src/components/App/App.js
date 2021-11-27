import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import OrderDetails from "../OrderDetails/OrderDetails"
import IngredientDetails from "../IngredientDetails/IngredientDetails"


function App() {
  //получение данных с сервера
  const [data, setData] = useState([]);
  useEffect(() => {
      const url ='https://norma.nomoreparties.space/api/ingredients';

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
  const [buns, setBuns] = useState([]);
  const [mains, setMains] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [selectedBun, setSelectedBun] = useState([]);
  const [notBuns, setNotBuns] = useState([]);

  useEffect(() => {
    setBuns(data.filter((item) => item.type === 'bun'));
    setMains(data.filter((item) => item.type === 'main'));
    setSauces(data.filter((item) => item.type === 'sauce')); 
    setSelectedBun(data.filter((item) => item.name === 'Краторная булка N-200i'));
    setNotBuns(data.filter((item) => item.type !== 'bun'));
  }, [data]);

  //открытие и закрытие модальных окон
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const closeKey = (e) => {
      if(e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', closeKey)
  return () => window.removeEventListener('keydown', closeKey)
  },[])

  //устанавливаем вариант модалки
  const [modalVariant, setModalVariant] = useState({})
  const setModal = (variant, id) => {  
    setModalVariant ({
      variant: variant,
      id: id
    })
  }

  const showModal = (variant, id) => {
    openModal();
    setModal(variant, id);
  }

  const getModal = () => { // определяет какую модалку отрендерить на основе стейта modalVariant
    switch(modalVariant.variant) {
      case 'orderButton':
        return <OrderDetails />
    
      case 'ingredient':
        return <IngredientDetails id={modalVariant.id} data={data}/>
    
      default:
        return null
    }
  }

  //отрисовка приложения
  return (
    <>
      <AppHeader  />
      <main className={AppStyles.main}>
        <BurgerIngredients buns={buns} mains={mains} sauces={sauces} showModal={showModal} />
        <BurgerConstructor selectedBun={selectedBun} notBuns={notBuns} showModal={showModal} />
      </main>
      <ModalOverlay show={isOpen} close={closeModal} getModal={getModal}/>
    </>
  );
}

export default App;
