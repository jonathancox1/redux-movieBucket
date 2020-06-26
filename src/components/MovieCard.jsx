import React, { Component } from 'react'
import SaveMovie from './buttons/SaveMovie';
import DetailsBar from './DetailsBar';

export default function MovieCard(props) {
    return (
        <div className="card my-3 p-3 shadow bg-light" style={{ maxWidth: '70vw' }}>
            <div className="row">
                <div className="row-xs col-md-3 mx-auto my-auto">
                    <img src={props.data.Poster} className="" style={{ width: "100%" }}></img>
                </div>
                <div className="row-xs col-md-8 mx-auto text-center">
                    <h2 className="text-center my-auto">{props.data.Title}</h2>
                    <DetailsBar movie={props.data} />
                </div>
            </div>
        </div >
    )
}


