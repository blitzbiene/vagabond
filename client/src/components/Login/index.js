import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import LogIn from './LogIn';
import {connect} from 'react-redux';
import actions from '../../actions';


export class LoginSignup extends Component {


    constructor(props){
        super(props);
        //console.log(this.props.user);
        
    }

    state = {
        email:"",
        password:"",
        isLogin:false

    }
    onChange = (event)=>{
        this.setState({[event.target.id]:event.target.value});


    }
    onSuccessfulLogin = (response)=>{
           if(!response)
           return this.loginFailed({msg:"Unknown Error"});
           this.props.setUserinCookie('user',response.data);
           this.props.history.push('/dashboard');
    }
    loginFailed = (response)=>{
        if(!response)
        return alert("gajab ka  error");
        alert(response.data.msg);

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.performLogin(this.onSuccessfulLogin,this.loginFailed,this.state.email,this.state.password);
    }
    componentDidUpdate = ()=>{
        if(this.props.user)
        this.props.history.push('/dashboard');
    }
    
    



    render() {
       
        return (
            <div>
               <LogIn handleSubmit={this.handleSubmit} email={this.state.email} password={this.state.password} onChange={this.onChange}/>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{
    
    return {user:state.user};
} 
export default connect(mapStateToProps,{performLogin:actions.handleLogin,setUserinCookie:actions.setUserinCookie})(withRouter(LoginSignup));
