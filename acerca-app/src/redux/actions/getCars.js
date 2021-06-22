import axios from 'axios'

export const GET_CARS = 'GET_CARS'

export function getCars() {
    
    return (dispatch, getState) => {
        axios.get('http://localhost:64028/api/CarDeliveries')
            .then((response) => {
                dispatch( { type: GET_CARS, payload: response.data } ) 
            })
    }    
} 