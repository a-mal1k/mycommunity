export const LOGIN = 'login';
export const REGISTER = 'register'
export const LOGOUT = 'logout'

export const login = ()=>{
    return {
        type:LOGIN,
        info:'Logged in'
    }
}
export const logout = ()=>{
    return {
        type:LOGOUT,
        info:'Logged out'
    }
}
export const register = ()=>{
    return {
        type:REGISTER,
        info:'Registered'
    }
}