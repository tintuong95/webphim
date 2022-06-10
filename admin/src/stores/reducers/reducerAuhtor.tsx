import { createSlice } from "@reduxjs/toolkit"
 
import {actionAuthorGets}  from "../actions/actionAuthor"

interface  AuthorState {
    authors:any
}
const initialState:AuthorState = {
    authors:[]
}


export const authorSlice =createSlice({
    name:"author",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actionAuthorGets.fulfilled,(state,{type,payload,meta})=>{
            state.authors=payload.authorGets
        })
    }
})

export const {}=authorSlice.actions

export default authorSlice.reducer