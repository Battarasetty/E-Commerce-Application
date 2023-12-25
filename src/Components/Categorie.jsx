import React from 'react'
import { categories } from '../data'
import CategorieItem from './categorieItem'

const Categorie = () => {
    return (
        <div className='flex p-5 justify-between'>
            {
                categories.map((item) => (
                    <CategorieItem item={item} />
                ))
            }
        </div>
    )
}

export default Categorie