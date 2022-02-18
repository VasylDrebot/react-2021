import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {apiKey} from '../configs/urls';

export const movieService = {
    getAll:(page)=>axiosService.get(`${urls.movies}&page=${page}`).then(value => value.data),
    getAllGenres:()=>axiosService.get(urls.genres).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.oneMovie}/${id}?api_key=${apiKey}`).then(value => value.data),
    getMoviesByGenreId:(genre_id)=>axiosService.get(`${urls.movies}&with_genres=${genre_id}`)
}