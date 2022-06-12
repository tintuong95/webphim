import { createAsyncThunk } from "@reduxjs/toolkit";

import * as user from "../../api/apiUser";
import { TypeAccount } from "../../pages/Login";

export const actionUserGetAll = createAsyncThunk("user/getAll", async () => {
  const response = await user.fetchUsers();
  return response.data;
});


export const actionUserId=createAsyncThunk(
    'user/getId',
    async (payload:any)=>{
        const response =await user.fetchUserId(payload.id)
        return response.data
    }
)

export const actionRemoveId = createAsyncThunk(
  "user/removeId",
  async (payload: any) => {
    const response = await user.fetchUserRemoveId(payload.id);
    payload.dispatch(actionUserGetAll());
    return response.data
  }
);


export const actionLoginAd=createAsyncThunk(
  "user/loginad",
  async (payload:TypeAccount)=>{
    const response =await user.fetchUserLoginAd(payload.username,payload.password);
    return response.data
  }
)

