export const LOGIN = 'login';
export const REGISTER = 'register'
export const LOGOUT = 'logout'

export const login = (data)=>{
    return {
        type:LOGIN,
        info:'Logged in',
        payload:data,
        user:data
    }
}
export const logout = ()=>{
    return {
        type:LOGOUT,
        info:'Logged out'
    }
}
export const register = (data)=>{
    return {
        type:REGISTER,
        info:'Registered',
        payload:data,
        user:data
    }
}