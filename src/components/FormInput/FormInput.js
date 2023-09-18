import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './FormInput.module.css';
import useInput from '../../hooks/useInput';
import CartContext from '../../store/cart-context';

const FormInput = ({hideInputFormHandler }) => {
   
  const cartCtx = useContext(CartContext);
   
   const{
    value : enteredVorname,
    enteredValueIsValidate: enteredVornameIsValidate,
    hasError: enteredVornameHasError,
    enteredValueChangeHandler: enteredVornameChangeHandler,
    enteredValueBlurHandler: enteredVornameBlurHandler,
    resetValue: resetEnteredVorname,
    errMsg: enteredVornameErrMsg,
   } = useInput(wert => wert.trim() !== '' && wert.trim().length > 4);


   const{
    value : enteredNachname,
    enteredValueIsValidate: enteredNachnameIsValidate,
    hasError: enteredNachnameHasError,
    enteredValueChangeHandler: enteredNachnameChangeHandler,
    enteredValueBlurHandler: enteredNachnameBlurHandler,
    resetValue: resetEnteredNachname,
    errMsg: enteredNachnameErrMsg,
   } = useInput(wert => wert.trim() !== '' && wert.trim().length > 5);


   const{
    value : enteredEmail,
    enteredValueIsValidate: enteredEmailIsValidate,
    hasError: enteredEmailHasError,
    enteredValueChangeHandler: enteredEmailChangeHandler,
    enteredValueBlurHandler: enteredEmailBlurHandler,
    resetValue: resetEnteredEmail,
    errMsg: enteredEmailerrMsg,
   } = useInput(wert => wert.trim() !== '' && wert.includes('@'));



   function adresseValidate  (adresse)  {
    return  adresse.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/);
   }

   const {
    value: enteredAdresse,
    enteredValueIsValidate: enteredAdresseIsValidate,
    hasError: enteredAdresseHasError,
    enteredValueChangeHandler: enteredAdresseChangeHandler,
    enteredValueBlurHandler: enteredAdresseBlurHandler,
    resetValue: resetAdresse,
    errMsg: enteredAdresseErrMsg,
   } = useInput(wert => adresseValidate(wert));




   let formIsValid = false;

   if(enteredVornameIsValidate && enteredNachnameIsValidate && enteredEmailIsValidate && enteredAdresseIsValidate){
    formIsValid = true;
    
   }
   let collectedInfos = {
    vorname: enteredVorname,
    nachname: enteredNachname,
    email: enteredEmail,
    adresse: enteredAdresse,
 };
 const submitOrderHandlerUser = () => {
    fetch('https://react-http-a97c4-default-rtdb.firebaseio.com/testBestellung.json',{
      method: 'POST',
      body: JSON.stringify({
        user: collectedInfos,
        orders: cartCtx.items,
      })
    });
 }

  console.log(collectedInfos);


   const onSubmitHandler = (e) => {
    e.preventDefault();
    submitOrderHandlerUser();
    resetEnteredVorname();
    resetEnteredNachname();
    resetEnteredEmail();
    resetAdresse();
    hideInputFormHandler();
  }

  





   const vornameClasses = enteredVornameHasError ? classes['form-child-invalid'] : classes['form-child'];
   const nachnameClasses = enteredNachnameHasError ? classes['form-child-invalid'] : classes['form-child'];
   const emailClasses = enteredEmailHasError ?  classes['form-child-invalid'] : classes['form-child'];
   const adresseClasses = enteredAdresseHasError ? classes['form-child-invalid'] :classes['form-child'];
  return (
    <Modal>
    <form onSubmit={onSubmitHandler}>
      <div className={classes['form-input']}>
        <div className={vornameClasses}>
            <span className={classes.meldung}>{enteredVornameHasError && enteredVornameErrMsg('Vorname ist notwending')}</span>
            <label htmlFor="vorname">Vorname</label>
            <input 
            type='text'
            value={enteredVorname}
            onChange={enteredVornameChangeHandler}
            onBlur={enteredVornameBlurHandler}  
            />
        </div>
        <div className={nachnameClasses}>
        <span className={classes.meldung}>{enteredNachnameHasError && enteredNachnameErrMsg('Nachname ist notwending')}</span>
            <label htmlFor="nachname">Nachname</label>
            <input 
            type='text'
            value={enteredNachname}
            onChange={enteredNachnameChangeHandler}
            onBlur={enteredNachnameBlurHandler}
            />
        </div>
        <div className={emailClasses}>
        <span className={classes.meldung}>{enteredEmailHasError && enteredEmailerrMsg('Bitte geben Sie Ihre Email an')}</span>
            <label htmlFor="email">Email</label>
            <input 
            type='text'
            value={enteredEmail}
            onChange={enteredEmailChangeHandler}
            onBlur={enteredEmailBlurHandler}
            />
        </div>
        <div className={adresseClasses}>
        <span className={classes.meldung}>{enteredAdresseHasError && enteredAdresseErrMsg('Bitte geben Sie eine gültige Adresse an')}</span>
            <label htmlFor="email">Adresse</label>
            <input 
            type='text'
            value={enteredAdresse}
            onChange={enteredAdresseChangeHandler}
            onBlur={enteredAdresseBlurHandler}
            />
        </div>
      </div>
      <div className={classes.actions}>
        <button disabled={!formIsValid} type='submit'>Bezahlen</button>
        <button onClick={hideInputFormHandler}>Abbrechen</button>
      </div>
    </form>
    </Modal>
  )
}

export default FormInput
