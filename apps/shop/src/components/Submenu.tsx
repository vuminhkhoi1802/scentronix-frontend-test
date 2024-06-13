import React from 'react'
import { AppBar, Toolbar, Button, useTheme, Container } from '@mui/material'
import Link from 'next/link'

const Submenu: React.FC = () => {
    const theme = useTheme()

    return (
        <AppBar position="static" className={`bg-hint-of-red dark:bg-[#22365a] text-black dark:text-hint-of-red`}>
            <Container className='px-20'>
                <Toolbar>
                    <div className="flex space-x-4">
                        <Link href="/recipes/categories" passHref >
                            <Button color="inherit" >CATEGORIES</Button>
                        </Link>
                        <Link href="/recipes/collections" passHref >
                            <Button color="inherit" >COLLECTIONS</Button>
                        </Link>
                        <Link href="/recipes/resources" passHref >
                            <Button color="inherit" >RESOURCES</Button>
                        </Link>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Submenu
