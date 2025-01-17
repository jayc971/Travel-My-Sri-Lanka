import SectionHeading from '@/components/Helper/SectionHeading';
import { hotelsData } from '@/data/data';
import React from 'react';
import HotelCard from './HotelCard';

const experiences = [
    {
        title: 'Recommended Hotels',
        description: ''
    }]

function Hotels() {
    return (
        <div className="py-20 mb-10 items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            <SectionHeading heading={`${experiences[0].title}`} description={`${experiences[0].description}`} />
            <div className='mt-10 md:mt-20 inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
            {hotelsData.map((hotel, index) => {
            return (
            <HotelCard key={index} hotel={hotel} />
            )
            })}
            </div>
        </div>
    )
}

export default Hotels;