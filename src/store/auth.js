import {createSlice} from "@reduxjs/toolkit"
const initialState ={
    isAuthenticated:false
}
const AuthSlice= createSlice({
    name:"authentication",
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuthenticated=true
        },
        logOut:(state)=>{
            state.isAuthenticated=false
        }

    }
})
export default AuthSlice.reducer
export const {login, logOut} = AuthSlice.actions