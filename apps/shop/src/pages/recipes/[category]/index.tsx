import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { Box, Typography, Paper } from '@mui/material'
import { RecipeProps, RecipesApiType } from '@/types/index'
import useAxios from '@/hooks/axios'
import axiosInstance from '@/utils/axios'

interface CategoryPageProps {
    initialRecipes: RecipeProps[]
    category: string
}

const CategoryPage = ({ initialRecipes, category }: CategoryPageProps) => {
    const { loading, data: recipes, error }: RecipesApiType = useAxios(`/recipes?category=${category}`, { initialData: initialRecipes })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <Breadcrumb route="recipes" category={category} title="" />
            <Typography variant="h4" gutterBottom>
                {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
            </Typography>
            <Box>
                {recipes?.map((recipe: RecipeProps) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axiosInstance.get('/recipes')
    const recipes = res.data
    const paths = recipes.map((recipe: RecipeProps) => ({ params: { category: recipe.category } }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await axiosInstance.get(`/recipes?category=${params?.category}`)
    const initialRecipes = res.data

    return {
        props: {
            initialRecipes,
            category: params?.category,
        },
    }
}

export default CategoryPage
