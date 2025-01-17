import React from 'react';
import Hero from './Hero/Hero';
import Destinations from './Destinations/Destinations';
import Hotels from './Hotels/Hotels';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Reviews from './Reviews/Reviews';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';

function Home() {
  return (
        <>
        <Hero/>
        <Destinations/>
        <WhyChooseUs/>
        <Hotels/>
        <Reviews/>
        <Newsletter/>
        <Footer/>
        </>
  );
}

export default Home;