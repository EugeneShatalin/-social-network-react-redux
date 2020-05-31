import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom"
import logo from '../../assets/image/logo.png';

const Header = (props) => {
    return <header className={classes.header}>
        <img src={logo} alt="logo"/>
        <div className={classes.loginBlock}>
            { props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;