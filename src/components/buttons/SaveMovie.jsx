import React from 'react'
import { useDispatch } from 'react-redux'
import { saveMovie } from '../../redux/actions/actions'
import 'antd/dist/antd.css';
import { Button } from 'antd';



export default function SaveMovie({ data }) {
    const dispatch = useDispatch();

    function saveItem() {
        dispatch(saveMovie(data))
    }

    return (
        <Button onClick={saveItem}></Button>
    )
}
