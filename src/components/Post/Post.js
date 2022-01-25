import React from 'react';
import {Link} from "react-router-dom";

import './Post.css';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={'posts'}>
            <div>{id}) {title}
                <Link to={id.toString()} state={post}>
                    <button>PostsDetails</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;