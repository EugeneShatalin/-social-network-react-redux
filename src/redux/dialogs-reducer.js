const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;