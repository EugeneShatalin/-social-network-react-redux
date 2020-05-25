import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' //Route компонета контролирующая состояние строки URL при совпадении
                    // адреса отрисовывает нужную компоненту без перезагрузки всей страницы
                       render={() => <DialogsContainer/>}
                    //метод render используеться для вызова анонимной функции,
                    // которая отрисовывает компоненту, это для передачи props
                />
                <Route path='/profile/:userId?' //:userId? параметр url
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/login'
                       render={() => <LoginPage />}/>
            </div>
        </div>
    )
}
export default App;