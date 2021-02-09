export default (myplacelist=[],action)=>{
    switch(action.type){
        case 'FIRST_LOAD': return action.payload;
        default: return myplacelist;
    }
}