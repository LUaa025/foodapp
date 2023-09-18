import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({name , price , amount , cartItemAddHandler ,cartItemRemoveHandler}) => {

    const preis = `€${price}`

  return (
    <li className={classes['cart-item']}>
    <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
            <span className={classes.price}>{preis}</span>
            <span className={classes.amount}>{amount}</span>
        </div>
    </div>
    <div className={classes.actions}>
        <button onClick={cartItemRemoveHandler}>-</button>
        <button onClick={cartItemAddHandler}>+</button>
    </div>
    </li>
  )
}

export default CartItem
