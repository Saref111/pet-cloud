import axios from 'axios'
import CONSTANTS from './constants'

export const registration = async (email, password, errorHandler) => {
    try {
        
        const resp = await axios.post(CONSTANTS.BASE_URL + '/api/auth/registration', {email, password})
        console.log(resp);
    } catch (e) {
        console.error(e.response.data.message);
    }

}