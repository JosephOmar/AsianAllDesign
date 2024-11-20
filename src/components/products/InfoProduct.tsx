"use client";
import React, { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import CounterProduct from "./CounterProduct";
import AddProductToCart from "./AddProductToCart";
import GaleryProducts from "./GaleryProducts";
import Link from "next/link";
import { Product } from "@/types/Product-Type";

//! INTERFAZ PARA LAS PROPIEDADES DEL COMPONENTE
interface InfoProductProps {
  product: Product; //! Objeto del producto con sus datos
}

const InfoProduct: React.FC<InfoProductProps> = ({ product }) => {
  //! ESTADOS PARA GESTIONAR LAS SELECCIONES DEL USUARIO
  const [selectedColor, setSelectedColor] = useState<string>("Negro"); // Valor predeterminado del color
  const [selectedSize, setSelectedSize] = useState<string>("M"); // Valor predeterminado de la talla
  const [selectedClothing, setSelectedClothing] = useState<string>("Polo"); // Valor predeterminado de la prenda
  let [newPrice, setNewPrice] = useState<number>(35); // Precio inicial

  //! ESTADO PARA LA CATEGORÍA DEL PRODUCTO
  const [category, setCategory] = useState("");

  //! EFECTO PARA OBTENER LA CATEGORÍA DEL PRODUCTO BASADA EN SU NOMBRE O SLUG
  useEffect(() => {
    const getCategory = () => {
      if (product.name.includes("One Piece")) {
        setCategory("one-piece");
      } else if (product.name.includes("Demon Slayer")) {
        setCategory("demon-slayer");
      } else {
        setCategory(product.slug.split("-")[0].toLocaleLowerCase());
      }
    };

    getCategory();
  }, [product]);

  //! EFECTO PARA CAMBIAR EL PRECIO SEGÚN LA PRENDA SELECCIONADA
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

  //! MUESTRA UN MENSAJE DE CARGA SI LA CATEGORÍA TODAVÍA NO ESTÁ DISPONIBLE
  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10">
      <div className="max-w-[1100px] w-[90%] mx-auto grid sm:grid-cols-2 gap-5">
        {/* GALERÍA DE IMÁGENES DEL PRODUCTO */}
        <section className="sm:order-2">
          <GaleryProducts
            category={category}
            images={product.images}
            alt={product.shortDescription}
          />
        </section>

        {/* INFORMACIÓN DEL PRODUCTO */}
        <section className="overflow-hidden">
          {/* TITULO Y PRECIO DEL PRODUCTO */}
          <div className="flex justify-between text-3xl font-bold">
            <div className="flex flex-col gap-3">
              <h2>
                {selectedClothing} {product.name}
              </h2>
              <h3 className="text-xs font-normal">{product.shortDescription}</h3>
            </div>
            <p className="text-4xl flex flex-col">
              <span className="line-through text-sm pr-2">
                S/{newPrice + 10}
              </span>
              S/{newPrice}.00
            </p>
          </div>

          {/* OPCIONES DE COLOR, TALLA Y PRENDA */}
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
            options={[
              "Polo",
              "Polera Sin Capucha",
              "Polera Con Capucha",
              "Polera Con Cierre",
            ]}
            name="Prenda"
            color={["#000000", "#000000", "#000000", "#000000"]}
            selected={selectedClothing}
            onChange={setSelectedClothing}
          />

          {/* CONTADOR DE PRODUCTOS Y BOTÓN PARA AÑADIR AL CARRITO */}
          <CounterProduct />
          <AddProductToCart
            product={{
              ...product,
              name: selectedClothing + " " + product.name,
              price: newPrice,
              color: selectedColor,
              size: selectedSize,
              clothing: selectedClothing,
              category: category,
            }}
          />

          {/* SEPARADOR */}
          <div className="text-center pt-3 pb-6">
            <span className="inline-block w-[90%] h-[2px] bg-[#edcbd6]"></span>
          </div>

          {/* DETALLES DEL PRODUCTO */}
          <div className="grid gap-4 text-sm leading-loose">
            <h2 className="font-bold text-2xl">Detalles del producto</h2>
            <div>
              <p>{product.description}</p>
              <p className="font-semibold">Tallas</p>
              <p>
                Disponible en tallas XS, S, M, L y XL. Consulta la
                <Link
                  href={`${process.env.NEXT_PUBLIC_MY_URL}/guia-de-tallas`}
                  className="font-semibold px-2"
                >
                  guía de tallas
                </Link>
                para encontrar la mejor opción para ti.
              </p>
            </div>
            <div>
              <p className="font-semibold">Materiales</p>
              <p>
                Hecho con una mezcla de 60% algodón peinado de anillo y 40%
                poliéster. Tela suave y transpirable.
              </p>
            </div>
            <div>
              <p className="font-semibold">Cuidados</p>
              {product.careInstructions.map((instruction) => (
                <div key={instruction}>- {instruction}</div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoProduct;
