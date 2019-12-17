import { LOADDATA , GETID } from './action-types'

const defaultState = {
    item: [],
    id: ''
}

export default (state = defaultState, action) => {
    console.log(action)
    
    switch (action.type) {
        case LOADDATA:
            return {
                ...state,
                item: action.data
            }
        case GETID:
            return {
                ...state,
                id:action.data
            }
    
        default:
            return state
    }
}