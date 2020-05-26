//константы для определения типов (type) экшенов (action) для исключения ошибок при написании
const SEND_MESSAGE = 'SEND-MESSAGE';

//инициализация первичных данных для state
let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Vanya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Tanyi"},
        {id: 6, name: "Victor"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Yes!!!"},
        {id: 6, message: "Victor is my teacher"},
    ]
};

//блок по обработке экшенов (action) и пиходящих с ними данных - редьюсер
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: //добавляет сообщение в state при нажатии кнопки,
            // логика в компоненте Dialogs функция onSendMessageClick
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

//---------------
// блок функций (action creator) для пропроса в диспачи методов и свойств
//функции экшен криэйторы (action creat) для правильной передачи данных об action из места их вызова в редьюсеры

//для добавления сообщения в state
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;