import { createSlice } from "@reduxjs/toolkit";
import { history } from "../../index";
import * as Author from "../actions/actionAuthor";
const initialState = {
    error:false
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      Author.actionLogin.fulfilled,
      (state, { type, meta, payload }) => {
        if (payload.data.signin != null) {
          localStorage.setItem("accessToken", payload.data.signin);
           history.replace("/")
          return
        }
         state.error=true
         return;
      }
    );
    builder.addCase(
      Author.actionSignup.fulfilled,
      (state,{ type, meta, payload })=>{
        console.log(meta,payload)
        if (payload.data.signup != null) {
          localStorage.setItem("accessToken", payload.data.signup);
           history.replace("/")
          return
        }
         state.error=true
         return;
      }
    )
  },

});

export const {} = authorSlice.actions;

export default authorSlice.reducer;
