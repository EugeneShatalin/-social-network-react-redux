import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Dialogs = (props) => {

    let state = props.dialogsPage; //помещаем в переменную часть стейта, которая храниться в разделе dialogsPage

    //с помощью map беребираем диалоги в стейте и отрисовываем на странице
    //передавая на каждом этапе через пропсы данные в компоненту DialogItem
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    //с помощью map беребираем сообщения в стейте и отрисовываем на странице
    //передавая на каждом этапе через пропсы данные в компоненту Message
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody; //переменная для хранения текущего сообщения вводимого пользователем

    //функциит для вызова колбека из props для передачи action в store
    //функция для добавления сообщения
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    //функция для обработки вводимых символов и их отправки в state
    let onNewMessageChange = (e) => {
        let body = e.target.value; //хранит в себе текущеее значенеи value, обновляется при каждом нажатии клавиатуры
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody} //значение постоянно береться из state при каждом нажатии
                                //onChange отработает при нажатие любой клавиши на клавиатуре
                              onChange={onNewMessageChange}
                              //placeholder сообщение по умолчанию
                              placeholder="Enter your message">
                    </textarea>
                </div>
                <div>
                   {/* onClick отработает при клике*/}
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
};
export default Dialogs;