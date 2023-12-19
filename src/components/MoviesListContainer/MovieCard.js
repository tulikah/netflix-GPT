import React from 'react'
import { CDN_URL } from '../../utils/constants'

const MovieCard = ({ posterPath}) => {
    return (
        <div className="w-60 h-50 p-2 rounded-lg">
            <img alt="movie-card" 
            src={CDN_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard
