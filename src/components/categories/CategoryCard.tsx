import Image from "next/image";
import Link from "next/link";
import React from "react";

// Definición de la interfaz que representa una categoría
interface Category {
  name: string; // Nombre de la categoría
  description: string; // Descripción de la categoría
  slug: string; // Slug para usar en la URL
  image: string; // Imagen asociada con la categoría
}

// Componente que representa una tarjeta de categoría
const CategoryCard = ({ categorie }: { categorie: Category }) => {
  return (
    <Link
      // El enlace lleva a la página de detalles de la categoría usando el slug
      href={`${process.env.NEXT_PUBLIC_MY_URL}/categorias/${categorie.slug}`}
      className="flex flex-col gap-4" // Clases de Tailwind para el estilo del contenedor
    >
      {/* Imagen de la categoría, su src depende de la URL de las imágenes configurada */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/categories/${categorie.image}`}
        alt={categorie.description} // Se usa la descripción como alt
        width={120} // Ancho de la imagen
        height={120} // Alto de la imagen
        className=" rounded-full" // Clase de Tailwind para hacer la imagen redonda
      ></Image>
      
      {/* Nombre de la categoría con estilos de color adaptables */}
      <p className="font-exl text-[#af69cd] dark:text-[#56008c] text-center">
        {categorie.name}
      </p>
    </Link>
  );
};

export default CategoryCard;