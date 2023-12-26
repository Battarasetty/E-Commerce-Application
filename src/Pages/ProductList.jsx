import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Annoucement from '../Components/Annoucement';
import Marquee from 'react-fast-marquee';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';

const ProductList = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [size, setSize] = useState('')

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };
    const handleSizeChange = () => {
        setSize(e.target.value)
    }

    return (
        <div>
            <Marquee speed={50} gradient={false} pauseOnHover="true" pauseOnClick="true" autoFill="true">
                <Annoucement />
            </Marquee>
            <Navbar />
            <h1 className='m-5'>Dresses</h1>
            <div className='flex justify-between m-5'>
                <div className=''>
                    <span className='text-lg font-bold mr-5'>
                        Filter Products
                    </span>
                    <select value={selectedColor} onChange={handleColorChange} className='p-2 mr-5 border'>
                        <option disabled value="">
                            Color
                        </option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select onChange={handleSizeChange} className='p-2 mr-5 border'>
                        <option>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className=''>
                    <span className='text-lg font-bold mr-5'>
                        Sort Products
                    </span>
                    <select className='p-2 mr-5 border'>
                        <option>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductList