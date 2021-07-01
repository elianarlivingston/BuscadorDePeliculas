import { useState } from "react";
import { MovieDetail, ParamsMovie, ParamsMovieDetail, ParamsMovieSearch, ResponseMovie } from '../types'
import MovieService from "../services/MovieService";

const movieService = new MovieService()

export default function useMovie() {
    const [ movies, setMovies ] = useState<ResponseMovie[] | []>([]);
    const [ movie, setMovie ] = useState<MovieDetail | {}>({});
    const [loading, setLoading] = useState(false)

    return {
        getPopularMovie: async (params: ParamsMovie) => {
            setLoading(true)
            const data: any = await movieService.getPopularMovie(params)
            setMovies(data)
            setLoading(false)
        },
        getTopRated: async (params: ParamsMovie) => {
            setLoading(true)
            const data: any = await movieService.getTopRated(params)
            setMovies(data)
            setLoading(false)
        },
        getNowPlaying: async (params: ParamsMovie) => {
            setLoading(true)
            const data: any = await movieService.getNowPlaying(params)
            setMovies(data)
            setLoading(false)
        },
        getDetailMovie: async (movieId: number, params: ParamsMovieDetail) => {
            setLoading(true)
            const data: MovieDetail = await movieService.getDetailMovie(movieId, params)
            setMovie(data)
            setLoading(false)
        }, 
        getSearchMovie: async (params: ParamsMovieSearch) => {
            setLoading(true)
            const data: any = await movieService.getSearchMovie(params)
            setMovies(data)
            setLoading(false)
        },
        movie,
        movies,
        loading
    }
}