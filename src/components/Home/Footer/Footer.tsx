import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <>
        <div className='flex flex-col xl:flex-row md:justify-center text-white md:items-center relative space-x-0 xl:space-x-4 bg-blue-950 p-10 transition-all duration-200 z-[1000] sm:text-center sm:items-center sm:justify-center'>
           <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start"><Image src="/images/logo/Logo.png" alt="Travel My Sri Lanka Logo" width={100} height={100} priority /></div>
            <div className="pl-0 ml-0">
            <h3 className="text-lg font-semibold mb-2">Travel My Sri Lanka</h3>
            <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Travel News</a></li>
            </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-gray-400">
                <FaFacebook/>
                </a>
                <a href="#" className="hover:text-gray-400">
                <FaInstagram/>
                </a>
                <a href="#" className="hover:text-gray-400">
                <FaLinkedin/>
                </a>
                <a href="#" className="hover:text-gray-400">
                   <FaXTwitter/>
                </a>
            </div>
            </div>
        </div>
        </div>
           </div>  
        
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Travel My Sri Lanka. All rights reserved.</p>
        </div>
        </footer></>  
    
    );
}

export default Footer;