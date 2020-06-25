import React, { Component } from 'react'
import SaveMovie from './buttons/SaveMovie';
import DetailsBar from './DetailsBar';

export default class MovieCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    render() {
        const { data, button } = this.props
        return (
            <div className="card my-3 p-2 shadow" style={{ maxWidth: '70vw' }}>
                <div className="row">
                    <div className="col-3 mx-auto">
                        <img src={data.Poster} className="img-fluid" style={{ maxWidth: "100%" }}></img>
                    </div>
                    <div className="col-8 mx-auto text-center">
                        <h2>{data.Title}</h2>
                        <DetailsBar movie={data} />
                    </div>
                </div>
            </div>
        )
    }
}

