import { createAsyncThunk } from "@reduxjs/toolkit";

import * as author from "../../api/apiAuthor"

export const actionAuthorGets=createAsyncThunk(
    'author/getall',
    async ()=> {
        const response=await author.fetchAuthors()
        return response.data
    }
    
)