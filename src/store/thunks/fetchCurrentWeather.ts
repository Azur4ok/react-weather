import { AppDispatch } from "../store";
import { WeatherService } from './../../services/weatherService';
import { fetchCurrentWeather, fetchCurrentWeatherError, fetchCurrentWeatherSuccess } from '../slices/currentWeatherSlice'

export const getCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchCurrentWeather())
        const response = await WeatherService.getCurrentWeather(payload)
        if (response.status === 200) {
            dispatch(fetchCurrentWeatherSuccess(response))
        } else {
            dispatch(fetchCurrentWeatherError(response))
        }
    } catch (error) {
        console.log(error);
    }
}

