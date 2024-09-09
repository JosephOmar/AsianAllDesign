"use client"
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useOrderStore } from '@/store/orderStore'

const PurchaseSummary = () => {
  const cart = useCartStore((state) => state.cart)
  const pickup = useCartStore((state) => state.pickup)
  const totalPrice = useCartStore((state) => state.totalPrice)

  const { name, lastname, email, phone, dni, address, reference, district } = useOrderStore((state) => state.order);
  
  const isFormComplete = name && lastname && email && phone && dni && (pickup || (address && reference && district));

  return (
    <div >
      <div className='flex flex-col gap-1'>  
      {
        cart.map((product, index) => (
          <div key={index} className='grid grid-cols-[auto_auto_1fr] gap-2 justify-between'>
            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products${product.images[0]}`} alt={product.description} width={60} height={60} className='rounded-lg'/>
            <div className='text-sm'>
              <div>{product.shortDescription}</div>
              <div>cantidad: {product.quantity}</div>
              <div>Talla: {product.size} / Color: {product.color}</div>
            </div>
            <div className='text-end'>precio: <span className='text-black font-semibold'>S/{product.price}.00</span></div>
          </div>     
        ))
      }
      </div>
      <span className='inline-block w-full h-[2px] bg-black'></span>
      <div className='*:flex *:justify-between'>
        <div>
          <div>Subtotal</div>
          <div>S/{totalPrice}.00</div>
        </div>
        <div>
          {
            (pickup) ? (<div>Recojo:</div>) : (<div>Envio:</div>)
          }
          {
            (pickup) ? (<div>Gratis</div>) : (<div>S/10.00</div>)
          }
        </div>
        <div className='font-bold'>
          <div>Total:</div>
          {
            (pickup) ? (<div>S/{totalPrice}.00</div>) : (<div>S/{totalPrice + 10}.00</div>)
          }
        </div>
      </div>
      <div className='flex justify-end'>
        {isFormComplete ? (
          <Link href={`${process.env.NEXT_PUBLIC_MY_URL}/pagos/metodos-de-pago`}>
            Continuar con pago
          </Link>
        ) : (
          <span className='text-gray-500 cursor-not-allowed'>Completa todos los campos del formulario</span>
        )}
      </div>
    </div>
  )
}

export default PurchaseSummary