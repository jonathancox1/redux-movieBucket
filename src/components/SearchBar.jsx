import React from 'react'
import getData from './api/OMDB';

//
import { Input } from 'antd'
const { Search } = Input;
//


export default function SearchBar({ movies }) {

    function onSubmit(val) {
        getData(val)
            .then((result) => {
                console.log(result)
                if (result !== undefined) {
                    movies(result);
                } else {
                    console.log('error')
                }
            })
    }

    return (
        <div className="mx-auto" style={{ width: "50vw" }}>
            <Search size="large" onSearch={value => onSubmit(value)} />
        </div>
    )
}
