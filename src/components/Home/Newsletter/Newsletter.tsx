import React from 'react';

const Newsletter = () => {
    return (

        <div className="flex flex-col relative p-10">
            <div className="text-black ml-5 px-4 py-10 xl:px-24 xl:py-20 justify-center items-center xl:flex xl:flex-row md:flex-row gap-2">
            <div className="xl:w-2/3 sm:w-full md:w-full md:flex flex-col md:flex-row">
                <form className="mt-4 flex flex-col md:flex-row w-full">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-t-md md:rounded-l-md md:rounded-t-none w-full"
                />
                <button
                    type="submit"
                    className="p-2 bg-relative md:px-10 md:py-2.5 px-8 py-2 text-black text-base bg-yellow-300 transition-all duration-300 border-2 border-transparent hover:bg-yellow-400 rounded-b-md md:rounded-r-md md:rounded-b-none"
                >
                    Subscribe
                </button>
                </form>
            </div>
            <div className="sm:w-full sm:mt-10 xl:w-1/3 lg:w-full lg:pt-5 xl:text-right sm:text-center lg:text-center md:text-center  md:mt-0">
                <h1 className="text-2xl md:pb-2 xl:mt-0 xl:pt-0 md:pt-10 xl:pb-0 sm:pb-2">Your Travel Journey Starts Here</h1>
                <p className="text-base xl:text-lg">Subscribe & we will send the best deals to you.</p>
            </div>
            </div>
        </div>

       
   
    );
};

export default Newsletter;