import React from 'react';
import { FaArrowRight, FaMap } from 'react-icons/fa';
import { FaCalendarWeek, FaUserGroup } from 'react-icons/fa6';

function SearchBox() {
    return (
       
            <div className='bg-white bg-opacity-50 rounded-lg p-8 w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-6 sm:mt-12 w-[95%] sm:w-[80%]'>
                {/* Location */}
                <div className="flex items-center space-x-6">
                    <FaMap className="w-6 h-6 mt-8 text-white"/>
                    <div className="flex-1">
                        <p className='text-lg font-medium mb-[0.2rem] ml-2'>Location</p>
                        <input type='text' placeholder='Where are you going?' className='w-full p-2 border border-gray-300 border-opacity-40 rounded-md outline-none placeholder:text-gray-800 hover:shadow-lg cursor-pointer'/>
                    </div>
                </div>
                {/* Start Date */}
                <div className="flex items-center space-x-6">
                    <FaCalendarWeek className="w-6 mt-8 h-6 text-white"/>
                    <div className="flex-1">
                        <p className='text-lg font-medium mb-[0.2rem] ml-2'>Start Date</p>
                        <input type='date'  className='w-full p-2 border border-gray-300 border-opacity-40 rounded-md outline-none placeholder:text-gray-800 hover:shadow-lg cursor-pointer'/>
                    </div>
                </div>
                {/* End Date */}
                <div className="flex items-center space-x-6">
                    <FaCalendarWeek className="w-6 mt-8 h-6 text-white"/>
                    <div className="flex-1">
                        <p className='text-lg font-medium mb-[0.2rem] ml-2'>End Date</p>
                        <input type='date'  className='w-full p-2 border border-gray-300 border-opacity-40 rounded-md outline-none placeholder:text-gray-800 hover:shadow-lg cursor-pointer'/>
                    </div>
                </div>
                {/* Guests */}
                <div className="flex items-center space-x-6">
                    <FaUserGroup className="w-6 h-6 mt-8 text-white"/>
                    <div className="flex-1">
                        <p className='text-lg font-medium mb-[0.2rem] ml-2'>Guests</p>
                        <input type='number' min="1" defaultValue="1" className='w-full p-2 border border-gray-300 border-opacity-40 rounded-md outline-none placeholder:text-gray-800 hover:shadow-lg cursor-pointer'/>
                    </div>  {/* Search */}
                <div className="flex items-center space-x-6 mt-8 p-3 bg-white rounded-full cursor-pointer hover:shadow-lg">
                    <FaArrowRight className='text-black'/>
                </div>
                </div>
              
                
                
            </div>
    
    )}

export default SearchBox;