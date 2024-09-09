"use client"
import React, {useState} from 'react'
import RadioButton from './RadioButton';
import CounterProduct from './CounterProduct';
import AddProductToCart from './AddProductToCart';
import GaleryProducts from './GaleryProducts';
import Link from 'next/link';
import { Product } from '@/types/Product-Type';

interface InfoProductProps {
  product: Product;
}



const InfoProduct: React.FC<InfoProductProps>  = ({product} ) => {

  const [selectedColor, setSelectedColor] = useState<string>('Negro'); // Valor predeterminado
  const [selectedSize, setSelectedSize] = useState<string>('M');

  return (
    <div className='py-10'>
      <div className='max-w-[1100px] w-[90%] mx-auto grid grid-cols-2 gap-5'>
        <section>
          <div className='flex justify-between text-3xl font-bold'>
            <div className='flex flex-col gap-3'>
              <h2>{product.shortDescription}</h2>
              <h3 className='text-xs font-normal'>{product.description}</h3>
            </div>
            <p className='text-4xl flex flex-col'><span className='line-through text-sm pr-2'>S/40.00</span>S/{product.price}.00</p>
          </div>
          <RadioButton 
            options={["Negro", "Blanco", "Azul", "Lila", "Rosado"]}
            name="Color"
            color={["#000000", "#FFFFFF", "#0000f9", "#41015b", "#edcbd6"]}
            selected={selectedColor} 
            onChange={setSelectedColor} 
          />
          <RadioButton 
            options={["XS", "S", "M", "L", "XL"]}
            name="Talla"
            color={["#000000", "#000000", "#000000", "#000000", "#000000"]}
            selected={selectedSize} 
            onChange={setSelectedSize} 
          />
          <CounterProduct />
          <AddProductToCart product={{ ...product, color: selectedColor, size: selectedSize }}/>
          <div className='text-center pt-3 pb-6'>
            <span className='inline-block w-[90%] h-[2px] bg-[#edcbd6]'></span>
          </div>
          <div className="grid gap-4 text-sm leading-loose">
            <h2 className="font-bold text-2xl">Detalles del producto</h2>
            <div>
              <h3 className="font-semibold">Tallas</h3>
              <p>
                Disponible en tallas XS, S, M, L y XL. Consulta la 
                <Link 
                  href={`${process.env.NEXT_PUBLIC_MY_URL}/guia-de-tallas`}
                  className='font-semibold px-2'
                >
                  guía de tallas
                </Link> 
                 para encontrar la mejor opción para ti.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Materiales</h3>
              <p>Hecho con una mezcla de 60% algodón peinado de anillo y 40% poliéster. Tela suave y transpirable.</p>
            </div>
            <div>
              <h3 className="font-semibold">Cuidados</h3>
              {
                product.careInstructions.map((instruction, index) => (
                  <p key={index}>- {instruction}</p>
                ))
              }
            </div>
          </div>
        </section>
        <section>
          <GaleryProducts images={product.images} alt={product.shortDescription}/>
        </section>
      </div>
    </div>
    
    
  )
}

export default InfoProduct
