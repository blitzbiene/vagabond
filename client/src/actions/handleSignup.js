import backend from '../apis/backend';

export default (form,onRegisterSuccess,onRegisterFailed)=>{
    return async (dispatch,getState)=>{
             try{
                const response = await backend.post('/api/users/signup',form,{
                    headers:{
                      'Accept':'application/json' ,
                      'Content-Type':'multipart/form-data'}
                });
                console.log(response);
                dispatch( {
                    type:"SET_USER_COOKIE",
                    payload:response.data
                });
                onRegisterSuccess(response);

             }
             catch(err){
                 onRegisterFailed(err.response.data.msg);

                 dispatch( {
                     type:"SIGNUP_FAILED",
                     payload:null
                 });

             }
    }
}