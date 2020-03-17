import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postDate = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first program.", likesCount: 24}
    ];
    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>

            </div>
        </div>
        <div className={s.posts}>
            <Post message={postDate[0].message} like={postDate[0].likesCount}/>
            <Post message={postDate[1].message} like={postDate[1].likesCount}/>
        </div>
    </div>
}

export default MyPosts;