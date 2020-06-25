import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import { switchList } from '../redux/actions/actions';

export default function MainList() {
    const [movies, setMovies] = useState([])
    const [list, setList] = useState('main');
    const moviesRedux = useSelector(state => state.movies)
    const mainList = useSelector(state => state.mainList)
    const dispatch = useDispatch();

    let arrayToMap = [];
    let link = '';

    function searchData(data) {
        setMovies(data);
    }

    function changeList() {
        dispatch(switchList());

    }

    useEffect(() => {
        if (mainList) {
            setList('redux')
        } else {
            setList('main');
        }
    }, [])

    if (mainList) {
        arrayToMap = movies;
        link = 'Saved List'
    } else {
        arrayToMap = moviesRedux;
        link = 'Go Back'
    }

    return (
        <div className="row mx-auto">
            <div className="col-8 mx-auto flex-wrap text-center">
                <Header />
                {mainList && <SearchBar movies={searchData} />}
                {mainList
                    ? <Link to="/myList" onClick={changeList}>Saved List</Link>
                    : <Link to="/" onClick={changeList}>Go Back</Link>}
                {arrayToMap.map((movie) => {
                    return (
                        <MovieCard key={movie.imdbID} data={movie} style={{ width: "500px" }}></MovieCard>
                    )
                })}
            </div>
        </div>
    )
}
