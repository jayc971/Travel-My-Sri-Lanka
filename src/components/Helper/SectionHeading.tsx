import React from 'react';

type Props = {
    heading: string;
    description: string;
}

function SectionHeading({ heading,description }: Props) {
    return (
        <div className=' transition-all duration-200 z-[1000] flex items-center space-x-2'>
            <div className='h-10 rounded-full flex items-left justify-center flex-col'>
            <h2 className="text-3xl font-semibold text-gray-800">{heading}</h2>
            <p className="mt-4 text-gray-600">{description}</p>
        </div></div>  
    );
}

export default SectionHeading;