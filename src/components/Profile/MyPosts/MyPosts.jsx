import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <OnAddPostInProfile onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>{/*handleSubmit прокидывает сюда контейнерная компонента
                                                reduxForm из библиотеки  redux-form,
                                                handleSubmit собирает в себе все данные из формы*/}
        <div>
            <Field component={Textarea} name="newPostText"  validate={[required, maxLength10]}/> {/*Field компонента из redux-form для отрисовки и обработки полей формы
                                                                                     обязательно указывать значение component и name
                                                                                     validate - для передачи валидаторов формы */}
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
}

const OnAddPostInProfile = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm); {/*reduxForm - HOC который образует контейнерную
                                                                                        компоненту для работы с form*/}

export default MyPosts;