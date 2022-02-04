import {axiosService} from '../services/axios.service.placeholder';
import {urls1} from '../constants/urlsPlaceholder';

export const userService = {
    getAll:()=>axiosService.get(urls1.users).then(value => value.data)
}