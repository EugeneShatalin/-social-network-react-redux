import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>{/*handleSubmit прокидывает сюда контейнерная компонента
                                                reduxForm из библиотеки  redux-form,
                                                handleSubmit собирает в себе все данные из формы*/}
            <div>
                <Field component={Textarea}
                       validate = {[required, maxLength50]}
                       name="newMessageBody"
                       placeholder="Enter your message"/> {/*Field компонента из redux-form для отрисовки и обработки полей формы
                                                                                     обязательно указывать значение component и name*/}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm); {/*reduxForm - HOC который образует контейнерную
                                                                    компоненту для работы с form*/}