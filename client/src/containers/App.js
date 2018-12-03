import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Home from '../components/Home';
import SearchTweets from '../components/SearchTweets';
import withAuthentication from '../containers/withAuthentication';
import Footer1 from '../components/Footer1';
//import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            cur_user_uid: ''
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/dashboard" component={withAuthentication(Dashboard)} />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={withAuthentication(Home)} />
                        <Route path="/searchtweets" component={SearchTweets} />

                    </Switch>
                </Router>
                <Footer1/>
            </div>
        );
    }
}

export default App;