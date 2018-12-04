// Author: Tahsin Hossain, Raghav Gupta;
import React, { Component } from 'react';
import EmployeeInfo from './EmployeeInfo.js';
import './Home.css';
import Navbar1 from '../components/Navbar1';
import 'bootstrap/dist/css/bootstrap.css';
import AddManager from "./AddManager";

class Home extends  Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({companyName: event.target.companyName});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.companyName);
        event.preventDefault();
    }

    render() {
        return (

            <div>
                <Navbar1/>
                <div>
                    <AddManager/>
                </div>

                <div>
                    <EmployeeInfo/>
                </div>

            </div>

        );
    }
}

export default Home;
