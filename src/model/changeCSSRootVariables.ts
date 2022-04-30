import React from 'react'
import { Theme } from '../context/themeContext';

export const changeCssRootVariables = (theme: Theme) => {
    const components = ["text-color", "components-bg", "body-bg", "card-bg"]

    const root = document.querySelector(":root") as HTMLElement;
    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })
}