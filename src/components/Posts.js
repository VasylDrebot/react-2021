import Post from "../components/Post";
import {useEffect, useState} from 'react';
import "../App.css";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    setPosts(value);
                });
    }, [])
    return (
        <div className={'item2'}>
            {
                posts.map(value => <Post key = {value.id} userId = {value.userId} id = {value.id}
                title = {value.title} body = {value.body}
                />)
            }
        </div>
    );
};

export default Posts;