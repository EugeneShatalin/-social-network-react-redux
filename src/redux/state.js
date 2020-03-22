let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first program.", likesCount: 24}
        ]
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
};

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
};

export default state;