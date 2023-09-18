import React from 'react';
import FoodItemForm from './FoodItemForm';
import classes from './FoodItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const FoodItem = ({id, name,description,price}) => {

    const myCartCtx = useContext(CartContext);

    const  preis = `€${price.toFixed(2)}`;


    const addToCartHandler = (amount) =>{
        myCartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price,
        });
    }

  return (
    <li className={classes.meal}> 
      <div><h3>{name}</h3>
        <div className={classes.description} >{description}</div>
        <div className={classes.price}>{preis}</div>
      </div>
      <div>
        <FoodItemForm  addToCartHandler={addToCartHandler}/>
      </div>
    </li>
  )
}

export default FoodItem
