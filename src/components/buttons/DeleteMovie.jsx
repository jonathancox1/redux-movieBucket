import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/actions/actions'

export default function DeleteMovie({ data }) {
    const dispatch = useDispatch();

    function deleteMovie() {
        dispatch(deleteItem(data))
    }

    return (
        <div>
            <button onClick={deleteMovie} className="text-center list-group-item list-group-item-action">Delete</button>
        </div>
    )
}
