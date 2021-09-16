const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'

const defaultState = {
    files: [],
    currentDir: null
}
const fileReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILES: 
            return {
                ...state,
                files: action.payload
            }
        case SET_CURRENT_DIR: 
            return {
                ...state,
                currentDir: action.payload
            }
        default:
            return state
    }
}

export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const setCurrentDir = (currentDir) => ({type: SET_CURRENT_DIR, payload: currentDir})
export default fileReducer