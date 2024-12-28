import {createSlice} from "@reduxjs/toolkit"
const initialState={counter:0, showCount:true}
const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.counter+=1
        },
        incrementBy5:(state,action)=>{
            state.counter+=action.payload
        },
        toggle:(state,action)=>{
            state.showCount=!(state.showCount)

        },
        decrement:(state,action)=>{
            state.counter-=1
        }


    }
})
export default counterSlice.reducer
export const {increment,  incrementBy5, decrement, toggle}= counterSlice.actions
