import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {Car} from '../../components/Car/Car';
import {getAllCars} from '../../store/car.slice';
import Form from '../../components/Form/Form';

const CarsPage = () => {
    const {cars, status, error} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
            <Form/>
        </div>
    );
};

export default CarsPage;