import { createAsyncThunk } from "@reduxjs/toolkit";

import * as author from "../../api/apiAuthor";
import { openNotification } from "./actionFilm";

export const actionAuthorGets = createAsyncThunk("author/getall", async () => {
  const response = await author.fetchAuthors();

  return response.data;
});

export const actionAuthorGet = createAsyncThunk(
  "author/getId",
  async (payload: any) => {
    const response = await author.fetchAuthorId(payload.id);

    return response.data;
  }
);

export const actionAuthorCreate = createAsyncThunk(
  "author/create",
  async (payload: any) => {
    const response = await author.fetchAuthorCreate(payload.name);
    payload.dispatch(actionAuthorGets());
 
    return response.data;
  }
);

export const actionAuthorUpdate = createAsyncThunk(
  "author/update",
  async (payload: any) => {
    const response = await author.fetchAuthorUpdate(payload.id, payload.name);
 
    return response.data;
  }
);

export const actionAuthorRemove = createAsyncThunk(
  "author/removeID",
  async (payload: any) => {
    const response = await author.fetchAuthorRemove(payload.id);
    payload.dispatch(actionAuthorGets());
 
    return response.data;
  }
);
