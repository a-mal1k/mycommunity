import {LOGIN,LOGOUT,REGISTER} from './action'
const initialState={isLoggedin:false};
const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN: return {isLoggedin:true} 
        case REGISTER: return {isLoggedin:true}
        case LOGOUT: return {isLoggedin:false}
     
        default: return state;
    }
}
export default rootReducer;