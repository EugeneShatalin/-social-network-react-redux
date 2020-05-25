import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'; //для обработки диспачей thunk
import {reducer as formReducer } from 'redux-form';

//для передачи всех reducers в store
//обьединяем их с помощью метода combineReducers из redux
//ветки называет по разделам как в проекте
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, /*импортируем из redux-form*/
});

//создаем store с помщью метода createStore из библиотеки redux,
// reducers - обьект редьюсеровб
// applyMiddleware(thunkMiddleware) - для обработки thunk
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;