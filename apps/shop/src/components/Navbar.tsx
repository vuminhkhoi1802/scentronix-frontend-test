import React from 'react'
import { AppBar, Toolbar, Button, useTheme, Box, Container } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar: React.FC = () => {
    const router = useRouter()
    const theme = useTheme()

    return (
        <AppBar position="static" className={`bg-[#ffffff] dark:bg-slate-800 text-black dark:text-white`}>
            <Container className='px-20'>
                <Toolbar >
                    <div className="flex space-x-4">
                        <Link href="/" passHref>
                            <Button
                                color="inherit"
                            >
                                SHOP
                            </Button>
                        </Link>
                        <Link href="/recipes" passHref>
                            <Button
                                color="inherit"
                            >
                                RECIPES
                            </Button>
                        </Link>
                        <Link href="/learn" passHref>
                            <Button
                                color="inherit"
                            >
                                LEARN
                            </Button>
                        </Link>
                        <Link href="/about" passHref>
                            <Button
                                color="inherit"
                            >
                                ABOUT
                            </Button>
                        </Link>
                        <Link href="/blog" passHref>
                            <Button
                                color="inherit"
                            >
                                BLOG
                            </Button>
                        </Link>
                    </div>

                </Toolbar>
            </Container>

        </AppBar>
    )
}

export default Navbar
