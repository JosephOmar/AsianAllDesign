"use client"

import CategoryCard from '@/components/categories/CategoryCard'
import React, {useEffect, useState} from 'react'


interface Category {
  name: string,
  description: string,
  slug: string,
  image: string
}

const CategoriesPages = () => {

  const [categories, setCategories] = React.useState<Category[]>([])
  
  const getCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCategories(data.map((categorie: Category) => ({
        name: categorie.name,
        description: categorie.description,
        slug: categorie.slug,
        image: categorie.image
      })));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className=''>
      <section className='py-10'>
        <div className='text-center'>CATEGORIAS</div>
        <div className='w-[90%] max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
        {
          categories.map((categorie, index) => (
            <div key={index} className='flex justify-center items-center'>
              <CategoryCard categorie={categorie}/>
            </div>
          ))
        }
        </div>
      </section>
    </div>
  )
}

export default CategoriesPages