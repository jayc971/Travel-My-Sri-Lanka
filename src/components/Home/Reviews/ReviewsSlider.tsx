'use client'
import React from "react"
import {topExperiences} from '@/data/data'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import {EffectCards} from 'swiper/modules';
import Image from 'next/image';

function ReviewsSlider() {
    return (

        <Swiper effect={'cards'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} pagination={true} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]' modules={[EffectCards]}>
            {
                topExperiences.map((experience, index) => (
                    <SwiperSlide key={index} className="bg-white from-[#ff5f6d] to-[#ffc371] p-5 rounded-lg">
                        <div className="text-black">
                            <div>
                                <h3 className='text-lg font-semibold'>{experience.title}</h3>
                                <p className='text-gray-700'>{experience.description}</p>
                            </div>
                            <Image src={experience.image || '/default-image.jpg'} alt={experience.title} width={500} height={300} className='w-full h-48 object-cover rounded-lg mt-5' />
                        </div>
                    </SwiperSlide>
                ))
            }</Swiper>
               
    )
}

export default ReviewsSlider;