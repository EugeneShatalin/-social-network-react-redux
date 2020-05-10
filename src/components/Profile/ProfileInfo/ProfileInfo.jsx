import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return <div className={s.content}>
        <div>
            <img src={props.profile.photos.large}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;