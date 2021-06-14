import {combineReducers} from 'redux'
import entities from "./entities";
import account from "./auth";

export default combineReducers({
    entities:entities,
    auth:account,

})