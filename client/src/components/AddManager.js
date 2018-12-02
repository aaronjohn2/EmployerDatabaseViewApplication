import React, { Component } from 'react';
import axios from 'axios';
import { auth } from '../firebase';

const host_url = 'http://localhost:3001';

class AddManager extends Component {

    constructor(props) {
        super(props);

        this.state = {

            cur_uuid: auth.getAuth().currentUser.uid,
            cur_user: [],
            new_user: []
        };

    }

    componentDidMount() {
        // this.setState({cur_user: );
        console.log(this.state.user_uid);
        // this.getCurUser();
    }

    getCurUser = () => {
        axios.get(host_url + '/user/' + this.state.cur_uuid)
            .then(res => {
                if(res.status === 200) {
                    const data = res.data;
                    this.setState({cur_user: data});
                    for ( let entry of data) {
                        console.log(entry);
                    }
                }
            })

    };

    addNewManager = (new_uid, data) => {
        axios.put(host_url + `/user/${new_uid}`, data)
            .then(res => {
                if (res.status === 200) {
                    alert('Manager added successfully!');
                }
            })

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div id="addmanager">

                    <label>
                        Add Manager :
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} size="50" />

                    <input type="submit" value="Submit" />

                </div>



            </form>
        );
    }
}

export default AddManager;