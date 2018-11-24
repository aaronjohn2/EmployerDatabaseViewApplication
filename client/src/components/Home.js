// Author: Tahsin Hossain, Raghav Gupta;
import React, { Component } from 'react';
import Navbar1 from './Navbar1.js';
import EmployeeInfo from './EmployeeInfo.js';
import './Home.css';


class Home extends  Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <div>

            <Navbar1/>

                <div>
                    <form onSubmit={this.handleSubmit}>

                         <div id="addmanager">

                             <label>
                                  Add Manager :
                             </label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} size="50" />

                                <input type="submit" value="Submit" />

                         </div>



                      </form>
                </div>

                <div>
                    <EmployeeInfo/>
                </div>


            </div>

        );
    }
}




export default Home;
