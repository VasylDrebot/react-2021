import {useReducer} from 'react';

import './App.css';

const reducer = (state, action) => {
        switch (action.type) {
            case 'cat':
                return {...state, cat:state.cat}
        }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''})
    const formHandler = (e) => {
        const data = {...state, [e.target.name]: e.target.valueO}
    }
    return (
        <div>
            <form>
                <label>Add cat:
                    <input type="text" name={'cat'} value={state.cat} onChange={formHandler}/>
                    <button onClick={()=>dispatch({type:'cat'})}>Save</button>
                </label>
                <label>Add dog:
                    <input type="text" name={'dog'} value={state.dog} onChange={formHandler}/>
                    <button onClick={()=>dispatch({type:'dog'})}>Save</button>
                </label>
            </form>
            <hr/>
        </div>
    );
};

export default App;