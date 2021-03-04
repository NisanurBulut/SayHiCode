import { Button } from '@material-ui/core';
import React from 'react'
import classes from './Modal.module.css';

const Modal=(props)=>{
    return (
        <div className={classes.modal}>
            <header className={classes.modalHeader}><h1>{props.title}</h1></header>
            <section className={classes.modalContent}>
                {props.children}
            </section>
            <section className={classes.modalActions}>
                {props.canCancel && <Button onClick={props.onCancel} variant="outlined" color="secondary" className="btn">Cancel</Button>}
                {props.canConfirm && <Button onClick={props.onConfirm} variant="outlined" color="primary" className="btn">Confirm</Button>}
            </section>

        </div>
    )
}


export default Modal;
