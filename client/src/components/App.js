import React from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Login from './Login';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Signup from './Signup/Signup';

import actions from '../actions';

class App extends React.Component{

    constructor(props){
        super(props);
        this.props.checkUser();
        console.log(this.props.user);
    }

    render(){
        console.log(this.props.user);
        return(<div class="container-lg">
            
            <BrowserRouter>
            <Navbar/>
            <Switch>
             {!(this.props.user)?
            <Route exact path="/signin"><Login/></Route>
            :null}
            <Route exact path='/register'><Signup/></Route>
            <Route exact path='/dashboard'></Route>
            </Switch>
            </BrowserRouter>
        </div>);
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {user:state.user};
}
export default connect(null,{checkUser:actions.checkUser})(App);