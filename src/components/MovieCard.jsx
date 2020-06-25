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
                    <div className="col-8 pl-4 text-left">
                        <h2>{data.Title}</h2>
                        {button}
                        <DetailsBar movie={data} />
                    </div>
                    <div className="col-4 mx-auto">
                        <img src={data.Poster} style={{ width: 200 }}></img>
                    </div>
                </div>
            </div>
        )
    }
}

