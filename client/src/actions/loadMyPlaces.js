import backend from '../apis/backend';
export default (user)=>{
    return async(dispatch,getState)=>{
        try{
           const response = await backend.get(`/api/places/user/${user.userId}`);
           dispatch({type:'FIRST_LOAD',payload:response.data});
        }
        catch(err){
             alert("Error");
        }

    }
}