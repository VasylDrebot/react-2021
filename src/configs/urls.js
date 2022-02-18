const baseURL = 'https://api.themoviedb.org/3'

export default baseURL

export const apiKey = '47ec079031073bacf3464ed8e8a14047'

export const urls = {
    movies:`/discover/movie?api_key=${apiKey}`,
    genres:`/genre/movie/list?api_key=${apiKey}`,
    oneMovie:`/movie`
}