const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const defaultState = {
    currentUser: {},
    isAuth: false
}
const userReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}



export const logout = () => ({type: LOG_OUT})
export const setUser = (user) => ({type: LOG_IN, payload: user})
export default userReducer