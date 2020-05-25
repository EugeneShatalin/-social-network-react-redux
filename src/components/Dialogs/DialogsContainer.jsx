import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

//функция возвращающая объект из необходиммых данных из state, находящихся в store
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage //connect сама подключается к state и берет необходиммые данные
    }
};

//функция возвращающая объект из колбеков для контейнерной компоненты созданной connect
//в колбеки диспачаться креэйторы (creat) из ридьюсеров (reducer) для изиминения state
//dispatch это медот хранящийся в store и содержащий в себе все action из доступных редьюсеров
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};

//Функция compose служит для создания контейнерных компонент вокруг исходной при помощи HOC,
// которые выполняться с низу вверх, перечисляются через запятую
export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    //connect функция из react-redux, которая создает контейнеруную компаненту для
    // передачи и получения данных из store через контекст созданный в index.js с
    // помощью <Provider store={store}>
    withAuthRedirect // HOC созданный нами для проверки авторизации и
                    // блокировки доступа к оборачиваемой компоненте при отсутствии авторизации
)(Dialogs);

