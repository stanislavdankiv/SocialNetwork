import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src='https://a.d-cd.net/5e2a6c8s-960.jpg'/></div>
            <div>ava + desc</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;