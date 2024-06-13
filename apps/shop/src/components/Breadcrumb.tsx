import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'

interface BreadcrumbProps {
    route: string
    category?: string
    title?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ route, category, title }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" separator=">" className={"text-[inherit]"} >
            <Link color="inherit" href={`/${route}`} >
                <Typography >{route.toUpperCase()}</Typography>
            </Link>
            {category && (
                <Link color="inherit" href={`/${route}/${category}`}>
                    <Typography >{category.toUpperCase()}</Typography>
                </Link>
            )}
            {category && title && (
                <Link color="inherit" href={`/${route}/${category}/${title.toLowerCase().replace(/ /g, '-')}`}>
                    <Typography >{title.replace(/-/g, ' ')}</Typography>
                </Link>

            )}
        </Breadcrumbs>
    )
}

export default Breadcrumb
