import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "./../common/FormControls/FormsControls.module.css"


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}> {/*handleSubmit прокидывает сюда контейнерная компонента
                                                reduxForm из библиотеки  redux-form,
                                                handleSubmit собирает в себе все данные из формы*/}
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/> {/*Field компонента из redux-form для отрисовки и обработки полей формы
                                                                                     обязательно указывать значение component и name*/}
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       validate={[required]}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                ERROR
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm); {/*reduxForm - HOC который образует контейнерную
                                                                    компоненту для работы с form*/}

const Login = (props) => {
    const onSubmit = (formData) => { //formData массив данных, который прейдет из handleSubmit
        props.login(formData.email, formData.password, formData.rememberMe); //передаем данные в колбек функцию login
        //которая вызовит одноименную функцию-санку в auth-reducer для логонизации пользователя
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

export default connect(mapStateToProps, {login})(Login) ;

