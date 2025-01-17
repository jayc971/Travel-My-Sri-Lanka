import React from 'react';
import { Dancing_Script } from "next/font/google";
import SearchBox from '@/components/Helper/SearchBox';

const tagLine = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function Hero() {
  return (
     <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            <div className='absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-blue-950 to-transparent z-0'>
            </div>
            {/* Video */}
            {/*src="https://cdn.pixabay.com/video/2023/11/29/191283-889685028_small.mp4"*/}
            <video src="https://cdn.pixabay.com/video/2023/11/29/191283-889685028_small.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'/>
            {/* Text Content */}
            <div className='absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
                <div className='text-white text-center'>
                    <p className='text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-4'>Welcome to</p>
                    <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Travel My Sri Lanka</h1>
                    <p className={`${tagLine.className} text-xl sm:text-1xl md:text-2xl lg:text-3xl mt-4`}>Your Gateway to Paradise</p>
                </div>
                {/* Add vertical gap */}
                <div className='relative lg:mt-96 translate-y-1/2 sm:mt-0'>
                    <SearchBox/>
                </div>
            </div>
      </div>
  );
}

export default Hero;