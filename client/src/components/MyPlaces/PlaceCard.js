import React from 'react';
import './placecard.css';
import {connect} from 'react-redux';
import actions from '../../actions';


function PlaceCard(props) {

     
    const deletePhoto = (id)=>{
        
        props.deletePhoto(id,props.user);
    
    }
    return (
        <div className="card" style={{width:"60vw",textAlign:"center",margin:"auto",marginTop:"10vh"}}>
            <img className="card-img-top" style={{height:"50vh"}}src={`http://localhost:5000/${props.place.image}`} alt={props.place.title}/>
            <div className="card-body">
                <h1>{props.place.title}</h1>
                <p className="card-text">{props.place.description}</p>
             </div>
             <div class="card--container">
                 <div className="delete--button"><button type="button" class="btn btn-danger"
                 onClick={()=>deletePhoto(props.place._id)} >Delete</button></div>
                 <div className="edit--button"><button type="button" class="btn btn-info">Edit</button></div>
             </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>{
    return {user:state.user};
}
export default connect(mapStateToProps,{deletePhoto:actions.deletePhoto})(PlaceCard);
