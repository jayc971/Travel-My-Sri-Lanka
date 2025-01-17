import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { whyChooseUs } from '@/data/data';


const WhyChooseUs = () => {
    
    return (
        <>
            <div className="py-20 items-center h-full text-left justify-between w-[90%] xl:w-[80%] mx-auto">
                <SectionHeading heading={`${whyChooseUs[0].title}`} description={`${whyChooseUs[0].mainDescription}`}/>
                <div className='mt-10 md:mt-20 text-center grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {whyChooseUs[0].description.map((subPoint, index) => {
                        return (
                            <div key={index} className="p-6 text-black sm:rounded-full rounded-[10%] lg:rounded-full shadow-md">
                                <h3 className='text-xl font-semibold'>{subPoint.point}</h3>
                                <p className='mt-4'>{subPoint.phrase}</p>
                            </div>
                        )
                    })}  
                </div>
            </div>
        </>
    );
}

export default WhyChooseUs;