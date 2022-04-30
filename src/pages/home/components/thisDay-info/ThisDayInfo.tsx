import React from 'react'

import cloud from '../../../../assets/images/cloud.png'
import styled from './thisDayInfo.module.scss'
import { ThisDayInfoItem } from './ThisDayInfoItem';

export interface IItem {
    icon_id: string
    name: string
    value: string
}

export const ThisDayInfo = () => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];

    const renderedItems = items && items.map((item: IItem) => <ThisDayInfoItem key={item.icon_id} item={item} />)

    return (
        <div className={styled.this__day_info}>
                {renderedItems}
            <img className={styled.cloud__image} src={cloud} alt="weather" />
        </div>
    )
}