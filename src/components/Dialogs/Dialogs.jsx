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
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Vanya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Tanyi"},
        {id: 6, name: "Victor"}
    ];


    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Yes!!!"},
        {id: 6, message: "Victor is my teacher"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
        </div>
    )
};
export default Dialogs;