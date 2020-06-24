import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/actions/actions'

export default function DeleteMovie({ data }) {
    const dispatch = useDispatch();

    function deleteMovie() {
        // console.log(data.imdbID);
        dispatch(deleteItem(data))

    }

    return (
        <div>
            <small className="badge badge-pill badge-secondary"><button onClick={deleteMovie}>delete this movie</button></small>
        </div>
    )
}
