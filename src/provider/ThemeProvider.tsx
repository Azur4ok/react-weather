    import React from "react"
    import { Theme, ThemeContext } from "../context/themeContext"
    import { changeCssRootVariables } from './../model/changeCSSRootVariables';
    import { storage } from './../model/storage';

    interface Props {
        children: React.ReactNode
    }

    export const ThemeProvider = ({ children, ...props }: Props) => {
        const [theme, setTheme] = React.useState<Theme>(storage.getItem("theme") || Theme.LIGHT);

        changeCssRootVariables(theme);
        const changeTheme = (theme: Theme) => {
            storage.setItem("theme", theme)
            setTheme(theme)
            changeCssRootVariables(theme);
        }

        return <ThemeContext.Provider
            value={{
                theme,
                changeTheme
            }}
            {...props}
        >{children}
        </ThemeContext.Provider>
    }