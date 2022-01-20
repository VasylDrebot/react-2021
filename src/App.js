import {useState} from "react";

import Users from './components/Users/Users';
import UserDetails from './components/UsersDetails/UserDetails';
import Posts from './components/Posts/Posts';
import {postService} from './services/post.service';
import './App.css';


const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([]);
    const getUser = (user) => {
        setUser(user);
    }
    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))
    }
    return (
        <div>
            <div className={'item'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;