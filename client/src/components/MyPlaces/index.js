import React, { Component } from 'react'
import {connect} from 'react-redux';


import PlaceList from './PlaceList';
import actions from '../../actions';
export class MyPlaces extends Component {

    componentDidMount = ()=>{
           this.props.loadMyPlaces(this.props.user);
    }
    onDelete = ()=>{

    }
    render() {
        console.log(this.props.myplacelist);
        return (
            <div>
                <PlaceList places={this.props.myplacelist}/>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {myplacelist:state.myplacelist,user:state.user};

}

export default connect(mapStateToProps,{loadMyPlaces:actions.loadMyPlaces})(MyPlaces);
