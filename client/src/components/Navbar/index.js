import React from 'react';


import Hamburger from './Hamburger.jsx';
import Brand from './Brand';
import NavItem from './NavItem';
import SearchBar from './SearchBox';
import LoginSignupButton from './LoginSignupButton';
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
                  {this.loggedIn?<NavItem itemName="DASHBOARD"/>:null}
                </ul>
                
                <SearchBar/>
                <LoginSignupButton/>
              </div>
            </div>
          </nav>
        );
    }


}


export default NavBar;