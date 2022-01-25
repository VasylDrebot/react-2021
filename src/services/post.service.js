import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll:()=>axiosService.get(urls.posts).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}