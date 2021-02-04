import Cookie from 'universal-cookie';
import backend from '../apis/backend';

export default ()=>{
         const cookie = new Cookie();
         try{
             
             const user = cookie.get('user');
             
        // console.log(user);
         return {
             type:'SET_USER',
             payload:user
         }
        }
         catch(err){
             
            return {
                type:"CHECK_USER_FAILED",
                payload:"user_check_failed"
            }
         }
         
}