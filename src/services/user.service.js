import {axiosService} from '../services/axios.service';
import {urls} from '../configs/urls';


export const userService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}