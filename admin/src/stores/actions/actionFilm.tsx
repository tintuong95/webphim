import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from 'antd';
import * as film from "../../api/apiFilm";

export const openNotification = () => {
  notification.info({
    message: "Thành công ",
  });
};

export const actionFilmAll = createAsyncThunk(
  "film/getall",
  async (payload, thunkAPI) => {
    const response = await film.fetchFilms();
    return response.data;
  }
);

export const actionFilmRemoveId = createAsyncThunk(
  "film/removeId",
  async (payload: any, thunkAPI) => {
    const response = await film.fetchFilmRemoveId(Number(payload.id));
    payload.dispatch(actionFilmAll());
    
    return response.data;
  }
);

export const actionFilmCreate = createAsyncThunk(
  "film/create",
  async (payload: any, thunkAPI) => {
    const { name, publicYear, categoryId, authorId, description, link, img } =
      payload;
    const response = await film.fetchFilmCreate(
      name,
      publicYear,
      categoryId,
      authorId,
      description,
      link,
      img
    );
    
    return response.data;
  }
);

export const actionFilmGetId = createAsyncThunk(
  "film/getId",
  async (payload: any, thunkAPI) => {
    const response = await film.fetchFilmId(Number(payload.id));
    return response.data;
  }
);

export const actionFilmUpdate = createAsyncThunk(
  "film/update",
  async (payload: any, thunkAPI) => {
    const {
      id,
      name,
      publicYear,
      categoryId,
      authorId,
      description,
      link,
      img,
    } = payload;
    const response = await film.fetchFilmUpdate(
      id,
      name,
      publicYear,
      categoryId,
      authorId,
      description,
      link,
      img
    );
    
    return response.data
  }
);
