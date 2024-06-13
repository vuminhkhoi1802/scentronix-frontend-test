import React from 'react'
import { Box, Typography, Button, Grid, Divider } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print'
import Breadcrumb from './Breadcrumb'

interface RecipeProps {
    recipe: {
        category: string
        title: string
        description: string
        prepTime: string
        bakeTime: string
        totalTime: string
        yield: string
        imageUrl: string
    }
}

const RecipeContent: React.FC<RecipeProps> = ({ recipe }) => {

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Breadcrumb route={'recipes'} category={recipe.category} title={recipe.title} />
                <Typography variant="h3" gutterBottom>
                    {recipe.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {recipe.description}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display="flex" alignItems="center" p={2} sx={{ backgroundColor: 'inherit' }}>
                            <AccessTimeIcon />
                            <Box ml={1}>
                                <Typography variant="subtitle2">PREP</Typography>
                                <Typography variant="body1">{recipe.prepTime}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" alignItems="center" p={2} sx={{ backgroundColor: 'inherit' }}>
                            <AccessTimeIcon />
                            <Box ml={1}>
                                <Typography variant="subtitle2">BAKE</Typography>
                                <Typography variant="body1">{recipe.bakeTime}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" alignItems="center" p={2} sx={{ backgroundColor: 'inherit' }}>
                            <AccessTimeIcon />
                            <Box ml={1}>
                                <Typography variant="subtitle2">TOTAL</Typography>
                                <Typography variant="body1">{recipe.totalTime}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" p={2} sx={{ backgroundColor: 'inherit' }}>
                            <WorkspacesOutlinedIcon />
                            <Box ml={1}>
                                <Typography variant="subtitle2">YIELD</Typography>
                                <Typography variant="body1">{recipe.yield}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="flex-end">
                        <Button variant="outlined" startIcon={<AddIcon color="error" />} sx={{ mr: 2 }} style={{ borderColor: "red", }} className='text-[inherit] hover:bg-gray-500'>
                            Save Recipe
                        </Button>
                        <Button variant="outlined" color="primary" startIcon={<PrintIcon color="error" />} style={{ borderColor: "red" }} className='text-[inherit] hover:bg-gray-500'>
                            Print
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box>
                    <img src={recipe.imageUrl} alt={recipe.title} width="100%" />
                </Box>
            </Grid>
        </Grid>
    )
}

export default RecipeContent
