import React from 'react'
import Select from 'react-select'

import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import styled from './header.module.scss'
import { useTheme } from './../../hooks/useTheme';
import { Theme } from '../../context/themeContext';

const options: any[] = [
    { value: 'Kyiv', label: 'Kyiv' },
    { value: 'Lviv', label: 'Lviv' },
    { value: 'Dnipro', label: 'Dnipro' }
]


export const Header: React.FC = () => {
    const theme = useTheme();

    const selectStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor:
                theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
            width: "200px",
            height: "40px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "16px"
        }),
        option: (styles: any) => ({
            ...styles,
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor:
                theme.theme === Theme.LIGHT ? "rgba(71, 147, 255, 0.2)" : "#4F4F4F",
            color: theme.theme === Theme.LIGHT ? "#000" : "#fff"
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.LIGHT ? "#000" : "#fff"
        })
    }

    const handleChangeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <header className={styled.header}>
            <div className={styled.wrapper}>
                <div className={styled.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <h1 className={styled.title}>React Weather</h1>
            </div>
            <div className={styled.wrapper}>
                <div className={styled.theme} onClick={handleChangeTheme}>
                    <GlobalSvgSelector id="theme-switcher" />
                </div>
                <Select defaultValue={options[0]} styles={selectStyles} options={options} />
            </div>
        </header>
    )
}