import { Button } from '@material-ui/core';
import React from 'react'
import classes from './Modal.module.css';

const Modal=(props)=>{
    return (
        <div className={classes.modal}>
            <header className={classes.modalHeader}><h1>{props.title}</h1></header>
            <section classname={classes.modalContent}>
                {props.children}
            </section>
            <section classname={classes.modalActions}>
                {props.canCancel && <Button className="btn">Cancel</Button>}
                {props.canConfirm && <Button className="btn">Confirm</Button>}
            </section>

        </div>
    )
}


export default Modal;
