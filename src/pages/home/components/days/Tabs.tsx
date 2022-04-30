import React from 'react'

import styled from './days.module.scss'

interface ITabs {
    value: string
}

export const Tabs = () => {

    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];

    const renderedTabs = tabs && tabs.map((tab: ITabs) => <div key={tab.value} className={styled.tab}>{tab.value}</div>)

    return (
        <div className={styled.tabs}>
            <div className={styled.tabs__wrapper}>
                {renderedTabs}
            </div>
            <div className={styled.tab__cancel}><button>Cancel</button></div>
        </div>
    )
}