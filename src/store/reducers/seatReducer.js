
const initSate = {
    Seats: []
}

const seatReducer = (state = initSate, action) => {
    switch(action.type){  
        case "GET_SEAT":{
            return {
                ...state,
                Seats: action.payload
            }
        }  
        case "APPROVE":{
            console.log("action ",action.payload);
            return {
                ...state
            }
        }
        default:{
            return state;
        }
    } 
}

export default seatReducer;