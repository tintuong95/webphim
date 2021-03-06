

import {configureStore} from "@reduxjs/toolkit"
import film from "./reducers/reducerFilm"
import author from "./reducers/reducerAuhtor"
import category from "./reducers/reducerCategory"
import user from "./reducers/reducerUser"

export const store=configureStore({
    reducer:{
        reducerFilm:film,
        reducerAuthor:author,
        reducerCategory:category,
        reducerUser:user,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


