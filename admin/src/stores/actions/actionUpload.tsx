import { createAsyncThunk } from "@reduxjs/toolkit";
import * as upload from "../../api/apiUpload"



export const actionUploadFilmImg=createAsyncThunk(
    'film/create',
    async(payload:any,thunkAPI)=>{
        
        const response =await upload.uploadFilmImage(payload)
        return response.data
    }
)