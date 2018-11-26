// Author: Tahsin Hossain, Raghav Gupta;
import React, { Component } from 'react';
import './Home.css';
import {get_uid} from "./Login";


class CompanyView extends Component {
    constructor(props) {
        super(props);

        const uid = get_uid();

        this.state = {
            value: '',
            user_uid: uid
        };


        console.log(this.state.user_uid);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('test alert value: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div id="com">
                    <div id="create">
                        <div id="boxborder">
                            <div> <label>
                                Create Company
                            </label>
                            </div>
                        </div>

                        <div id="boxborder">
                            <label>
                                Company Name:
                            </label>

                            <input type="text" value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div id="boxborder">

                            <input type="submit" value="Submit" />
                        </div>
                    </div>


                    <div id="join">
                        <div id="boxborder">
                            <p>Join Company</p>
                        </div>

                        <div id="boxborder">
                            <p>Your UID: </p>
                            <label>
                                {this.state.user_uid}
                            </label>
                        </div>

                        <div id="boxborder">
                            <label>
                                Send your UID to the company anager
                            </label>
                        </div>
                    </div>

                </div>
            </form>
        );
    }
}

export default CompanyView;