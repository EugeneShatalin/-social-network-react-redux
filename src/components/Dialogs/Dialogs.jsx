import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Vanya" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Misha" id="4"/>
                <DialogItem name="Tanyi" id="5"/>
                <DialogItem name="Victor" id="6"/>
            </div>
            <div className={s.massages}>
                <Message message="hi"/>
                <Message message="hi"/>
                <Message message="hi"/>
                <Message message="hi"/>
                <Message message="hi"/>
            </div>
        </div>
    )
};
export default Dialogs;