import React from 'react'

import { IDay } from './Days'
import styled from './days.module.scss'
import { GlobalSvgSelector } from './../../../../assets/images/icons/global/GlobalSvgSelector';

interface Props {
    day: IDay
}

export const Card = ({ day }: Props) => {
    return (
        <div className={styled.card}>
            <div className={styled.day}>
                {day.day}
            </div>
            <div className={styled.day__info}>
                {day.day_info}
            </div>
            <div className={styled.day__icon}>
                <GlobalSvgSelector id={day.icon_id} />
            </div>
            <div className={styled.temp__day}>
                {day.temp_day}
            </div>
            <div className={styled.temp__night}>
                {day.temp_night}
            </div>
            <div className={styled.info}>
                {day.info}
            </div>
        </div>
    )
}