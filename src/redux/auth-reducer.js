import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"; //специальный экшенкриэйтор

//константы для определения типов (type) экшенов (action) для исключения ошибок при написании
const SET_USER_DATA = 'SET_USER_DATA';

//инициализация первичных данных для state
let initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
};

//блок по обработке экшенов (action) и пиходящих с ними данных
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload

                    };
        default:
            return state;
    }
};

//функции колбеки экшен криэйторы (action creat) для правильной передачи данных из места их вызова в редьюсеры
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth} });//сохранение данных авторезировашегося пользователя

//санка - проверка авторезирован ли пользователь с текущими данными в куках
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true)); //если авторезирован данные авторизации
                                                                    // заносятся в state store
        }
    });
}


//санка - авторизация пользователя
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe) //передача введеных данных на сервер
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch (getAuthUserData()); //вызов при удачной авторизации
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            //message переменная для показа ошибки, если с сервера прейдет не пустой массив ошибок
            //покажет первую, если пустой то "Some error"
            dispatch(stopSubmit("login", {_error: message}));
             //stopSubmit обрабодчик собылтия (action-create) реализованный в "redux-form"
            //для обработки ошибок формы
            //login - имя формы, {} - проблемное свойство формы
            //_error специальное свойтво stopSubmit, которое передает ошибку на всю форму
        }
    });
}

//санка - удаление авторизации (вылогинивание) пользователя
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch (setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;