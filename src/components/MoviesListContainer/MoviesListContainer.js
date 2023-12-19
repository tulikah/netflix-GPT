import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const MoviesListContainer = () => {
    const movies =  useSelector(store => store.movies?.nowPlayingMovies)
    return (
        <div className="bg-black text-white font-normal ">
            <div className="-mt-80 relative z-20">
            <MovieList title={'Now Playing'} movies={movies}/>
            <MovieList title={'Trending'} movies={movies}/>
            <MovieList title={'Sci-Fi'} movies={movies}/>
            <MovieList title={'Horror'} movies={movies}/>
            <MovieList title={'Continue Watching'} movies={movies}/>
            </div>

        </div>
    )
}

export default MoviesListContainer;