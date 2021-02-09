import Cookie from 'universal-cookie';

export default (key,value)=>{
    const cookie = new Cookie();
    const valueString = JSON.stringify(value);
    cookie.set(key,valueString,{path:'/'});
    return ({
        type:"SET_USER",
        payload:cookie.get(key)
    })

}