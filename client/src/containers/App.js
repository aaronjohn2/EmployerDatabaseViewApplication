import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Home from '../components/Home';
import withAuthentication from '../containers/withAuthentication';
import Navbar1 from '../components/Navbar1';
import Footer1 from '../components/Footer1';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar1/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/dashboard" component={withAuthentication(Dashboard)} />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </Router>
                <Footer1/>
            </div>
        );
    }
}

export default App;