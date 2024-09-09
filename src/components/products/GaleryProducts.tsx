"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface GaleryProps {
  images: string[],
  alt: string
}

const GaleryProducts: React.FC<GaleryProps> = ({images, alt}) => {

  const [imageMain, setImageMain] = useState<string>(images[0])

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products${imageMain}`} width={400} height={400} alt={alt} className='rounded-xl'/>
      </div>
      <div className='flex gap-4'>
        {
          images.map((image, index) => (
            <Image 
              key={index} 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products${images[index]}`} 
              width={100} 
              height={100} 
              alt={alt} 
              className='rounded-lg'
              onClick={() => setImageMain(images[index])}
            />
          ))
        }
      </div>
    </div>
  )
}

export default GaleryProducts