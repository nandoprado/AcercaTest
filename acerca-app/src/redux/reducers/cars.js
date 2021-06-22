import { GET_CARS } from '../actions/getCars';

const defaultState = {
    list: []
}

export function showCars(state = defaultState, action) {
    
    switch (action.type) {
        case GET_CARS:            
            return Object.assign({}, state, {list: action.payload})
        default:
            return state;             
    }
    
}

export default showCars;