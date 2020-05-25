import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = () => { //фукнцция для запуска отрисовки всего приложения
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>    {/*Provider метод из react-redux для проброса
                                        store в контекст(доступен глобально для дочерних компонент)
                                        доступен через connect*/}
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(); //здесь запускается отрисовка приложения в самый первый раз


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

