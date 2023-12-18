import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const getMovie = useSelector((store) => store.movies?.nowPlayingMovies);
    if (getMovie === null) return;
    const mainmovie = getMovie[0];
    const { original_title, overview, id } = mainmovie
    console.log('getMovie', mainmovie);

    return (
        <div>
            <VideoTitle title={ original_title } desc={ overview } />
            <VideoBackground id={ id } />

        </div>
    )
}

export default MainContainer;
