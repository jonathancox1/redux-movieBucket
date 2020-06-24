import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import DeleteMovie from './buttons/DeleteMovie';


export default function SavedList() {
    const movies = useSelector(state => state.movies)

    return (
        <div>
            <div className="row mx-auto">
                <div className="col-9 mx-auto">
                    <h2 className="display-2 mx-auto" style={{ color: 'rgb(24, 73, 111)' }}><small
                        className="text-muted font-weight-light">redux</small><strong>Movie Bucket</strong></h2>
                    <Link to="/">Go Home</Link>
                    {movies.map((movie) => {
                        return (
                            <MovieCard data={movie} button={<DeleteMovie data={movie} />} key={movie.imdbID} style={{ width: "500px" }}></MovieCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
