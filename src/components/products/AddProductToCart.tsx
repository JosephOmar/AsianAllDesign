"use client";

import React from "react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/Product-Type";

interface InfoProductProps {
  product: Product;
}

const AddProductToCart: React.FC<InfoProductProps> = ({ product }) => {
  // Acceso a la función de Zustand
  const addCartProduct = useCartStore((cart) => cart.addToCart);

  // Manejar el evento de agregar al carrito
  const handleAddCartProduct = () => {
    if (product && product.name && product.price) {
      addCartProduct(product);
      console.log(`Producto agregado al carrito: ${product.name}`);
      // Aquí se puede implementar una notificación o retroalimentación al usuario
    } else {
      console.error("El producto no tiene información válida.");
    }
  };

  return (
    <div className="py-3">
      <button
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        onClick={handleAddCartProduct}
        aria-label={`Agregar ${product.name} al carrito`}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default AddProductToCart;
