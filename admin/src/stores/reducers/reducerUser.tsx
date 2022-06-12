import { createSlice } from "@reduxjs/toolkit";
import {  actionLoginAd, actionUserGetAll } from "../actions/actionUser";
import {history} from "../../"

type TypeData ={
    users:any[],
    login:boolean,
}

const initialState:TypeData ={
    users:[],
    login:false,
}


export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        ///basic action
    },
    extraReducers:(builder)=>{
        builder.addCase(actionUserGetAll.fulfilled,(state,{type,payload,meta})=>{
            state.users=payload.getUsers
        })
        builder.addCase(actionLoginAd.fulfilled,(state,{type,payload,meta})=>{
           if(payload.loginAdmin!=="false"){
            state.login=true; 
            localStorage.setItem("accessToken",payload.loginAdmin)
            history.push("/home")
           }

        })
    }
    
})


export const {}=userSlice.actions

export default userSlice.reducer