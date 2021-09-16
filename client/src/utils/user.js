import axios from 'axios'
import { setUser } from '../reducers/userReducer';
import CONSTANTS from './constants'

export const registration = async (email, password) => {
    try {
        
        const resp = await axios.post(CONSTANTS.BASE_URL + '/api/auth/registration', {email, password})
        console.log(resp);
    } catch (e) {
        console.error(e.response.data.message);
    }

}


export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post(CONSTANTS.BASE_URL + '/api/auth/login', {email, password})
            localStorage.setItem('token', resp.data.token)
            
            dispatch(setUser(resp.data.user))
        } catch (e) {
            console.error(e.response.data.message);
        }
    }
}

export const auth = () => {
    return async (dispatch) => {
        try {
            const resp = await axios.get(CONSTANTS.BASE_URL + '/api/auth/auth', 
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            
            dispatch(setUser(resp.data.user))
            localStorage.setItem('token', resp.data.token)
        } catch (e) {
            console.error(e.response.data.message);
            localStorage.removeItem('token')
        }
    }
}