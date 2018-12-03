import React, { Component } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import {host_url} from "./Login";

class AddManager extends Component {

    constructor(props) {
        super(props);

        this.state = {

            cur_uuid: auth.getAuth().currentUser.uid,
            cur_user_company: '',
            new_user_access: '',
            new_user: ''
        };

        console.log('UID ' + this.state.cur_uuid);

        this.handleChange = this.handleChange.bind(this);
        this.getCurUser = this.getCurUser.bind(this);

    }

    componentDidMount() {
        // this.setState({cur_user: );

        // this.getCurUser();
    }

    getCurUser = (event) => {
        axios.get(host_url + '/user/' + this.state.cur_uuid)
            .then(res => {
                if(res.status === 200) {
                    const data = res.data;
                    // console.log(data);
                    this.setState({
                        cur_user_company: data['0']['company'],
                        new_user_access: (parseInt(data['0']['access_level']) + 1).toString()
                    });
                }
            })
            .finally( () => {
                this.addNewManager();
            });

        event.preventDefault()
    };



    addNewManager = () => {

        let data = {
            "company": this.state.cur_user_company,
            "access_level": this.state.new_user_access
        };

        console.log('New user uid: ' + this.state.new_user);
        axios.put(host_url + `/user/${this.state.new_user}`, data)
            .then(res => {
                if (res.status === 200) {
                    alert('Manager added successfully!');
                    console.log(res.data);
                }
            })

    };

    handleChange(event) {
        this.setState({new_user: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.getCurUser}>

                <div id="addmanager">

                    <label>
                        Add Manager :
                    </label>
                    <input type="text" value={this.state.companyName} onChange={this.handleChange} size="50" />

                    <input type="submit" value="Submit" />

                </div>



            </form>
        );
    }
}

export default AddManager;