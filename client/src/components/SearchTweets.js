// Author: Tahsin Hossain, Raghav Gupta;

import React, {Component} from 'react';
import Navbar2 from '../components/Navbar2';
import 'bootstrap/dist/css/bootstrap.css';

//import Layout from '../containers/Layout';

import axios from "axios";


class SearchTweets extends Component {
    componentDidMount(){
        axios.get('http://localhost:3001/data/twitter') //endpoint route
            .then(res => {
                if (res.status === 200) {
                    const tweets = res.data;
                    let newTweetsState = tweets.statuses;
                    this.setState({tweets: newTweetsState})

                } else {
                    alert('unable to fetch data, try again');
                }
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        }
    }



    render() {
        let tweets = this.state.tweets.map((tweet) =>
        <div>{tweet.text}<br/></div>)
        return (
            <div>

                <Navbar2/>

                <h2>Tweets:</h2>

                <div>

                    <ul>
                        <div> <li>{tweets}</li></div>
                    </ul>

                </div>

            </div>


        );
    }

}
export default SearchTweets;
