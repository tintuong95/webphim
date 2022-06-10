import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Author from "../../api/fetchAuthor"


export const actionLogin:any=createAsyncThunk(
    "user/login",
    async (payload:any)=>{
   
        return Author.fetchLogin(payload.username,payload.password)
    }

)

export const actionSignup:any=createAsyncThunk(
    "user/create",
    async (payload:any)=>{
        
        return Author.fetchSignup(payload.username,payload.password)
    }
)