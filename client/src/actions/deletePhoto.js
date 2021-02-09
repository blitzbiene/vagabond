import loadMyPlaces from './loadMyPlaces';
import backend from '../apis/backend';

export default (key,user)=>{
    return async(dispatch,getState)=>{
        console.log(key);
        try{
            const response = await backend.delete('/api/places/'+key,{
                headers:{
                    'Authorization':'Bearer '+user.token
                }
            });
            dispatch(loadMyPlaces(user));
            console.log(response);
        }catch(err)
        {
            if(err.response.msg)
            alert(err.response.msg);
            else alert("unknown error");
        }
    }

}