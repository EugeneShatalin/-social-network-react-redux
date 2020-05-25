import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
    }
};
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
//connect функция из react-redux, которая создает контейнеруную компаненту для
// передачи и получения данных из store через контекст созданный в index.js с
// помощью <Provider store={store}>

export default MyPostsContainer;