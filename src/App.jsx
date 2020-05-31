import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, withRouter} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
//connect функция из react-redux, которая создает контейнеруную компаненту для
// передачи и получения данных из store через контекст созданный в index.js с
// помощью <Provider store={store}>
//так как не нужны данные из state то первый парамметр connect делаем null