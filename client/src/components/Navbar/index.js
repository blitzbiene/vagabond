import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Hamburger from './Hamburger.jsx';
import Brand from './Brand';
import NavItem from './NavItem';
import SearchBar from './SearchBox';
import LoginSignupButton from './LoginSignupButton';
import LogOutButton from './LogOutButton';
import './navbar.css';



class NavBar extends React.Component{

    loggedIn=null;
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light navbar--nav--bgcolor">
            <div className="container-fluid">
              <Brand/>
              <Hamburger/>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 left--margin--auto">
                  <Link to={{pathname:'/dashboard'}}>{this.props.user?<NavItem itemName="DASHBOARD"/>:null}</Link>
                  <Link to={{pathname:'/addplace'}}>{this.props.user?<NavItem itemName="ADD PLACE"></NavItem>:null}</Link>
                  
                </ul>
                
                <SearchBar/>
                {this.props.user?<LogOutButton/>:null}
                
                {!this.props.user?<LoginSignupButton/>:null}
              </div>
            </div>
          </nav>
        );
    }


}

const mapStateToProps = (state,ownProps)=>{
  return {user:state.user};
}

export default connect(mapStateToProps,null)(NavBar);