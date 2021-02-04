import Cookie from 'universal-cookie';

export default (key,value)=>{
    const cookie = new Cookie();
    const valueString = JSON.stringify(value);
    cookie.set(key,valueString,{path:'/',sameSite:"Lax"});
    return ({
        type:"SET_USER_COOKIE",
        payload:cookie.get(key)
    })

}