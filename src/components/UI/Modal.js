import React, { Fragment }  from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
    return <div className={classes.Backdrop}></div>
};

const ModalOverlay = ({children}) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
    </div>
}

/** Verbunden mit index.html */
const portalElement = document.getElementById('overlays');

const Modal = ({children}) => {
    

  return (
    <Fragment>
       {ReactDOM.createPortal(<Backdrop/> , portalElement)}
       {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal
