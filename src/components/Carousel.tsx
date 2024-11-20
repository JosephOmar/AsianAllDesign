"use client"

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual
import { Carousel } from '@material-tailwind/react'; // Importa el componente Carousel de Material Tailwind

const CarouselMain = () => {
  const pathname = usePathname(); // Obtiene la ruta actual de la página

  // Si la ruta actual es '/dashboard', '/pagos' o '/productos', no muestra el carrusel
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/pagos') || pathname.startsWith('/productos')) {
    return null; // No renderiza el carrusel en esas rutas
  }

  return (
    // Componente Carousel de Material Tailwind con estilos aplicados
    <Carousel className="rounded-xl max-h-[560px] overflow-hidden">
      {/* Imagen 1 del carrusel */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-1.webp`} // URL de la imagen
        height={560} // Altura de la imagen
        width={1920} // Ancho de la imagen
        alt='Foto para el carousel 1' // Descripción alternativa de la imagen
        priority // Marca esta imagen como prioridad para ser cargada primero
      />
      {/* Imagen 2 del carrusel */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-2.webp`} // URL de la imagen
        height={560} // Altura de la imagen
        width={1920} // Ancho de la imagen
        alt='Foto para el carousel 2' // Descripción alternativa de la imagen
        priority // Marca esta imagen como prioridad para ser cargada primero
      />
      {/* Imagen 3 del carrusel */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-3.webp`} // URL de la imagen
        height={560} // Altura de la imagen
        width={1920} // Ancho de la imagen
        alt='Foto para el carousel 3' // Descripción alternativa de la imagen
        priority // Marca esta imagen como prioridad para ser cargada primero
      />
      {/* Imagen 4 del carrusel */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/slider/slider-main-4.webp`} // URL de la imagen
        height={560} // Altura de la imagen
        width={1920} // Ancho de la imagen
        alt='Foto para el carousel 4' // Descripción alternativa de la imagen
        priority // Marca esta imagen como prioridad para ser cargada primero
      />
    </Carousel>
  );
}

export default CarouselMain;
