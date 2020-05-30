import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}> {/*handleSubmit прокидывает сюда контейнерная компонента
                                                reduxForm из библиотеки  redux-form,
                                                handleSubmit собирает в себе все данные из формы*/}
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]}
                       component={Input}/> {/*Field компонента из redux-form для отрисовки и обработки полей формы
                                                                                     обязательно указывать значение component и name*/}
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm); {/*reduxForm - HOC который образует контейнерную
                                                                    компоненту для работы с form*/}

const Login = (props) => {
    const onSubmit = (formData) => {}
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;

