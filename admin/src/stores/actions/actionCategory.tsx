import { createAsyncThunk } from "@reduxjs/toolkit";

import * as category from "../../api/apiCategory";
import { openNotification } from "./actionFilm";

export const actionCategoryAll = createAsyncThunk(
  "category/getall",
  async () => {
    const response = await category.fetchCategorys();
    return response.data;
  }
);

export const actionCategoryID = createAsyncThunk(
  "category/getID",
  async (payload: any) => {
    const response = await category.fetchCategory(payload.id);
    return response.data;
  }
);

export const actionCategoryCreate = createAsyncThunk(
  "category/create",
  async (payload: any) => {
    const response = await category.fetchCategoryCreate(payload.name);
    payload.dispatch(actionCategoryAll());
    
    return response.data;
  }
);

export const actionCategoryUpdate = createAsyncThunk(
  "category/update",
  async (payload: any) => {
    const response = await category.fetchCategoryUpdate(
      payload.id,
      payload.name
    );
    
    return response.data;
  }
);

export const actionCategoryRemove = createAsyncThunk(
  "category/remove",
  async (payload: any) => {
    const response = await category.fetchCategoryRemove(payload.id);
    payload.dispatch(actionCategoryAll());
    
    return response.data;
  }
);
