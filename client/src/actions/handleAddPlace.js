import backend from '../apis/backend';

export default  (form,onUploadFailed,onUploadSuccess,token)=>{
    return async (dispatch,getState)=>{
         try{
             const response = await backend.post('/api/places',form,{
                 headers:{
                     'Authorization':`Bearer ${token}`
                 }
             });
             onUploadSuccess();

         }
         catch(err){
               console.log(err);
               onUploadFailed(err);
         }
    }
}