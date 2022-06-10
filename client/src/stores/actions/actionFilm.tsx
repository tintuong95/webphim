import { createAsyncThunk } from "@reduxjs/toolkit";
import * as fetchFilm from "../../api/fetchFilm";

export const actionGetFilmAll: any = createAsyncThunk(
  "film/fetchData",
  async (payload: any) => {
    
    return fetchFilm.fetchFilmGetAll(
      payload.id,
      payload.offset,
      payload.search
    );
  }
);

export const actionGetFilmAdd: any = createAsyncThunk(
  "film/fetchDataAdd",
  async (payload: any) => {
    return fetchFilm.fetchFilmGetAll(
      payload.id,
      payload.offset,
      payload.search
    );
  }
);


export const actionGetFilmId:any=createAsyncThunk(
  "film/fetchById",
  async(payload:any)=>{
 
    return fetchFilm.fetchFilmGetId(
      payload.id
    )
  }
)
