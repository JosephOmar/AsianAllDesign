"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Carousel = () => {
  const pathname = usePathname();


  if (pathname.startsWith('/dashboard') || pathname.startsWith('/pagos') || pathname.startsWith('/productos')) {
    return null;
  }
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[480px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider-main/slider-main-1.webp`}
          fill={true}
          alt='Foto para el carousel 1'
          priority
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[480px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider-main/slider-main-2.webp`}
          fill={true}
          alt='Foto para el carousel 2'
          priority
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[480px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider-main/slider-main-3.webp`}
          fill={true}
          alt='Foto para el carousel 3'
          priority
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[480px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider-main/slider-main-4.webp`}
          fill={true}
          alt='Foto para el carousel 4'
          priority
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
