import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                <Post message='hi, my name stanislav' like='10'/>
                <Post message="hi, my name helen" like='20'/>
                <Post message="hi, my name baks" like='220'/>
            </div>
        </div>
    )
}

export default MyPosts;