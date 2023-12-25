import React from 'react'

const CategorieItem = ({ item }) => {
    // console.log(item);
    return (
        <div className='flex-1 m-1 relative ' style={{ height: "80vh" }}>
            <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-white mb-5'>{item.title}</h1>
                <button className='border-none p-3 cursor-pointer bg-white text-gray-500 font-bold'>Shop now</button>
            </div>
        </div>
    )
}

export default CategorieItem;