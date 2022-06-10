



import { configureStore } from '@reduxjs/toolkit'
import film from "./reducers/reducerFilm"

import author from "./reducers/reducerAuthor"

 export const store=configureStore({
    reducer:{
        filmReducer:film,
        authorReducer:author,
    },
   
})


