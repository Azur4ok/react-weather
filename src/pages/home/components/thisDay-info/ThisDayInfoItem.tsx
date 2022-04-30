import React from 'react'

import { IItem } from './ThisDayInfo';
import styled from './thisDayInfo.module.scss'
import { IndicatorSvgSelector } from './../../../../assets/images/icons/indicators/IndicatorSvgSelector';

interface Props {
    item: IItem
}

export const ThisDayInfoItem = ({ item }: Props) => {
    const { icon_id, name, value } = item;
    return (
        <div className={styled.item}>
            <div className={styled.indicator__icon}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={styled.indicator__name}>{name}</div>
            <div className={styled.indicator__value}>{value}</div>
        </div>
    )
}