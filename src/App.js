import { Fragment, useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


import FormInput from './components/FormInput/FormInput';
import useShowModal from './hooks/useShowModal';
import useHttp from './hooks/useHttp';


import './App.css';

function App() {

  /*   without custom Hooks
  const [showCart , setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }

  const hideCartHandler = ()=>{
    setShowCart(false);
  }

  */


  /** with Custom HOOKS */
  const {
    isShowModal: isShowCart,
    showModalHandler: showCartHandler,
    hideModalHandler: hideCartHandler,
  } = useShowModal();

  const {
    isShowModal: isShowFormInput,
    showModalHandler: showInputFormHandler,
    hideModalHandler: hideInputFormHandler,
  }= useShowModal();


  const [foods , setFoods] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: fetchFoods,
  } = useHttp();

  const applyData = (foodObj) => {
    const  loadedFood = [];
    for(const key in foodObj){
      loadedFood.push({id: key , name: foodObj[key].name , description: foodObj[key].description , price: foodObj[key].price });
    }
    setFoods(loadedFood);
  }

  useEffect(()=>{
    fetchFoods({url:'https://react-http-a97c4-default-rtdb.firebaseio.com/foods.json'}, applyData);
  }, [])  /** Load Data multiple time that mean they change than we need Dependencies */
      /** But until now in this case we don't need it that mean [] not [fetchFoods] */


  
  return (
    <CartProvider>
      {isShowCart && <Cart 
      hideCartHandler={hideCartHandler}
      isShowFormInput={isShowFormInput}
      showInputFormHandler={showInputFormHandler}
      hideInputFormHandler={hideInputFormHandler}
      />}
      {isShowFormInput && <FormInput hideInputFormHandler={hideInputFormHandler} />}
      <Header showCartHandler ={showCartHandler} />
      <main>
        <p id='error'>{error}</p>
        {!isLoading && !error && <p id='loading'>Loading .......</p>}
       {isLoading && !error && <Food  foods={foods} isLoading={isLoading} error={error}/> }
      </main>
    </CartProvider>
  );
}

export default App;
