import React from 'react';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>;
    }
};

//функция возвращающая объект из необходиммых данных из state, находящихся в store
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

//connect функция из react-redux, которая создает контейнеруную компаненту для
// передачи и получения данных из store через контекст созданный в index.js с
// помощью <Provider store={store}>
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);