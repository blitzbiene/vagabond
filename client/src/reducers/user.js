export default  (user=null,action)=>{
    if(action.type==='SET_USER')
    return action.payload;
    if(action.type==='LOGOUT')
    return action.payload;
    return user;
}