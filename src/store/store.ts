import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from './slices/currentWeatherSlice'

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"]


const rootReducer = combineReducers({
    currentWeatherReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})
