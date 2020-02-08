import React from 'react';
import {auth} from '../../../firebase';
import GoogleAuthSignIn from './GoogleAuthSignIn';

// import GoogleAuthSignIn from './googleAuthSignIn';

export default class Login extends React.Component{
    render() {
        return (
            <GoogleAuthSignIn/>
        )
    }
}