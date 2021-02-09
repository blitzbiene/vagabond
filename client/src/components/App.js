import React from 'react';
import {connect} from 'react-redux';
import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom';

import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import DashBoard from './Dashboard';
import AddPlace from './AddPlace'

import actions from '../actions';

class App extends React.Component{

    constructor(props){
        super(props);
        this.props.checkUser();
        
    }

    render(){

       
        
        return(<div class="container-lg">
            
            <BrowserRouter>
            <Navbar/>
            <Switch>
             {!(this.props.user)?
            <Route exact path="/signin"><Login/></Route>
            :null}
            {!(this.props.user)?<Route exact path='/register'><Signup/></Route>:null}
            {this.props.user?<Route exact path='/dashboard'><DashBoard/></Route>:null}
            {this.props.user?<Route exact path='/addplace'><AddPlace/></Route>:null}
            <Redirect to={{path:'/'}}/>
            </Switch>
            </BrowserRouter>
        </div>);
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {user:state.user};
}
export default connect(mapStateToProps,{checkUser:actions.checkUser})(App);