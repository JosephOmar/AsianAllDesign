"use client";
import React, { useState } from "react";
import Image from "next/image";

// Propiedades del componente
interface GaleryProps {
  images: string[];
  alt: string;
  category: string;
}

const GaleryProducts: React.FC<GaleryProps> = ({ category, images, alt }) => {
  // Validar si `images` contiene elementos antes de asignar el estado inicial
  const [imageMain, setImageMain] = useState<string>(images.length > 0 ? images[0] : "");

  if (images.length === 0) {
    return <p>No hay imágenes disponibles.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Imagen principal */}
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products/${category}${imageMain}`}
          width={400}
          height={400}
          alt={alt}
          className="rounded-xl"
          priority
        />
      </div>
      
      {/* Miniaturas */}
      <div className="flex gap-4">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products/${category}${images[index]}`}
            width={100}
            height={100}
            alt={`Miniatura de ${alt}`}
            className="rounded-lg cursor-pointer"
            onClick={() => setImageMain(images[index])}
            aria-label={`Seleccionar ${alt} imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GaleryProducts;
