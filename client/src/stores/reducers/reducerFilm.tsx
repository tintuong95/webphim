import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeCategory } from "../../pages/Home";
import * as actionFilm from "../actions/actionFilm";
interface CounterState {
  filmNew: any[];
  filmScifi: any[];
  filmAction: any[];
  filmRomance: any[];
  filmAnime: any[];
  filmHoror: any[];
  filmCategoryOrSearch: any[];
  filmIdCategory: number;
  filmOffset: number;
  filmDetail: any;
}

const initialState: CounterState = {
  filmNew: [],
  filmScifi: [],
  filmAction: [],
  filmRomance: [],
  filmAnime: [],
  filmHoror: [],
  filmCategoryOrSearch: [],
  filmIdCategory: 0,
  filmOffset: 0,
  filmDetail: {},
};

export const filmSlice = createSlice({
  name: "film",

  initialState,

  reducers: {
    //basic action
    setIdCategory: (state: CounterState, action: PayloadAction<number>) => {
      state.filmIdCategory = action.payload;
    },
    setOffet: (state: CounterState) => {
      state.filmOffset += 12;
    },
    setFilmCategoryOrSearch: (state: CounterState) => {
      state.filmCategoryOrSearch = [];
    },
    resetOffset: (state: CounterState) => {
      state.filmOffset = 0;
    },
  },

  extraReducers(builder) {
    builder.addCase(
      actionFilm.actionGetFilmAll.fulfilled,
      (state, { type, payload, meta }) => {
        const nameReducer: TypeCategory = meta.arg.name;

        state[nameReducer] = payload.data.filmGetAll;
      }
    );
    builder.addCase(
      actionFilm.actionGetFilmAdd.fulfilled,
      (state, { type, payload, meta }) => {
        state.filmCategoryOrSearch = state.filmCategoryOrSearch.concat(
          payload.data.filmGetAll
        );
      }
    );
    builder.addCase(
      actionFilm.actionGetFilmId.fulfilled,
      (state, { type, payload, meta }) => {
      
        state.filmDetail = payload.data.filmGet;
      }
    );
  },
});

export const { resetOffset, setIdCategory, setOffet, setFilmCategoryOrSearch } =
  filmSlice.actions;

export default filmSlice.reducer;
