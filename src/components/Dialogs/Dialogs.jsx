import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Yevgeniy
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Anton
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>hi</div>
                <div className={s.message}>hi</div>
            </div>
        </div>
    )
};
export default Dialogs;