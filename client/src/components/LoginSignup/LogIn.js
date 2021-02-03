import React, { Component } from 'react';
import './LoginSignup.css'

export class LogIn extends Component {
    render() {
        return (
                     <div className="login-form">
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                   
                        <h2 className="active"> Sign In </h2>
                        
                        <form>
                        <input type="text" id="login" className="fadeIn second login-input-text" name="login" placeholder="email"/>
                        <input type="text" id="password" className="fadeIn third login-input-text" name="login" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth login-input-submit" value="Log In"/>
                        </form>

                        

                    </div>
                    </div>
                    </div>
        )
    }
}

export default LogIn
