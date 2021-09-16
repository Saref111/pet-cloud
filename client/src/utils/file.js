import axios from "axios";
import CONSTANTS from "./constants";

export function fetchFiles(dirId) {
    return async (dispatch) => {
        try {
            const resp = await axios.get(
                `${CONSTANTS.BASE_URL}/api/files${dirId ? '?parent=' + dirId : '' }`,
                {headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }})
            console.log(resp);
        } catch (e) {
                console.error(e);
        }
    }
}