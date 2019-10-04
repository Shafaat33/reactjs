const initSate = {
   users: []
}

const userReducer = (state = initSate, action) => {
    switch(action.type){  
        case "BOOK_SEAT":{
            //console.log("action payload",action.payload)
            return{
                ...state,
                users: [...state.users,action.payload]
            };
            // const newData = action.payload;
            // const newState = [...state,newData]
            // console.log("++++++++",newState);
            // return newState;
           //return [...state.users, action.payload]
            //return Object.assign({},state.users, action.payload)
        }
        case "DECLINE":{
            return{
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }
            // const userId = action.payload;
            // const newState = state.users.filter(item => {
            //     return item.u_id !== userId;
            // })
            // return newState;
        }
        case "GET_DATA":{
            return {
                ...state,
                users: action.payload
            }
        }  
        default:{
            return state;
        }
    } 
}
export default userReducer;
