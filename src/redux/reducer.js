import {LOGIN,LOGOUT,REGISTER} from './action'
import users from './users'
const initialState={
    isLoggedin:false,
    data:[],
    users:users
};
console.log(users);
const rootReducer = (state=initialState, action)=>{
    const {type,payload,user} = action;
    switch(type){
        case LOGIN: return {isLoggedin:true, data:payload, users:[...users,user]} 
        case REGISTER: return {isLoggedin:true,  data:payload, users:[...users,user]}
        case LOGOUT: return {isLoggedin:false}
     
        default: return state;
    }
}
export default rootReducer;