import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Box, Typography, Paper } from '@mui/material'
import Breadcrumb from '@/components/Breadcrumb'
import useAxios from '@/hooks/axios'
import { RecipeProps, RecipesApiType } from '@/types/index'


type RecipesPageProps = RecipeProps[]

const RecipesPage = ({ initialRecipes }: { initialRecipes: RecipesPageProps }) => {
    const { loading, data: recipes, error }: RecipesApiType = useAxios(`/recipes`, { initialData: initialRecipes })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        < >
            <Breadcrumb route="recipes" />
            <Typography variant="h4" gutterBottom>
                All Recipes
            </Typography>
            <Box >
                {recipes?.map((recipe) => (
                    <Box key={recipe.title} component={Paper} p={2} mt={2} className="text-black dark:text-white bg-hint-of-red dark:bg-slate-950" borderRadius={3}>
                        <Link href={`/recipes/${recipe.category}/${recipe.slug}`} passHref>
                            <Typography variant="h5">
                                {recipe.title.replace(/-/g, ' ')}
                            </Typography>
                        </Link>
                        <Typography variant="body1" gutterBottom>
                            {recipe.description}
                        </Typography>
                        <img src={recipe.imageUrl} alt={recipe.title} width="100" height="100" />
                    </Box>
                ))}
            </Box>
        </>
    )
}


export default RecipesPage
