import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>

            </div>
        </div>
        <div className={classes.posts}>
            <Post message="Hi, how are you?" like="15" />
            <Post message="It's my first program." like="20"/>
        </div>
    </div>
}

export default MyPosts;