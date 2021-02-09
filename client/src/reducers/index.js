import {combineReducers} from 'redux';
import user from './user'
import myplacelist from './myplacelist';
export default combineReducers({
    my:()=>"hi there",
    user,
    myplacelist
});