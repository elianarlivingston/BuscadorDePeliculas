import { MovieDetail, ParamsMovie, ParamsMovieDetail, ParamsMovieSearch, ResponseMovie } from '../types'
import { http } from '../utils'

const API_URL = process.env.REACT_APP_API_URL

// const CONFIGURATION = `${API_URL}/configuration`

const SEARCH_MOVIE = `${API_URL}/search/movie`
const MOVIE = `${API_URL}/movie`

export default class MovieService {
    getPopularMovie(params: ParamsMovie): Promise<ResponseMovie> {
        return http.get(`${MOVIE}/popular`, { params })
    }
    getTopRated(params: ParamsMovie): Promise<ResponseMovie> {
        return http.get(`${MOVIE}/top_rated`, { params })
    }
    getNowPlaying(params: ParamsMovie): Promise<ResponseMovie> {
        return http.get(`${MOVIE}/now_playing`, { params })
    }
    getDetailMovie(movieId: number, params: ParamsMovieDetail): Promise<MovieDetail> {
        return http.get(`${MOVIE}/${movieId}`, { params })
    }
    getSearchMovie(params: ParamsMovieSearch): Promise<ResponseMovie> {
        return http.get(SEARCH_MOVIE, { params })
    }
}