import React from 'react'

import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types'
import styled from './thisDay.module.scss'

interface Props {
    weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
    const { name } = weather;
    const { temp } = weather.main;
    return (
        <div className={styled.this__day}>
            <div className={styled.top__block}>
                <div className={styled.top__block_wrapper}>
                    <div className={styled.this__day_temp}>{Math.round(temp)}°</div>
                    <h1 className={styled.this__day_day}>Today</h1>
                </div>
                <GlobalSvgSelector id="sun-image" />
            </div>
            <div className={styled.bottom__block}>
                <div className={styled.this__time}>
                    Time: <span className={styled.this__time_time}>12 pm</span>
                </div>
                <div className={styled.this__city}>
                    City: <span className={styled.this__city_name}>{name}</span>
                </div>
            </div>
        </div>
    )
}