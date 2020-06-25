import React, { useState, useEffect } from 'react'
import getDetails from './api/Details';
import SaveMovie from './buttons/SaveMovie';

export default function DetailsBar({ movie }) {
    const [data, setData] = useState({})
    const [itemToDisplay, setItem] = useState('')
    const [hidden, setHidden] = useState(true)

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

    return (
        <div>
            <ul className="list-group list-group-horizontal-sm">
                <button onClick={() => toggle(data.Plot)} className="list-group-item">Plot</button>
                <button onClick={() => toggle(data.Year)} className="list-group-item">Year</button>
                <button onClick={() => toggle(data.Actors)} className="list-group-item">Actors</button>
                <button onClick={() => toggle(data.Awards)} className="list-group-item">Awards</button>
            </ul>
            <br />
            {!hidden && itemToDisplay}
        </div>
    )
}
