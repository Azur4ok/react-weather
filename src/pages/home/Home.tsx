import React from 'react'

import { ThisDay } from './components/thisDay/ThisDay';
import { ThisDayInfo } from './components/thisDay-info/ThisDayInfo';
import { Days } from './components/days/Days';
import styled from './home.module.scss'
import { useTypedDispatch, useTypedSelector } from './../../hooks/store';
import { getCurrentWeather } from './../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from './../../store/selectors';

export const Home: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { weather } = useTypedSelector(selectCurrentWeatherData)

  React.useEffect(() => {
    dispatch(getCurrentWeather('London'))
  }, [])


  return (
    <div >
      <div className={styled.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home