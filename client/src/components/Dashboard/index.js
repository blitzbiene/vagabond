import React, { Component } from 'react'
import {connect} from 'react-redux';

import UserInfo from './UserInfo';
import backend from '../../apis/backend';
import MyPlaces from '../MyPlaces';
export class DashBoard extends Component {
    
    state={
        userData:null,
        placelist:[]
    }
    getUserData = async()=>{
        
        try{
            const response = await backend.get(`/api/users?id=${this.props.user.userId}`);
            this.setState({userData:response.data});
        }
        catch(err){
            console.log(err.message);
        }
    }
    componentDidMount = ()=>{
           this.getUserData();
    }

    render() {
        return (
            <div>
              {this.state.userData?
              <React.Fragment>
                  <UserInfo user={this.state.userData}/>
                  <MyPlaces/>
              </React.Fragment>
              :null}

            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {user:state.user};
}
export default connect(mapStateToProps,null)(DashBoard);
