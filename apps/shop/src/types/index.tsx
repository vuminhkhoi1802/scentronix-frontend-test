export interface RecipeProps {
    slug: string,
    category: string
    title: string
    description: string
    prepTime: string
    bakeTime: string
    totalTime: string
    yield: string
    imageUrl: string
}

export interface RecipesApiType {
    loading?: boolean,
    data?: RecipeProps[],
    error?: any
}
