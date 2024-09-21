"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Carousel } from '@material-tailwind/react';

const CarouselMain = () => {
  const pathname = usePathname();


  if (pathname.startsWith('/dashboard') || pathname.startsWith('/pagos') || pathname.startsWith('/productos')) {
    return null;
  }
  return (
    <Carousel className="rounded-xl max-h-[560px] overflow-hidden">
      <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-1.webp`}
          height={560}
          width={1920}
          alt='Foto para el carousel 2'
          priority
        />
      <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-2.webp`}
          height={560}
          width={1920}
          alt='Foto para el carousel 2'
          priority
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-3.webp`}
          height={560}
          width={1920}
          alt='Foto para el carousel 2'
          priority
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-4.webp`}
          height={560}
          width={1920}
          alt='Foto para el carousel 2'
          priority
        />
    </Carousel>
  );
}

export default CarouselMain
