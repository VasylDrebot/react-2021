import './User.css';

const User = ({user, getUser}) => {
    const {id, name, username} = user;
    return (
        <div className={'item2'}>
            <div>{id} - {name} - {username}</div>
            <div><button onClick={()=>getUser(user)}>getDetails</button></div>
        </div>
    );
};

export default User;