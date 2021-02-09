import React, { Component } from 'react'

export class Signup extends Component {
    render() {

        
        return (
            <div className="login-form">
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                   
                        <h2 className="active"> Sign Up </h2>
                        
                        <form onSubmit={this.props.handleSubmit}>
                        <input type="text" id="name" value={this.props.field.name} onChange={this.props.onChange} className="fadeIn second login-input-text"
                         name="name"
                         placeholder="name"/>
                        <input type="text" id="email" value={this.props.field.email}  onChange={this.props.onChange}  className="fadeIn second login-input-text"
                         name="email"
                         placeholder="email"/>
                        <input type="password" id="password"  onChange={this.props.onChange}  value={this.props.field.password} 
                        className="fadeIn third login-input-text" 
                        name="login" placeholder="password"/>
                        <input type="password" id="repeatPassword"  onChange={this.props.onChange}  value={this.props.field.repeatPassword} 
                        className="fadeIn third login-input-text" 
                        name="repeat-password" placeholder="repeat-password"/>
                        <input type="file" id="image"  onChange={this.props.onChange}  value={this.props.field.image} 
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

export default Signup;
