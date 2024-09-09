import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Category {
  name: string,
  description: string,
  slug: string,
  image: string,
}

const CategoryCard = ({categorie} : {categorie: Category}) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_MY_URL}/categorias/${categorie.slug}`} className='flex flex-col gap-4'>
      <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/categories/${categorie.image}`} alt={categorie.description} width={120} height={120} className=' rounded-full'></Image> 
      <p className='font-exl text-[#af69cd] dark:text-[#56008c] text-center'>{categorie.name}</p>
    </Link>
  )
}

export default CategoryCard