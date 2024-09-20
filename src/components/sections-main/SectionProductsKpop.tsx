import React from 'react'
import ProductCard from '../ProductCard'
import { Product } from '@/types/Product-Type'

const SectionProductsKpop = async () => {

  const products: Product[] = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?category=${1}&limit=4&offset=8`).then((res) => res.json())

  return (
    <section className="w-[95%] max-w-[1300px] mx-auto my-[20px]">
       <h3 className="font-exl text-center text-4xl font-semibold text-[#8b52fe] py-5">PRODUCTOS K POP</h3>
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 *:flex *:justify-center *:items-center">
        {
          products.map((product, index) => (
            <div className="" key={index}>
              <ProductCard product={product} />
            </div>
          ))
        }
       </div>
    </section>
  )
}

export default SectionProductsKpop