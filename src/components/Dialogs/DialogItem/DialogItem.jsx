import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;//добавляет в URL id диалога

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink> {/*создаст ссылку на диалог с Именем*/}
    </div>
};

export default DialogItem;