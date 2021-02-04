import React, { Component } from 'react';
import './LoginSignup.css'

export class LogIn extends Component {
    render() {
        return (
                     <div className="login-form">
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                   
                        <h2 className="active"> Sign In </h2>
                        
                        <form onSubmit={this.props.handleSubmit}>
                        <input type="text" value={this.props.email} id="email" 
                          onChange={this.props.onChange}
                        className="fadeIn second login-input-text" name="email" placeholder="email"/>
                        <input type="password" value={this.props.password} id="password"
                          onChange={this.props.onChange}
                        className="fadeIn third login-input-text" name="email" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth login-input-submit" value="Log In"/>
                        </form>

                        

                    </div>
                    </div>
                    </div>
        )
    }
}

export default LogIn
