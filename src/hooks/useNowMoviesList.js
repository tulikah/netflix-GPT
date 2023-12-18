import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";


const useNowMoviesList = () => {

    const dispatch = useDispatch();
    const getMovieList = async () => {
        try {
            const list = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
            const res = await list.json();
            // console.log('res', res.results);
            dispatch(addNowPlayingMovies(res.results));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);
    
}

export default useNowMoviesList;