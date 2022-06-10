import { createAsyncThunk } from "@reduxjs/toolkit";

import * as category from "../../api/apiCategory"

export const actionCategoryAll=createAsyncThunk(
    'category/getall',
    async ()=> {
        const response=await category.fetchCategorys()
        return response.data
    }
    
)