import React, { Component } from 'react';
import backend from '../../apis/backend';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import Signup from  './Signup';
import actions from '../../actions';
export class Register extends Component {


    state = {
        name:"",
        email:"",
        password:"",
        repeatPassword:"",
        image:"",
        imageFile:null


    }



    onRegisterFailed =(message)=>{
         alert(message);
    }
    onRegisterSuccess = (response)=>{
        if(!response)
        return this.onRegisterFailed("unknown error");
        this.props.setUserinCookie('user',response.data);
        this.props.history.push('/dashboard');
    }
    submitForm = async ()=>{

        const form = new FormData();
        const {email,password,imageFile,name} = this.state;
        const userData = JSON.stringify({name,email,password});
        form.append('image',imageFile);
        form.append('userData',userData);
        this.props.handleSignup(form,this.onRegisterSuccess,this.onRegisterFailed);
        

    }
    handleSubmit = (event)=>{
        event.preventDefault();
        try{
            //if(this.state.password!==this.state.repeatPassword)
            //throw new Error("Password don't match");
             this.submitForm();
            
        }
        catch(err){
              alert(err.message);
        }
    }
    onChange = (event)=>{
        if(event.target.id==="image")
        {this.setState({imageFile:event.target.files[0]});}
        this.setState({[event.target.id]:event.target.value});
    }
    render() {
        return (
            <div>
                <Signup onChange={this.onChange} handleSubmit={this.handleSubmit} field={this.state}/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {user:state.user};
}

export default connect(mapStateToProps,{handleSignup:actions.handleSignup,setUserinCookie:actions.setUserinCookie})(withRouter(Register));
