import {axiosService} from '../services/axios.service.placeholder';
import {urls1} from '../constants/urlsPlaceholder';

export const commentService = {
    getAll:()=>axiosService.get(urls1.comments).then(value => value.data)
}