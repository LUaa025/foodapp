import React from 'react';
import classes from './Input.module.css';

/** React.forward  : damit wir in der Lage Ref in Customer Component(Input.js) anwenden zu können */

const Input = React.forwardRef(({input , label} , ref)=>{
  return (
    <div className={classes.input}>
        <label htmlFor={input.id} >{label}</label>
        <input ref={ref} id={input.id} {...input} />
    </div>
  );
});

export default Input
