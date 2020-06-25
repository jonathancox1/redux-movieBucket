import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getData from './api/OMDB';
import { movieResults } from '../redux/actions/actions';

//
import { Input } from 'antd'
const { Search } = Input;
//


export default function SearchBar({ movies }) {

    function onSubmit(val) {
        getData(val)
            .then((result) => {
                console.log(result)
                if (result != undefined) {
                    movies(result);
                } else {
                    console.log('error')
                }
            })
    }

    return (
        <div className="mx-auto" style={{ width: "50vw" }}>
            <Search onSearch={value => onSubmit(value)} />
        </div>
    )
}
