import React from 'react'
import { useDispatch } from 'react-redux'
import { saveMovie } from '../../redux/actions/actions'

export default function SaveMovie({ data }) {
    const dispatch = useDispatch();

    function saveItem() {
        dispatch(saveMovie(data))
    }

    return (
        <>
            <li onClick={saveItem} className="list-group-item">Save</li>

            {/* <small className="badge badge-pill badge-secondary"><button onClick={saveItem}>save this movie</button></small> */}
        </>
    )
}
