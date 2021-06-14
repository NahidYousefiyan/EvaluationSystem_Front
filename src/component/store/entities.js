import {combineReducers} from 'redux'
import bugReducer from './bugs'
import detectStatReducer from './DetecDStat'
import DetecDStatSettingReducer from './DetecDStatSetting'
import department from './departments'
import postReducer from './posts'
import projectReducer from './project'
import Breadcrumb from './Breadcrumb'

export default combineReducers({
    bugs: bugReducer,
    breadcrumb: Breadcrumb,
    detectStat:detectStatReducer ,
    detectSetting:DetecDStatSettingReducer ,
    department:department ,
    // auth: authReducer,
    post: postReducer,
    project: projectReducer
})