import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import Navbar2 from '../components/Navbar2';
import 'bootstrap/dist/css/bootstrap.css';

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
                this.props.history.push('/dashboard');
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
