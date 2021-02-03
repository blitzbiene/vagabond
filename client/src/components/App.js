import React from 'react';

import Navbar from './Navbar';
import LoginSignup from './LoginSignup';

class App extends React.Component{





    render(){
        return(<div class="container-lg">
            <Navbar/>
            <LoginSignup/>
        </div>);
    }
}
export default App;