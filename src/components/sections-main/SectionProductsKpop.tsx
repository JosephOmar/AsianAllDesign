import React from 'react'
import ProductCard from '../ProductCard'
import { Product } from '@/types/Product-Type'

//! Componente que muestra una sección de productos de K-pop
const SectionProductsKpop = async () => {

  //! OBTIENE 4 PRODUCTOS DE LA CATEGORÍA 1 DESDE EL BACKEND
  const products: Product[] = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?category=${1}&limit=4&offset=8`)
    .then((res) => res.json()) //! Convierte la respuesta de la API a JSON

  return (
    //! Sección principal que contiene el título y la cuadrícula de productos
    <section className="w-[95%] max-w-[1300px] mx-auto my-[20px]">
      {/* Título de la sección */}
      <h3 className="font-exl text-center text-4xl font-semibold text-[#8b52fe] py-5">PRODUCTOS K POP</h3>
      
      {/*  Contenedor para organizar los productos en una cuadrícula */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 *:flex *:justify-center *:items-center">
        {         
          products.map((product) => (  
            <div className="" key={product.productId}>
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SectionProductsKpop
