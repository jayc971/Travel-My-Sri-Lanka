import React from 'react';
import Image from 'next/image';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Nav = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center flex-col'>
                    <Image src="/images/logo/Logo.png" alt="Travel My Sri Lanka Logo" width={40} height={40} priority />
                </div>
                <div className='leading-tight'>
                    <h1 className='text-white text-2xl font-bold tracking-widest '>Travel</h1>
                    <p className='text-white text-sm tracking-wide leading-none'>My Sri Lanka</p>
                </div>
            </div>
            {/* Nav Links */}
            <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (<Link href={link.url} key={link.id}>
                            <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-y-0 after:hover:scale-y-100 after:transition duration-200 after:origin-top'>{link.label}</p>
                            </Link>)
                    })}
            </div>
            {/* Buttons */}
            <div className="flex items-center space-x-4">
                <button className="relative md:px-10 md:py-2.5 px-8 py-2 text-black text-base bg-yellow-300 transition-all duration-300 rounded-lg border-2 border-transparent hover:bg-yellow-400">
                    Book Now
                </button>
            </div>
            {/* Hamburger Menu */}
            <div className='lg:hidden'>
                <MobileNav/>
            </div>
        </div>
    </div>
  );
}

export default Nav;