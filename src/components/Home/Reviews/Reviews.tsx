import React from "react"
import ReviewsSlider from "./ReviewsSlider";


function Reviews() {
    return (
        
        <div className='flex flex-col xl:flex-row justify-center items-center relative space-x-0 xl:space-x-4 bg-blue-950 p-10'>
            <div className='text-white w-full xl:w-1/2 ml-5 px-4 py-10 xl:px-24 xl:py-20 justify-center items-center '>
            <h1 className='text-2xl xl:text-3xl pb-5'>Start Your Adventure Today</h1>
            <p className='text-base xl:text-lg mt-4'>Your dream Sri Lankan adventure is just a click away. Whether you’re a solo traveler, a couple on a romantic getaway, or a family seeking new experiences, we have something for everyone. Let’s create memories that last a lifetime.</p>
            </div>
            <div className='w-full xl:w-1/2 flex justify-center items-center'>
            <ReviewsSlider />
            </div>
        </div>
    )
}

export default Reviews;