import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import useNowMoviesList from '../hooks/useNowMoviesList';
import MainContainer from './MainContainer/MainContainer';
import MoviesListContainer from './MoviesListContainer/MoviesListContainer';


const Browse = () => {

    //use custom hook to get the list of now playing movies
    useNowMoviesList();
    return (
        <div>
            <Header />
                <MainContainer />
                <MoviesListContainer />

        </div>
    )
}

export default Browse;
