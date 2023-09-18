import React, { useRef, useState } from 'react';
import classes from './FoodItemForm.module.css';
import Input from '../../UI/Input';

const FoodItemForm = ({id, addToCartHandler}) => {

    const amountInputRef = useRef();

    const [amountisValid , setAmountIsValid] = useState(true);

    const  submitHandler = (e)=>{
        e.preventDefault();
        
        // always String
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length ===  0|| enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setAmountIsValid(false);
            return;
        }
        addToCartHandler(enteredAmountNumber);

    }

  return (
    <form className={classes.form}   onSubmit={submitHandler}>
      <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{id: 'amount_' + id , type:'number' , min :'1' , max: '5' , step : '1' , defaultValue: '1'}}/>
      <button >+ Add</button>
      {!amountisValid && <p>Bitte geben Sie richtige Zahl an (1-5)</p>}
    </form>
  )
}

export default FoodItemForm
