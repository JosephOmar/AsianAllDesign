"use client"

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import { Product } from '@/types/Product-Type'

interface InfoProductProps {
  product: Product
}

const AddProductToCart: React.FC<InfoProductProps> = ({product}) => {
  const addCartProduct = useCartStore((cart) => cart.addToCart)

  const handleAddCartProduct = () => {
    addCartProduct(product)
  }
  return (
    <div className='py-3'>
      <button className='bg-black text-white px-4 py-2 rounded-lg' onClick={handleAddCartProduct}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default AddProductToCart