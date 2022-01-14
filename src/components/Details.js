import React from 'react';
import {useEffect, useState} from "react";

import Detail from '../components/Detail';

const Details = () => {
    let [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(values => {
                let result = values.filter(value => value.launch_year !== '2020');
                setFlights(result);
            })
    }, []);
    return (
        <div>
            {
                flights.map(item => <Detail key={item.flight_number} props = {item}/>)
            }
        </div>
    );
};

export default Details;