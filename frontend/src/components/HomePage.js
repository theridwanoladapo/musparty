import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import JoinRoomPage from './JoinRoomPage'
import CreateRoomPage from './CreateRoomPage'
import Room from './Room'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<p>This is the home page.</p>} />
                    <Route path='/join' Component={JoinRoomPage} />
                    <Route path='/create' Component={CreateRoomPage} />
                    <Route path='/room/:roomCode' Component={Room} />
                </Routes>
            </Router>
        )
    }
}