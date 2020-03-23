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
                {id: 6, name: "Victor"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "Hello"},
                {id: 4, message: "How are you?"},
                {id: 5, message: "Yes!!!"},
                {id: 6, message: "Victor is my teacher"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 5,
            message: store._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;

window.store = store;