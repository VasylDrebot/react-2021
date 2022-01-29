import {useReducer} from 'react';

import './App.css';

const initialState = {
    cat: '',
    dog: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_input':
            let res = {...state,
            [action.key]: action.value}
            return res;
        default:
            return state;
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <form onSubmit={(e) => alert(
                JSON.stringify({
                    cat: state.cat,
                    dog: state.dog
                })
            )}>
                <label>Add cat:
                    <input
                        type="text"
                        name={'cat'}
                        value={state.cat}
                        onChange={(e) =>
                            dispatch({
                                type:'update_input',
                                value:e.target.value,
                                key:'cat',
                            })
                        }
                    />
                    <button>Save</button>
                </label>
                <label>Add dog:
                    <input
                        type="text"
                        name={'dog'}
                        value={state.dog}
                        onChange={(e) =>
                            dispatch({
                                type:'update_input',
                                value:e.target.value,
                                key:'dog',
                            })
                        }
                    />
                    <button>Save</button>
                </label>
            </form>
            <hr/>
        </div>
    );
};

export default App;