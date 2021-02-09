import React from 'react'

function AddPlaceForm(props) {
    return (
        <div className="login-form">
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                   
                        <h2 className="active"> ADD PLACE </h2>
                        
                        <form onSubmit={props.handleSubmit}>
                        <input type="text" id="title" value={props.field.title} onChange={props.onChange} className="fadeIn second login-input-text"
                         name="name"
                         placeholder="title"/>
                        <input type="text" id="description" value={props.field.description}  onChange={props.onChange}  className="fadeIn second login-input-text"
                         name="description"
                         placeholder="description"/>
                        <input type="text" id="address"  onChange={props.onChange}  value={props.field.address} 
                        className="fadeIn third login-input-text" 
                        name="address" placeholder="address"/>
                        <input type="text" id="latitude"  onChange={props.onChange}  value={props.field.latitude} 
                        className="fadeIn third login-input-text" 
                        name="latitude" placeholder="latitude"/>
                        <input type="text" id="longitude"  onChange={props.onChange}  value={props.field.longitude} 
                        className="fadeIn third login-input-text" 
                        name="longitude" placeholder="longitude"/>
                        <input type="file" id="image"  onChange={props.onChange}  
                         className="fadeIn fourth login-input-text"/>
                        <input type="submit"
                         className="fadeIn fourth login-input-submit" value="ADD"/>
                        </form>

                        

                    </div>
                    </div>
                    </div>
    )
}

export default AddPlaceForm
