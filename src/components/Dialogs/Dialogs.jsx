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
    let dialogsDate = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Vanya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Tanyi"},
        {id: 6, name: "Victor"}
    ];

    let messageDate = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Yes!!!"},
        {id: 6, message: "Victor is my teacher"}
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={messageDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={messageDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={messageDate[2].id}/>
                <DialogItem name={dialogsDate[3].name} id={messageDate[3].id}/>
                <DialogItem name={dialogsDate[4].name} id={messageDate[4].id}/>
                <DialogItem name={dialogsDate[5].name} id={messageDate[5].id}/>
            </div>
            <div className={s.massages}>
                <Message message={messageDate[0].message}/>
                <Message message={messageDate[1].message}/>
                <Message message={messageDate[2].message}/>
                <Message message={messageDate[3].message}/>
                <Message message={messageDate[4].message}/>
                <Message message={messageDate[5].message}/>
            </div>
        </div>
    )
};
export default Dialogs;