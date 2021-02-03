import React, { Component } from 'react';
import LogIn from './LogIn';
import Signup from './Signup';

export class LoginSignup extends Component {

    state = {
        mode:"signup"
    }

    



    render() {
        return (
            <div>
               
                <Signup/>
            </div>
        )
    }
}

export default LoginSignup;
