"use client"

import React from 'react'
import { Typography } from '@material-tailwind/react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const FooterMain = () => {

  
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <footer className="w-full  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className='flex gap-5 justify-center items-center'>
          <Image src="/AsianAllDesign.svg" height={60} width={60} alt="Logo Asian All Design" priority></Image>
          <Image src="/AsianAllDesignText.svg" height={60} width={120} alt="Logo Asian All Design" priority></Image>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_MY_URL}/categorias`}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Categorias
            </Link>
          </li>
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_MY_URL}/terminos-y-condiciones`}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terminos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_MY_URL}/diseno-exclusivo`}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Diseño Exclusivo
            </Link>
          </li>
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_MY_URL}/contactanos`}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Asian All Design
      </Typography>
    </footer>
  )
}

export default FooterMain