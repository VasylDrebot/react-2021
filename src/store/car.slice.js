import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from '../services';

const initialState = {
    cars: [],
    status: null,
    error: null
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data:newCar}))
        }catch (e) {
            console.log(e)
        }
    }
)


export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e);
        }
    }
)



const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {

        }
    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer;