import React from 'react';
import Image from 'next/image';

type Props = {
        hotel:{
            id: number;
            image: string;
            name: string;
            location: string;
            rating: number;
            reviews: number;
            price: string;
        }
}

function HotelCard({hotel}: Props) {
    return (
        <div key={hotel.id} className='grid cursor-pointer'>
            <div key={hotel.id} className='bg-white p-5 shadow-lg rounded-lg relative flex flex-col h-full'>
            <div className='overflow-hidden rounded-t-lg'>
                <Image 
                    src={hotel.image} 
                    alt={hotel.name} 
                    width={500} 
                    height={300} 
                    className='w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110' 
                />
            </div>
            <div className='p-4 flex-grow'>
                <h1 className='text-2xl font-semibold'>{hotel.name}</h1>
                <p className='text-gray-600'>{hotel.location}</p>
            </div>
            <div className='p-4 mt-auto'>
                <div className='block'>
                <span className='text-yellow-500'>{'⭐'.repeat(hotel.rating)}</span>
                <span className='text-gray-600 ml-2'>({hotel.reviews} reviews)</span>
                </div>
                <p className='text-lg font-semibold mt-2'>{hotel.price}</p>
            </div>
            </div>
        </div>
    )
}

export default HotelCard;