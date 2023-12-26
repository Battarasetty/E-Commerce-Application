import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Announcement'
import Marquee from "react-fast-marquee";
import Slider from '../components/Slider';
import Categorie from '../components/Categorie';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


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
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home