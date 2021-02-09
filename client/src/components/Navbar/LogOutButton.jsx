import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../actions';
const LoginSignupButton = (props)=> {
    const history = useHistory();
  

    const handleLogout = ()=>{
           props.logout();
           history.push('/');
           window.location.replace("http://localhost:3000")
    }
    
    return (
        <div style={{padding:"0 1rem"}}>
        <button type="button" className="btn btn-outline-warning" onClick={()=>{handleLogout()}}>LOGOUT</button>
        </div>
    )
}

export default connect(null,{logout:actions.handleLogout})(LoginSignupButton);
