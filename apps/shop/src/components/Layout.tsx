import React from 'react'
import { Container, Box, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from 'next-themes'
import Submenu from './Submenu'
import Navbar from './Navbar'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Box className="bg-white dark:bg-gray-800 min-h-screen text-black dark:text-hint-of-red ">
            <Navbar />
            <Submenu />
            <Container className='p-3'>
                {children}
            </Container>
            <Box
                bottom={16}
                position="fixed"
                right={16}
                zIndex={1000}
            >
                <IconButton color="inherit" onClick={toggleTheme}>
                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Box>
    )
}

export default Layout
