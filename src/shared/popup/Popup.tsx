import React from 'react'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import { IItem } from '../../pages/home/components/thisDay-info/ThisDayInfo'
import { ThisDayInfoItem } from '../../pages/home/components/thisDay-info/ThisDayInfoItem'
import styled from './popup.module.scss'

interface Props {
    items: IItem[]
}

export const Popup: React.FC = () => {

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
        <>
            <div className={styled.blur}></div>
            <div className={styled.popup}>
                <div className={styled.day}>
                    <div className={styled.day_temp}>20°</div>
                    <h1 className={styled.day_name}>Today</h1>
                    <GlobalSvgSelector id='sun' />
                    <div className={styled.day_time}>
                        Time: <span>12 pm</span>
                    </div>
                    <div className={styled.day_city}>
                        City: <span>Lviv</span>
                    </div>
                </div>
                <div>
                    {renderedItems}
                </div>
                <div className={styled.button_close}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
        </>
    )
}