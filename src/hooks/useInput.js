import {useState} from 'react';

const useInput = (inputValidate) => {
    const [enteredValue , setEnteredValue] = useState('');
    const [isTouched , setIsTouched] = useState(false);

    const enteredValueIsValidate = inputValidate(enteredValue);
    const hasError = !enteredValueIsValidate && isTouched


    const enteredValueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const enteredValueBlurHandler = (e)=> {
        setIsTouched(true);
    }

    const resetValue = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    const errMsg = (msg) =>{
        let error = <p id='meldung'>{msg}</p>
    return error;
    }

  return ({
        value: enteredValue,
        enteredValueIsValidate,
        hasError,
        enteredValueChangeHandler,
        enteredValueBlurHandler,
        resetValue,
        errMsg,
  })
}

export default useInput;
