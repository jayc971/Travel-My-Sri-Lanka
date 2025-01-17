import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import DestinationsSlider from './DestinationsSlider';

const experiences = [
    {
        title: 'Our Top Experiences',
        description: ''
    }]

function Destinations() {
    return (
        <div className="py-20 my-10 items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            <SectionHeading heading={`${experiences[0].title}`} description={`${experiences[0].description}`}/>
            <div className='mt-10 md:mt-20'>
                <DestinationsSlider/>
            </div>
        </div>
    )
}

export default Destinations;