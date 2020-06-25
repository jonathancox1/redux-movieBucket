import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import getDetails from './api/Details';
import SaveMovie from './buttons/SaveMovie';
import DeleteMovie from './buttons/DeleteMovie';

export default function DetailsBar({ movie }) {
    const [data, setData] = useState({})
    const [itemToDisplay, setItem] = useState('')
    const [hidden, setHidden] = useState(true)
    const mainList = useSelector(state => state.mainList)
    const movies = useSelector(state => state.movies)

    useEffect(() => {
        getDetails(movie.imdbID)
            .then((result) => {
                console.log(result)
                if (result != undefined) {
                    setData(result);
                } else {
                    console.log('error')
                }
            })
    }, [])

    function toggle(val) {
        setItem(val);
        setHidden(false)
    }

    console.log('movies')
    console.log(movies)

    return (
        <div>
            <ul className="list-group list-group-horizontal">
                {movies.findIndex((item) => item.imdbID === movie.imdbID) === -1
                    ? <SaveMovie data={movie} />
                    : <DeleteMovie data={movie} />}
                {/* {mainList ? <SaveMovie data={movie} /> : <DeleteMovie data={movie} />} */}
                <button onClick={() => toggle(data.Plot)} className="text-center list-group-item text-center list-group-item-light list-group-item-action">Plot</button>
                <button onClick={() => toggle(data.Year)} className="text-center list-group-item text-center list-group-item-light list-group-item-action">Year</button>
                <button onClick={() => toggle(data.Actors)} className="text-center list-group-item text-center list-group-item-light list-group-item-action">Actors</button>
                <button onClick={() => toggle(data.Awards)} className="text-center list-group-item text-center list-group-item-light list-group-item-action">Awards</button>
            </ul>
            <br />
            <div>
                {!hidden && itemToDisplay}
            </div>
        </div>
    )
}

