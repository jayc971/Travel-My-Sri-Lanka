'use client'
import { destinationsData } from '@/data/data';
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


function DestinationsSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Carousel 
            responsive={responsive}
            infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} >
                
                {destinationsData.map((destination) => {
                    return <div key={destination.id} className='m-3 cursor-pointer'>
                        <div className="relative h-[400px] overflow-visible">
                            <Image src={destination.image} alt={destination.destination} className="rounded-lg h-[90%] object-cover w-full transition-transform duration-500 ease-in-out transform hover:scale-110" width={500} height={300} />
                            <h3 className="text-xl font-medium mt-4">{destination.destination}</h3>
                        </div></div>
                })}
                
            </Carousel>
    )
}

export default DestinationsSlider;