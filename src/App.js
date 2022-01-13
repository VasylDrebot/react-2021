import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import "./App.css";

const App = () => {

    return (
        <div>
            <div className='item'>
                <Users/>
                <Posts/>
            </div>

            <Comments/>
        </div>

    );
};

export default App;