import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/*Hero Left Side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='p-10'>
            <h2 className=" text-3xl md:text-7xl font-bold leading-tight relative">
              Future of
              <span className=" text-accent"> Fashion </span>
              Is Here
            </h2>
            <p className="text-text-light  text-sm md:text-lg max-w-md mb-3.5 mt-2.5">
            Discover the latest trends in fashion with our curated collection of futuristic and contemporary styles.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-accent/80 transition-all shadow-lg shadow-accent/25  duration-200 hover:scale-105 active:scale-95">Shop Now</button>
            </div>
            
        </div>
        {/*Hero Right Side*/}
        <img src={assets.hero_img} alt="" className='w-full  sm:w-1/2' />

        <div className='relative'>
            

        </div>

    </div>
  )
}

export default Hero