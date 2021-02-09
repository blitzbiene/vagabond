import Cookie from 'universal-cookie';
import backend from '../apis/backend';

export default ()=>{
         const cookie = new Cookie();
         try{
             
             const user = cookie.get('user');
             
             if(!user)throw new Error();
         return {
             type:'SET_USER',
             payload:user
         }
        }
         catch(err){
             
            return {
                type:"CHECK_USER_FAILED",
                payload:null
            }
         }
         
}