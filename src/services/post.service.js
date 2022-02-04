import {axiosService} from '../services/axios.service.placeholder';
import {urls1} from '../constants/urlsPlaceholder';

export const postService = {
    getAll:()=>axiosService.get(urls1.posts).then(value => value.data)
}