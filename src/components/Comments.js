import Comment from "../components/Comment";
import {useEffect, useState} from 'react';
import "../App.css";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, [])
    return (
        <div className={'item3'}>
            {
                comments.map(value => <Comment key = {value.id} postId = {value.postId}
                id = {value.id} name = {value.name} email = {value.email} body = {value.body}
                />)
            }
        </div>
    );
};

export default Comments;