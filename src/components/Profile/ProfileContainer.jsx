import React from 'react';
import Profile from "./Profile";
import connect from 'react-redux/lib/connect/connect';
import {getStatus, getUserprofile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;//присваевает переменной id пользователя
        // пришедший в props из параметров URL адреса
        if (!userId) {
            userId = 2;
        }
        this.props.getUserprofile(userId); //запрос профайла текущего пользователя,
                                            // ответ сохраняется в state, компонента перерисовывается
        this.props.getStatus(userId); //запрос статуса текущего пользователя, ответ сохраняется в state,
                                        // компонента перерисовывается
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}//прокидываем колбек для изминения статуса
        />
    }
};

//функция возвращающая объект из необходиммых данных из state, находящихся в store
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

//Функция compose служит для создания контейнерных компонент вокруг исходной при помощи HOC,
// которые выполняться с низу вверх, перечисляются через запятую
export default compose(
    connect(mapStateToProps, {getUserprofile, getStatus, updateStatus}),
    //connect функция из react-redux, которая создает контейнеруную компаненту для
    // передачи и получения данных из store через контекст созданный в index.js с
    // помощью <Provider store={store}>
    withRouter, //withRouter оборачивает компоненту в контейнерную и прокидывает в пропсы объекты,
    // в которых лежит информация для работы с URL
    withAuthRedirect //withAuthRedirect - HOC функция созданный нами для проверки авторизации и
    // блокировки доступа к оборачиваемой компоненте при отсутствии авторизации
)(ProfileContainer)