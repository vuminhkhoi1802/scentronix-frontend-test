import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

interface ThemeContextProps {
    children: React.ReactNode,
}
const ThemeContext = createContext({ toggleTheme: () => { }, mode: 'light' })

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const savedMode = localStorage.getItem('theme') as 'light' | 'dark'
        if (savedMode) {
            setMode(savedMode)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', mode)
    }, [mode])

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    background: {
                        paper: mode === 'light' ? '#ffffff' : '#121212',
                        default: mode === 'light' ? '#f8f5f0' : '#333333',
                    },
                },
            }),
        [mode],
    )

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
