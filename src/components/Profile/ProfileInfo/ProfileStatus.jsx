import React from 'react';



class ProfileStatus extends React.Component {
    state = {
        editMode: false, //наличие фокуса на статусе
        status: this.props.status //установка локального статуса из пропсов (с сервера)
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => { //после окончания ввода статуса и потери фокуса на инпуте,
                                // отправка на сервак локального статуса
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => { //обновляем локально хранящийся статус при вводе с клавиатуры
        this.setState({
            status: e.currentTarget.value
        })
    }

    //componentDidUpdate метод жизненого цикла классовой компоненты, который уведомляет ее о каждом изминении
    //пропсов и стейта, имеет параметры prevProps - предыдущие пропсы, prevState - предыдущий стейт
    componentDidUpdate(prevProps, prevState) {
        //сравниваем в условном операторе предыдущий статус и текущий статус в пропсах
        //при их различии перерисовка компоненты
        //обязательно сравнивать в условном операторе для избежания зацикливания вызова componentDidUpdate
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    };

    render() {
        return (
            <div>
                {/*при editMode = false отрисуем span*/}
                {!this.state.editMode &&
                <div>
                    {/*onDoubleClick активация фокуса на статусе при двойном клике*/}
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>
                }
               {/*при editMode = true отрисуем input*/}
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           onBlur={this.deactivateEditMode} //выполниться при потере фокуса
                           autoFocus={true}
                           onChange={this.onStatusChange} //выполниться при потере фокусавводе с клавиатуры
                    />
                </div>}

            </div>
        )
    }
}

export default ProfileStatus;