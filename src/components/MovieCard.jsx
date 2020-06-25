import React, { Component } from 'react'
import SaveMovie from './buttons/SaveMovie';
import DetailsBar from './DetailsBar';

export default function MovieCard(props) {
    return (
        <div className="card my-3 p-2 shadow bg-light" style={{ maxWidth: '70vw' }}>
            <div className="row">
                <div className="col-3 mx-auto">
                    <img src={props.data.Poster} className="img-fluid" style={{ maxWidth: "100%" }}></img>
                </div>
                <div className="col-8 mx-auto text-center">
                    <h2>{props.data.Title}</h2>
                    <DetailsBar movie={props.data} />
                </div>
            </div>
        </div>
    )
}


