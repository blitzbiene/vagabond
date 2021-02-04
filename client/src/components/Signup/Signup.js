import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div className="login-form">
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                   
                        <h2 className="active"> Sign Up </h2>
                        
                        <form>
                        <input type="text" id="name" className="fadeIn second login-input-text"
                         name="name"
                         placeholder="name"/>
                        <input type="text" id="email" className="fadeIn second login-input-text"
                         name="email"
                         placeholder="email"/>
                        <input type="text" id="password" 
                        className="fadeIn third login-input-text" 
                        name="login" placeholder="password"/>
                        <input type="text" id="repeat-password" 
                        className="fadeIn third login-input-text" 
                        name="repeat-password" placeholder="repeat-password"/>
                        <input type="file" id="image"
                         className="fadeIn fourth login-input-text"/>
                        <input type="submit"
                         className="fadeIn fourth login-input-submit" value="Sign Up"/>
                        </form>

                        

                    </div>
                    </div>
                    </div>
        )
    }
}

export default Signup
