import React from 'react'
import Navbar from '../Components/Navbar'
import Annoucement from '../Components/Annoucement'
import Marquee from "react-fast-marquee";
import Slider from '../Components/Slider';
import Categorie from '../Components/Categorie';
import Products from '../Components/Products';


const Home = () => {
    return (
        <div>
            <Marquee speed={50} gradient={false} pauseOnHover="true" pauseOnClick="true" autoFill="true">
                <Annoucement />
            </Marquee>
            <Navbar />
            <Slider />
            <Categorie />
            <Products />
        </div>
    )
}

export default Home