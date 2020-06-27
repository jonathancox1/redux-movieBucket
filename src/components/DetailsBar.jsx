import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getDetails from './api/Details';
import { saveMovie, deleteItem } from '../redux/actions/actions'
import 'antd/dist/antd.css';
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;


export default function DetailsBar({ movie }) {
    const [data, setData] = useState({})
    const [itemToDisplay, setItem] = useState('')
    const [hidden, setHidden] = useState(true)
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        getDetails(movie.imdbID)
            .then((result) => {
                console.log(result)
                if (result != undefined) {
                    setData(result);
                } else {
                    console.log('error')
                }
            })
    }, [])

    function saveItem() {
        dispatch(saveMovie(data))
    }

    function deleteMovie() {
        dispatch(deleteItem(data))
    }

    return (
        <div>
            <Tabs
                tabBarExtraContent={movies.findIndex((item) => item.imdbID === movie.imdbID) === -1
                    ? <Button type="primary" onClick={saveItem}>Save</Button>
                    : <Button onClick={deleteMovie}>Delete</Button>}
                defaultActiveKey="2"
            >
                <TabPane tab="Actors" key="1">
                    {data.Actors}
                </TabPane>
                <TabPane tab="Plot" key="2">
                    {data.Plot}
                </TabPane>
                <TabPane tab="Year" key="3">
                    {data.Year}
                </TabPane>
            </Tabs>
            <br />
            <div>
                {!hidden && itemToDisplay}
            </div>
        </div>
    )
}

