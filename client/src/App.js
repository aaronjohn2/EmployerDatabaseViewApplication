import React, { Component } from 'react';
import './App.css';
import LandingPage from './stateful/landing/landingpage'
class App extends Component {
    render() {
        return (
            <div className='app'>
                <LandingPage />
            </div>
        );
    }
}

export default App;