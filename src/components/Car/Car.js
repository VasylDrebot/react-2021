import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteCarThunk} from '../../store/car.slice';

const Car = ({car:{id, model, year, price}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{display:'flex', backgroundColor: 'gray', width:'100%'}}>
                <div>Id:{id}</div>
                <div>Model:{model}</div>
                <div>Year:{year}</div>
                <div>Price:{price}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>

    );
};

export {Car};