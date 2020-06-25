import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveMovie } from '../../redux/actions/actions'

export default function SaveMovie({ data }) {
    const dispatch = useDispatch();

    function saveItem() {
        dispatch(saveMovie(data))
    }

    return (
        <>
            <button onClick={saveItem} className="text-center list-group-item list-group-item-action">Save</button>
        </>
    )
}
