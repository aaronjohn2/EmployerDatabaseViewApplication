import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import Navbar2 from '../components/Navbar2';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export const host_url = 'http://localhost:3001';

const buttonList = {
    google: {
        visible: true,
        provider: () => auth.googleOAuth()
    },
    github: {
        visible: true,
        provider: () => {
            const provider = auth.githubOAuth();
            provider.addScope('user');
            return provider;
        }
    },
    twitter: {
        visible: true,
        provider: () => auth.twitterOAuth()
    },
    facebook: {
        visible: true,
        provider: () => auth.facebookOAuth()
    }
};


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createNewUser: false,
            uid: ''
        }


    }

    componentDidMount() {
        auth.getAuth().onAuthStateChanged(user => {
            if (user) {

                this.setState({
                    uid: user.uid
                });

                console.log('User logged in as: ' + user.uid);

                axios.get(host_url + '/user/' + user.uid)
                    .then( res => {
                        console.log('Res status' + res.status);
                        if (res.status === 200) {
                            console.log(res.data);

                            let company = res.data['0']['company'];
                            console.log('Company is: ' + company);
                            if (company != null && company != ''
                            && company.length > 1) {
                                this.props.history.push('/home');
                            } else {
                                this.props.history.push('/dashboard');
                            }
                        } else {
                            console.log('ELSE');
                        }
                    })
                    .catch(error => {

                        this.setState({createNewUser: true });
                        console.log('User sign in error is: ' + error);

                        console.log('Creating user in db');
                        let data = {
                            "uid": user.uid,
                            "email": user.email,
                            "access_level": '',
                            "company": ''
                        };
                        axios.post(host_url + '/user', data)
                            .then( (res) => {
                                if(res.data._id) {
                                    console.log('Data to be posted' + res.data);
                                    this.props.history.push('/dashboard');
                                } else {
                                    alert('Couldnt register your account, try again');
                                }
                            } )
                            .catch( error => {
                                console.log('Error on user post' + error.toString())
                            })
                    })
                    .finally( final => {
                        console.log('Finally');
                    })
                }
        });
    }

    render() {
        return (

            <div>
                <Navbar2/>

            <Layout contentCenter={true}>

                <p>Signin using Google Single Sign-on</p>
                <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
                <Link to="/searchtweets"> click to view EDVA's user review tweets</Link>
            </Layout>
            </div>
        );
    }
}

export default Login;
