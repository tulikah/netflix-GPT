import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../../redux/movieSlice';


const VideoBackground = ({ id }) => {
    const trailerInfo = useSelector(store => store.movies?.trailer);
    const dispatch = useDispatch();


    const getVideo = async () => {
        const video = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos', API_OPTIONS);
        const res = await video.json();
        console.log('videos', res);
        // const json = await res?.results;
        const filteredData = res.results.filter((video) => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : res.results[0];
        console.log('trailer', trailer);
        dispatch(addTrailer(trailer));
        // if(!trailerInfo) return null;
        console.log('trailer info', trailerInfo);
        
    }

    useEffect(() => {
        getVideo()
    }, [])

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + trailerInfo?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
