import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer"; //специальный экшенкриэйтор

//константы для определения типов (type) экшенов (action) для исключения ошибок при написании
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

//инициализация первичных данных для state
let initialState = {
    initialized: false
};

//блок по обработке экшенов (action) и пиходящих с ними данных
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true

            };
        default:
            return state;
    }
};

//функции колбеки экшен криэйторы (action creat) для правильной передачи данных из места их вызова в редьюсеры
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});//сохранение данных авторезировашегося пользователя

//санка - проверка авторезирован ли пользователь с текущими данными в куках
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;