import React from 'react'

function UserInfo(props) {
    
    return (
            <div className="card" style={{width:"20rem",margin:"auto",marginTop:"5vh"}}>
            <img className="card-img-top" style={{height:"15rem"}}src={`http://localhost:5000/${props.user.image}`} alt="user_image"/>
            <div className="card-body">
                <h1>{props.user.name}</h1>
                <p className="card-text">{props.user.email}</p>
            </div>
            </div>
    )
}

export default UserInfo
