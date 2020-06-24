import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getData from './api/OMDB';
import { movieResults } from '../redux/actions/actions';


export default function SearchBar({ movies }) {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        getData(search)
            .then((result) => {
                console.log(result)
                if (result != undefined) {
                    // dispatch(movieResults(result));
                    movies(result);
                }
            })
    }

    return (
        <div>
            <form id="search-form" onSubmit={onSubmit}>
                <div className="input-group">
                    <input onChange={e => setSearch(e.target.value)} className="form-control search-bar" placeholder="Add a movie to your list" id="searchBar" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Search
                                Movies</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
