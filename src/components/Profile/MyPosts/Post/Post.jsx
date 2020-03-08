import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt=""/>
        {props.message}
        <div>
            Like {props.like}
        </div>
    </div>
}
export default Post;