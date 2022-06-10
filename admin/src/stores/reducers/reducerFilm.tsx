import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { actionFilmAll, actionFilmGetId, actionFilmRemoveId } from "../actions/actionFilm"



import type {RootState} from "../store" 



interface FilmState {
    film:any[],
    filmId:any
}


const initialState :FilmState ={
    film:[],
    filmId:{}
}

export const FilmSlice = createSlice({
    name: 'film',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      //basic action
    },

    extraReducers:(builder)=>{
        builder.addCase(actionFilmAll.fulfilled,(state,{type,payload,meta})=>{
    
            state.film=payload.filmGetAllNoLimit
        })
        builder.addCase(actionFilmGetId.fulfilled,(state,{type,payload,meta})=>{
            state.filmId=payload.filmGet
        })
       
    }
  })


 export const {} =FilmSlice.actions 


 export default FilmSlice.reducer