import React from 'react';
import {useHistory} from 'react-router-dom';

const LoginSignupButton = ()=> {
    const history = useHistory();
  
    
    return (
        <div>
        <button type="button" className="btn btn-outline-warning navbar--nav--button" onClick={()=>history.push('/signin')}>LOGIN</button>
        <button type="button" className="btn btn-outline-warning" onClick={()=>history.push('/register')}>SIGNUP</button>
        </div>
    )
}

export default LoginSignupButton
