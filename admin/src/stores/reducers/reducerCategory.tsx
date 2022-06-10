import { createSlice } from "@reduxjs/toolkit";
import { actionCategoryAll } from "../actions/actionCategory";


interface ICategory {
    category:any[]
}

const initialState:ICategory={
    category:[]
}


export const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        //basic action
    },
    extraReducers:(builder)=>{
        builder.addCase(actionCategoryAll.fulfilled,(state,{type,payload,meta})=>{
            state.category=payload.categoryGets
        })
    }

})


export const {} =categorySlice.actions


export default categorySlice.reducer