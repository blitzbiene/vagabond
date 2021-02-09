import Cookie from 'universal-cookie';
export default ()=>{

     const cookie = new Cookie();
     cookie.remove('user');
    return{
        type:"LOGOUT",
        payload:null
    }
}