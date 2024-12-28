import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter"
import authReducer from "./auth"



// const counterReducer= (state=initialState,action)=>{
//     if(action.type === "increment"){
//         return {counter:state.counter+1,
//             showCount:state.showCount
//         };
//     }
//     if(action.type === "incrementBy5"){
//         return {counter:state.counter+action.amount,
//             showCount:state.showCount
//         };
//     }
//     if(action.type === "toggle"){
//         return {counter:state.counter,
//             showCount:!(state.showCount)
//         };
//     }
//     if(action.type === "decrement"){
//         return {counter:state.counter-1,
//             showCount:state.showCount
//         };
//     }
//     return state

// }
const store= configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,

    }
})
export default store;
