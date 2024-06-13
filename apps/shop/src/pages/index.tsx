import { Typography, Box, Paper, Button } from '@mui/material'
import Link from 'next/link'

const HomePage = () => {
    return (
        <>
            <Box component={Paper} p={2} mt={2} className="text-black dark:text-white bg-white dark:bg-slate-950">
                <Typography variant="h4" gutterBottom>
                    Welcome to the Recipe Shop
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Check out our delicious recipes below:
                </Typography>
                <Box mt={2}>
                    <Link href="/recipes/bread/whole-grain-banana-bread" passHref>
                        <Button variant="contained" color="primary">Whole-Grain Banana Bread</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default HomePage
