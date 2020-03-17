import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>

            </div>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" like="15"/>
            <Post message="It's my first program." like="20"/>
        </div>
    </div>
}

export default MyPosts;