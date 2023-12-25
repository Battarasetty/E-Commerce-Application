import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='flex'>
            <div className='flex-1 flex flex-col p-5 '>
                <h1 className=''>Groceri Store</h1>
                <p className='my-5'>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className='flex'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center text-white m-5' style={{ backgroundColor: '#3B5999' }}>
                        <FaFacebookSquare />
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center text-white m-5' style={{ backgroundColor: '#E4405F' }}>
                        <FaSquareInstagram />
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center text-white m-5' style={{ backgroundColor: '#55ACEE' }}>
                        <FaPinterest />
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center text-white m-5' style={{ backgroundColor: '#E60023' }}>
                        <FaGithub />
                    </div>
                </div>
            </div>
            <div className='flex-1 p-5 '>
                <h3 className='mb-6'>Useful Links</h3>
                <ul className='m-0 p-0 flex flex-wrap'>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Home
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Cart
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Man Fashion
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Woman Fashion
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Accessories
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        MyAccount
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Order Tracking
                    </li>
                    <li className='mb-3' style={{ width: "50%" }}>
                        Terms
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-5'>
                <h1 className=''>Contact</h1>
                <div className='mb-5 flex items-center'>
                    <FaLocationDot style={{ marginRight: "10px" }} />
                    BHEL, 24-63, R.C Puram, Hyderabad-32
                </div>
                <div className='mb-5 flex items-center' >
                    <FaPhoneSquareAlt style={{ marginRight: "10px" }} />
                    +91-8639733568
                </div>
                <div className='mb-5 flex items-center' >
                    <IoMdMail style={{ marginRight: "10px" }} />
                    HarishBattarasetty@gmail.com
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" className='w-full' />
            </div>
        </div>
    )
}

export default Footer