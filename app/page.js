"use client"
import * as React from 'react';
import Gradient from '../components/Gradient';
import HeroSection from '../components/HeroSection';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center gap-16'>
        <Gradient />
        <HeroSection />
        <ImageSlider />
      </div>
    </main>
  )
}
