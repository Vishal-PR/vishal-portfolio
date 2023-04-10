import React from 'react';
import Profilephoto from "../assets/vishal3.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'> I build things for the web.</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm a software engineer specializing in building the backend of web application.
                
                </p>
                <div>
                    <Link to='portfolio' smooth duration={1000} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-orange-500 to-orange-300 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiOutlineArrowSmRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Profilephoto}  alt="my profile" className='rounded-2xl mx-auto w-4/6 md:w-full' />
            </div>
        </div>
    </div>

  )
}

export default Home;

