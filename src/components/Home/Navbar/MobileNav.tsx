'use client'
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { navLinks } from '@/constant/constant';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeMenu);

        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <div className="relative">
            {/* Hamburger/Close Icon */}
            <div
                ref={menuRef}
                className="cursor-pointer p-2 rounded-md border border-gray-300 bg-gray-100"
                onClick={toggleMenu}
            >
                {isOpen ? (
                    // Close Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800 transition-transform duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800 transition-transform duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 6h18M3 12h18M3 18h18"
                        />
                    </svg>
                )}
            </div>

            {/* Dropdown Menu */}
            <div className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out text-center z-50 ${isOpen ? 'top-40 translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id} className='relative text-black text-base font-medium w-fit block left-7 p-4 after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-y-0 after:hover:scale-y-100 after:transition duration-200 after:origin-top'>
                                {link.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileNav;
