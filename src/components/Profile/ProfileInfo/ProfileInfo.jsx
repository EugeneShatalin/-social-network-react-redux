import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img src="./img/cosmos.jpg" alt="cosmos"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;