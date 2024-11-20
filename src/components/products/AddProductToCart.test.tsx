import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Product } from "@/types/Product-Type";
import AddProductToCart from "./AddProductToCart";

// Mock de Zustand
jest.mock("@/store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockAddToCart = jest.fn();

describe("AddProductToCart Component", () => {
  beforeEach(() => {
    // Reseteamos los mocks antes de cada prueba
    jest.clearAllMocks();
    const useCartStore = require("@/store/cartStore").useCartStore;
    useCartStore.mockImplementation((selector: any) => selector({ addToCart: mockAddToCart }));
  });

  test("calls addCartProduct when the button is clicked", () => {
    const product: Product = {
      productId: 34,
      slug: "producto",
      name: "Mi Producto",
      shortDescription: "Descripción 1 del producto",
      description: "Descripción 2 del producto",
      price: 35,
      stock: 20,
      images: ["Imagen1.webp", "Imagen2.webp"],
      weight: 30,
      dimensions: "30x30x30",
      material: "Material",
      careInstructions: ["Instrucción 1", "Instrucción 2"],
      quantity: 10,
      color: "Color",
      size: "Size",
      clothing: "Clothing",
      category: "Category",
    };

    render(<AddProductToCart product={product} />);

    const button = screen.getByRole("button", { name: `Agregar ${product.name} al carrito` });

    fireEvent.click(button);

    // Validamos que la función mock `addToCart` fue llamada con el producto correcto
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});
