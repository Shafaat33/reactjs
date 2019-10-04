import { combineReducers } from 'redux'
import seatReducer from './seatReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    Seat: seatReducer,
    user: userReducer
})

export default rootReducer;