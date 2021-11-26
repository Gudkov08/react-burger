import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import ModalOverlay from '../ModalOverlay/ModalOverlay';


function App() {
  //получение данных с сервера
  const [data, setData] = useState([]);
  useEffect(() => {
      const url ='https://norma.nomoreparties.space/api/ingredients';

      const fetchData = async () => {
          try {
              const response = await fetch(url);
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
  const [bunKrator, setBunKrator] = useState([]);
  const [notBuns, setNotBuns] = useState([]);

  useEffect(() => {
    setBuns(data.filter((item) => item.type === 'bun'));
    setMains(data.filter((item) => item.type === 'main'));
    setSauces(data.filter((item) => item.type === 'sauce')); 
    setBunKrator(data.filter((item) => item.name === 'Краторная булка N-200i'));
    setNotBuns(data.filter((item) => item.type !== 'bun'));
  }, [data]);


  //логика модальных окон
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    const closeKey = (e) => {
      if(e.key === 'Escape') {
        setModal(false)
      }
    }
    window.addEventListener('keydown', closeKey)
  return () => window.removeEventListener('keydown', closeKey)
  },[])

  //отрисовка приложения
  return (
    <>
      <AppHeader  />
      <main className={AppStyles.main}>
        <BurgerIngredients buns={buns} mains={mains} sauces={sauces} open={openModal} />
        <BurgerConstructor bunKrator={bunKrator} notBuns={notBuns} open={openModal} />
      </main>
      <ModalOverlay show={modal} close={closeModal}/>
    </>
  );
}

export default App;
