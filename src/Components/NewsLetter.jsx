import React from 'react';
import { IoMdSend } from "react-icons/io";


const NewsLetter = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white' style={{ height: "60vh" }}>
            <h1 className='font-bold text-5xl mb-5' >Newsletter</h1>
            <div className='text-xl font-semibold mb-5'>Get timely updates from your favorite products.</div>
            <div className='bg-white flex justify-between ' style={{ width: "50%", height: "40px", border: "1px solid grey" }}>
                <input type="text" placeholder='Your email' className='outline-none w-full p-2' />
                <button className='bg-teal-500 text-white w-10 flex items-center justify-center'>
                    <IoMdSend />
                </button>
            </div>
        </div>
    )
}

export default NewsLetter