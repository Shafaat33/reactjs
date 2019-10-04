import axios from 'axios';

export const getSeats = () =>async dispatch => {
    await axios
    .get('api/seats').then(res => 
        dispatch({
            type: 'GET_SEAT',
            payload: res.data
        }))
    
}

export const approve = (seatId) =>async dispatch => {
   await axios
    .put(`api/seats/${seatId}`).then(res => 
        dispatch({
            type: 'APPROVE',
            payload: seatId
        }))
}