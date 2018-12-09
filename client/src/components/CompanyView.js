// Author: Tahsin Hossain, Raghav Gupta;
import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

import { auth } from '../firebase';
import {host_url} from "./Login";

class CompanyView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            companyVacant: true,
            user_uid: auth.getAuth().currentUser.uid
        };

        console.log(this.state.user_uid);

        this.handleChange = this.handleChange.bind(this);
        this.submitNewCompany = this.submitNewCompany.bind(this);
    }

    handleChange(event) {
        this.setState({companyName: event.target.value});
    }

    submitNewCompany(event) {

        console.log('Company name: ' + this.state.companyName);

        let data = {
            "company": this.state.companyName,
            "access_level": "0"
        };

        axios.put(host_url + `/user/${this.state.user_uid}`, data)
            .then( res => {
                if(res.status === 200) {
                    console.log(res.data);
                    alert(`${this.state.companyName} company created successfully`);
                } else {
                    console.log('Company was not created');
                }
            })
            .catch( error => {
                console.log('Company creation error: ' + error.toString());
            });

        event.preventDefault();

    }

    // checkIfCompanyExists() {
    //     axios.get(host_url + `/user/${this.state.user_uid}`)
    //         .then( res => {
    //             if(res.status === 200) {
    //                 let company = res.data['0']['company']
    //                 if( company === null || res)
    //             }
    //         })
    // }

    render() {
        return (
            <form onSubmit={this.submitNewCompany}>
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

                            <input type="text" value={this.state.companyName} onChange={this.handleChange} />

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
                                Send your UID to the company manager
                            </label>
                        </div>
                    </div>

                </div>
            </form>
        );
    }
}

export default CompanyView;