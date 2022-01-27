import {useReducer} from 'react';

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}
        default:
            throw new Error('MyError')
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
    return (
        <div>
            <div>{state.count1}</div>
            <div>{state.count1_1}</div>
            <button onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
            <hr/>
            <div>{state.count2}</div>
            <div>{state.count2_2}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset2', payload: 5})}>RESET</button>
            <hr/>
            <div>{state.count3}</div>
            <div>{state.count3_3}</div>
            <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset3', payload: 3})}>RESET</button>
        </div>
    );
};

export default App;