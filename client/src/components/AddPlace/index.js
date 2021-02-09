import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AddPlaceForm from './AddPlaceForm';
import actions from '../../actions';
export class AddPlace extends Component {


    state={
        title:"",
        description:"",
        image:"",
        address:"",
        latitude:"",
        longitude:"",
        creator:""

    }
    handleSubmit = (event)=>{

        event.preventDefault();
        const form = new FormData();
        form.append('image',this.state.image);
        form.append('title',this.state.title);
        form.append('description',this.state.description);
        form.append('address',this.state.address);
        form.append('latitude',this.state.latitude);
        form.append('longitude',this.state.longitude);
        form.append('creator',this.props.user.userId);
        this.props.handleAddPlace(form,this.onUploadFailed,this.onUploadSuccess,this.props.user.token);

    }
    onUploadSuccess = ()=>{
        alert("uploaded");
        this.props.history.push('/dashboard');

    }
    onUploadFailed = (err)=>{
       
        alert(err.response.data.msg);

    }
    onChange = (event)=>{
        if(event.target.id==='image')this.setState({image:event.target.files[0]});
        else this.setState({[event.target.id]:event.target.value})
    }
    render() {

        return (
            <div>
            <AddPlaceForm field={this.state} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {user:state.user};
}

export default connect(mapStateToProps,{handleAddPlace:actions.handleAddPlace})(withRouter(AddPlace));