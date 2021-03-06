import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { Weather } from "../types"

type CurrentWeather = {
    weather: Weather
    isLoading: boolean
    response: Response
}

type Response = {
    status: number
    message: string
}

const initialState: CurrentWeather = {
    weather: {
        name: "",
        main: {
            temp: 0
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: ""
    }
}

const currentWeatherSlice = createSlice({
    name: "current_weather",
    initialState,
    reducers: {
        fetchCurrentWeather: (state) => {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export const { fetchCurrentWeather, fetchCurrentWeatherSuccess, fetchCurrentWeatherError } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;