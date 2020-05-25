import {authAPI} from "../api/api";
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
                ...action.data,
                isAuth: true
                    };
        default:
            return state;
    }
};

//функции колбеки экшен криэйторы (action creat) для правильной передаци данных из места их вызова в редьюсеры
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;