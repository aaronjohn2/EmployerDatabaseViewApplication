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
    componentDidMount() {
        auth.getAuth().onAuthStateChanged(user => {
            if (user) {
                console.log('User logged in as: ' + user.uid);
                axios.get(host_url + '/user/' + user.uid)
                    .then( res => {
                        if (res.status === 200) {
                            console.log(res.data, res.data['company']);
                            if (res.data['company'] != null && res.data['company'] != ''
                            && res.data['company'].length > 1) {
                                this.props.history.push('/home');
                            } else {
                                this.props.history.push('/dashboard');
                            }
                        } else {
                            let data = {
                                uid: user.uid,
                                email: user.email,
                                access_level: '',
                                company: ''
                            };
                            axios.post(host_url + '/data', data)
                                .then( (res) => {
                                    if(res.data._id) {
                                        console.log(res)
                                        // this.props.history.push('/dashboard');
                                    } else {
                                        alert('Couldnt register your account, try again');
                                    }
                                } )
                        }
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
                //<Link to="/about">About</Link>
            </Layout>
            </div>
        );
    }
}

export default Login;
