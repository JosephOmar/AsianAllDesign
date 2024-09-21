"use client"
import React, {useEffect, useState} from 'react'
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
  const [selectedClothing, setSelectedClothing] = useState<string>('Polo')
  let [newPrice, setNewPrice] = useState<number>(35)

  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategory = () => {
      if (product.name.includes("One Piece")) {
        setCategory("one-piece");
      } else if (product.name.includes("Demon Slayer")) {
        setCategory("demon-slayer");
      } else {
        setCategory(product.slug.split("-")[0].toLocaleLowerCase());
      }
    }

    getCategory();
  }, [product]);

  useEffect(() => {
    const changePrice = () => {
      if (selectedClothing === "Polo") {
        setNewPrice(35);
      } else if (selectedClothing === "Polera Sin Capucha") {
        setNewPrice(50);
      } else if (selectedClothing === "Polera Con Capucha") {
        setNewPrice(55);
      } else if (selectedClothing === "Polera Con Cierre") {
        setNewPrice(60);
      }
    };

    changePrice(); 
  }, [selectedClothing]); 

  if (!category) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='py-10'>
      <div className='max-w-[1100px] w-[90%] mx-auto grid sm:grid-cols-2 gap-5'>
      <section className='sm:order-2'>
          <GaleryProducts category={category} images={product.images} alt={product.shortDescription}/>
        </section>
        <section className=' overflow-hidden'>
          <div className='flex justify-between text-3xl font-bold'>
            <div className='flex flex-col gap-3'>
              <h2>{selectedClothing} {product.name}</h2>
              <h3 className='text-xs font-normal'>{product.shortDescription}</h3>
            </div>
            <p className='text-4xl flex flex-col'><span className='line-through text-sm pr-2'>S/{newPrice+10}</span>S/{newPrice}.00</p>
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
          <RadioButton 
            options={["Polo", "Polera Sin Capucha", "Polera Con Capucha", "Polera Con Cierre"]}
            name="Prenda"
            color={["#000000", "#000000", "#000000", "#000000"]}
            selected={selectedClothing} 
            onChange={setSelectedClothing} 
          />
          <CounterProduct />
          <AddProductToCart product={{ ...product, name: selectedClothing+' '+product.name,price: newPrice, color: selectedColor, size: selectedSize, clothing: selectedClothing, category: category }}/>
          <div className='text-center pt-3 pb-6'>
            <span className='inline-block w-[90%] h-[2px] bg-[#edcbd6]'></span>
          </div>
          <div className="grid gap-4 text-sm leading-loose">
            <h2 className="font-bold text-2xl">Detalles del producto</h2>
            <div>
              <p>
                {product.description}
              </p>
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
      </div>
    </div>
  )
}

export default InfoProduct
