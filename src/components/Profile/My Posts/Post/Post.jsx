import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'/>

            <div>Message: {props.message}</div>
            <div>Like: {props.like}</div>


        </div>
    )
}

export default Post;