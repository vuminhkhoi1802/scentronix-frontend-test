import { GetStaticPaths, GetStaticProps } from 'next'
import RecipeContent from '@/components/RecipeContent'
import { RecipeProps, RecipesApiType } from '@/types/index'
import useAxios from '@/hooks/axios'
import axiosInstance from '@/utils/axios'


interface RecipePageProps {
    initialRecipes: RecipeProps[]
    slug: string
    category: string
}

const Recipe = ({ initialRecipes, slug, category }: RecipePageProps) => {
    const { loading, data: recipes, error }: RecipesApiType = useAxios(`/recipes?category=${category}slug=${slug}`, { initialData: initialRecipes })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (

        recipes && <RecipeContent recipe={initialRecipes[0]} />
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axiosInstance.get('/recipes')
    const recipes = res.data

    const paths = recipes.map((recipe: RecipeProps) => ({ params: { slug: recipe.slug, title: recipe.slug, category: recipe.category } }))
    console.log('path', paths)
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await axiosInstance.get(`/recipes?category=${params?.category}&slug=${params?.title}`)
    const initialRecipes = res.data

    return {
        props: {
            initialRecipes,
            slug: params?.title,
            category: params?.category,
        },
    }
}

export default Recipe
