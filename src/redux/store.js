import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first program.", likesCount: 24}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};





export default store;

window.store = store;