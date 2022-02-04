import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {createCar} from '../../store/car.slice';


const Form = () => {
    const {handleSubmit, reset, setValue, register} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
                <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>Year: <input type="text"  placeholder={'year'} {...register('year')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;