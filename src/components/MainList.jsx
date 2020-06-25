import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import SaveMovie from './buttons/SaveMovie'
import DeleteMovie from './buttons/DeleteMovie'
import { useEffect } from 'react'

export default function MainList() {
    const [movies, setMovies] = useState([])
    const [list, setList] = useState('main');
    const dispatch = useDispatch();
    const moviesRedux = useSelector(state => state.movies)

    let arrayToMap = [];
    let link = '';
    let TagName = ''

    function searchData(data) {
        setMovies(data);
    }

    function changeList() {

        if (list === 'main') {
            setList('redux')
        } else {
            setList('main');
        }
    }

    if (list === 'main') {
        arrayToMap = movies;
        link = 'Saved List'
        TagName = SaveMovie
    } else if (list === 'redux') {
        arrayToMap = moviesRedux;
        link = 'Go Back'
        TagName = DeleteMovie
    }

    return (
        <div className="row mx-auto">
            <div className="col-8 mx-auto text-center">
                <Header />
                {list === 'main' && <SearchBar movies={searchData} />}
                <Link onClick={changeList}>{link}</Link>
                {arrayToMap.map((movie) => {
                    return (
                        <MovieCard key={movie.imdbID} button={<TagName data={movie} />} data={movie} style={{ width: "500px" }}></MovieCard>
                    )
                })}
            </div>
        </div>
    )
}
