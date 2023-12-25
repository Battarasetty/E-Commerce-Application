import React from 'react'
import { categories } from '../data'
import CategorieItem from './CategorieItem'

const Categories = () => {
    return (
        <div>
            {
                categories.map((item) => (
                    <CategorieItem item={item} />
                ))
            }
        </div>
    )
}

export default Categories