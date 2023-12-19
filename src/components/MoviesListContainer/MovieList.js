import React, { useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    const [incrementIndex, setIncrementIndex] = useState();
    console.log(movies);

    const handleNext = (idx) => {
        setIncrementIndex(idx + 1);
    }

    return (
        <div className="flex overflow-x-scroll overflow-y-hidden px-5 ml-5 mr-5 ">
            <div>
                <h1 className="text-3xl mt-10 mr-2 mb-2 ml-2 p-2">{ title }</h1>
                <div className="flex">
                    { movies &&  movies.map((movie, idx) => (
                        idx === 7 ?
                            <div key={movie.id}>
                                <img className="w-7 h-7 absolute flex mt-44 ml-36 bg-black" src="/slider.png" onClick={() => handleNext(idx)}/>
                                <MovieCard key={ movie.id } posterPath={ movie.poster_path } />
                            </div> :
                            <MovieCard key={ movie.id } posterPath={ movie.poster_path } />
                    )) }
                    {/* <div className=""> */ }

                    {/* </div> */ }

                </div>

            </div>


        </div>
    )
}

export default MovieList
