import React, { Component } from 'react'
import SaveMovie from './buttons/SaveMovie';

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
                    <div className="col-8 pl-4">
                        <h2>{data.Title}</h2>
                        <small className="badge badge-pill badge-secondary">{data.Year}</small>
                        {button}
                    </div>
                    <div className="col-4 mx-auto">
                        <img src={data.Poster} style={{ width: 200 }}></img>
                    </div>
                </div>
            </div>
        )
    }
}

