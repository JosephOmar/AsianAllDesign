"use client" // Asegura que este componente se ejecute en el cliente (solo en el navegador)
import React from 'react'
import { useCartStore } from '@/store/cartStore' // Importa el hook de estado para el carrito de compras
import Image from 'next/image' // Importa el componente Image de Next.js para imágenes optimizadas
import { Link } from 'next-view-transitions' // Importa el componente Link para navegación entre páginas con transiciones
import { useOrderStore } from '@/store/orderStore' // Importa el hook de estado para el formulario de pedido

const PurchaseSummary = () => {
  // Obtiene los estados del carrito, tipo de envío/pickup y precio total
  const cart = useCartStore((state) => state.cart)
  const pickup = useCartStore((state) => state.pickup)
  const totalPrice = useCartStore((state) => state.totalPrice)

  // Obtiene los datos del pedido desde el estado global
  const { name, lastname, email, phone, dni, address, reference, district } = useOrderStore((state) => state.order);
  
  // Verifica si todos los campos del formulario de pedido están completos
  const isFormComplete = name && lastname && email && phone && dni && (pickup || (address && reference && district));

  return (
    <div>
      {/* Muestra los productos del carrito */}
      <div className='flex flex-col gap-1'>  
      {
        cart.map((product) => (
          <div key={product.productId} className='grid grid-cols-[auto_auto_1fr] gap-2 justify-between'>
            {/* Muestra la imagen del producto con una URL dinámica */}
            <Image 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products/${product.category}${product.images[0]}`} 
              alt={product.description} 
              width={60} 
              height={60} 
              className='rounded-lg' 
            />
            {/* Detalles del producto */}
            <div className='text-sm'>
              <div>{product.name}</div>
              <div>cantidad: {product.quantity}</div>
              <div>Talla: {product.size} / Color: {product.color}</div>
            </div>
            {/* Muestra el precio del producto */}
            <div className='text-end'>
              precio: <span className='text-black font-semibold'>S/{product.price}.00</span>
            </div>
          </div>     
        ))
      }
      </div>
      {/* Separador visual */}
      <span className='inline-block w-full h-[2px] bg-black'></span>
      {/* Información del resumen de la compra */}
      <div className='*:flex *:justify-between'>
        <div>
          <div>Subtotal</div>
          {/* Muestra el subtotal del precio */}
          <div>S/{totalPrice}.00</div>
        </div>
        <div>
          {/* Muestra si es un pickup o envío, y su costo */}
          {
            (pickup) ? (<div>Recojo:</div>) : (<div>Envio:</div>)
          }
          {
            (pickup) ? (<div>Gratis</div>) : (<div>S/10.00</div>)
          }
        </div>
        <div className='font-bold'>
          <div>Total:</div>
          {/* Muestra el total sumando el costo de envío si no es pickup */}
          {
            (pickup) ? (<div>S/{totalPrice}.00</div>) : (<div>S/{totalPrice + 10}.00</div>)
          }
        </div>
      </div>
      {/* Botón para continuar con el pago, si el formulario está completo */}
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
