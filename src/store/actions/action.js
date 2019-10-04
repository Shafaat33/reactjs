import axios from 'axios';
export const bookSeat = userData => async dispatch => {
   await axios
    .post('api/users',userData).then(res => 
        dispatch({
            type:'BOOK_SEAT',
            payload: res.data
        }))
    // return (dispatch, getState) => {
    //     dispatch({type: 'BOOK_SEAT', userData:userData});
    // }
};

export const decline = (id) => async dispatch => {
    await axios.delete(`api/users/${id}`).then(() =>
        dispatch({
            type:'DECLINE',
            payload:id
        }))
    // return (dispatch, getState) => {
    //     dispatch({type: 'DECLINE', user_id: user_id});
    // }
};

export const getData = () => dispatch => {
    axios
    .get('api/users').then(res => 
        dispatch({
            type: 'GET_DATA',
            payload: res.data
        }))
    
}