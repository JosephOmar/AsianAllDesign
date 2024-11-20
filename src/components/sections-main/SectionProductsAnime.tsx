import React from 'react'
import ProductCard from '../ProductCard'
import { Product } from '@/types/Product-Type'

//! Componente que muestra una sección de productos de anime
const SectionProductsAnime = async () => {

  //! OBTIENE 4 PRODUCTOS DE LA CATEGORÍA 2 DESDE EL BACKEND
  const products: Product[] = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?category=2&limit=4&offset=2`)
    .then((res) => res.json()) //! Convierte la respuesta de la API a JSON

  return (
    //! Contenedor principal de la sección
    <section className="w-[95%] max-w-[1300px] mx-auto my-[20px]">
      {/* Título de la sección */}
      <h3 className="font-exl text-center text-4xl font-semibold text-[#8b52fe] py-5">PRODUCTOS ANIMES</h3>
      {/* Contenedor de la cuadrícula para los productos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 *:flex *:justify-center *:items-center">
        {
          products.map((product) => (
            //! Cada producto tiene un contenedor con clave única basada en su ID
            <div className="" key={product.productId}>
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SectionProductsAnime
