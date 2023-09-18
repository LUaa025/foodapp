import React, { Fragment } from 'react';
import tajineImg from'../../assets/tajine.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({showCartHandler,hideCartHandler}) => {
  return (
<Fragment>      
    <header className={classes.header}>
        <h1>Food4You</h1>
        <HeaderCartButton showCartHandler={showCartHandler}/>
    </header>
    <div className={classes['main-image']}>
        <img src={tajineImg} />
    </div>
    </Fragment>
  )
}

export default Header
