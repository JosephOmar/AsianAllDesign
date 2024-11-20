import React, { useEffect } from "react";
import { useCartStore } from '@/store/cartStore'; // Importa el store para manejar el estado del carrito
import {
  IconButton,
  Drawer
} from "@material-tailwind/react"; // Componentes de Material Tailwind para el ícono y el panel deslizable
import {
  ShoppingCartIcon,
} from "@heroicons/react/24/outline"; // Ícono del carrito de compras de Heroicons
import Image from "next/image"; // Componente de Next.js para manejar imágenes optimizadas
import { Link } from 'next-view-transitions'; // Importa el componente Link con transiciones de vista

export function CartOfProducts() {
  // Estado para controlar la visibilidad del drawer (panel lateral)
  const [openRight, setOpenRight] = React.useState(false);

  // Estado para almacenar el precio total del carrito
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  // Obtiene el carrito desde el store de Zustand
  const cart = useCartStore((state) => state.cart);

  // Estado para almacenar el número total de productos en el carrito
  const [totalProducts, setTotalProducts] = React.useState<number>(cart.length);

  // Función para eliminar productos del carrito
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Función para abrir el panel lateral (drawer)
  const openDrawer = () => setOpenRight(true);

  // Función para cerrar el panel lateral (drawer)
  const closeDrawer = () => setOpenRight(false);

  // useEffect se ejecuta cuando el carrito cambia para actualizar los valores de productos y precio
  useEffect(() => {
    // Actualiza el número de productos cuando cambia el carrito
    setTotalProducts(cart.length);
  
    // Función para calcular el precio total del carrito
    const calculateTotalPrice = () => {
      const total = cart.reduce((accumulator, product) => {
        // Suma el precio total considerando la cantidad de cada producto
        return accumulator + (product.quantity * product.price);
      }, 0);
      // Establece el precio total en el estado
      setTotalPrice(total);
    };
  
    calculateTotalPrice(); // Llama a la función para calcular el precio total
  }, [cart]); // Dependencia de `cart`, se ejecutará cada vez que cambie el carrito

  return (
    <div className="z-[100]">
      {/* Icono de carrito que abre el drawer cuando se hace clic */}
      <IconButton variant="text" className="relative" size="lg" onClick={openDrawer}>
        <ShoppingCartIcon className="h-8 w-8 stroke-2" /> {/* Ícono del carrito */}
        {/* Muestra la cantidad de productos en el carrito sobre el icono */}
        <div className="absolute top-[-30%] left-[80%] text-red-500" >{totalProducts}</div>
      </IconButton>

      {/* Panel lateral (drawer) que muestra los productos del carrito */}
      <Drawer open={openRight} onClose={closeDrawer} className={`my-cart`}>
        <div className="px-2 py-5">
          {/* Si el carrito está vacío, muestra un mensaje */}
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            // Muestra los productos en el carrito
            <ul className="flex flex-col gap-4">
              {cart.map((product) => (
                <li key={product.productId}>
                  <div className="flex items-center">
                    {/* Muestra la imagen del producto */}
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products/${product.category}${product.images[0]}`} width={100} height={100} alt={product.shortDescription}/>
                    <div className="text-xs flex flex-col gap-2">
                      {/* Muestra la información del producto */}
                      <div>{product.name}</div>
                      <div>Cantidad: {product.quantity}</div>
                      <div>Precio Unitario: S/{product.price}.00</div>
                      <div>Color: {product.color} - Talla: {product.size}</div>
                      {/* Botón para eliminar el producto del carrito */}
                      <button onClick={() => removeFromCart(product.productId)}>Quitar</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Muestra el precio total del carrito */}
        <div>
          Precio Total: S/{totalPrice}.00
        </div>
        {/* Enlace para redirigir a la página de pago */}
        <Link href={`${process.env.NEXT_PUBLIC_MY_URL}/pagos/informacion`}>Ir a Pagar</Link>
      </Drawer>
    </div>
  );
}
