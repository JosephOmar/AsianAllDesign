import React, { useEffect } from "react";
import { useCartStore } from '@/store/cartStore'
import {
  IconButton,
  Drawer
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from 'next-view-transitions'
 
export function CartOfProducts() {
  const [openRight, setOpenRight] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const cart = useCartStore((state) => state.cart);
  const [totalProducts, setTotalProducts] = React.useState<number>(cart.length);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
 
  const openDrawer = () => setOpenRight(true);
  const closeDrawer = () => setOpenRight(false);

  useEffect(() => {
    setTotalProducts(cart.length);
  
    const calculateTotalPrice = () => {
      const total = cart.reduce((accumulator, product) => {
        return accumulator + (product.quantity * product.price);
      }, 0);
      setTotalPrice(total);
    };
  
    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="z-[100]">
      <IconButton variant="text" className="relative" size="lg" onClick={openDrawer}>
        {openRight ? (
          <ShoppingCartIcon className="h-8 w-8 stroke-2" />
        ) : (
          <ShoppingCartIcon className="h-8 w-8 stroke-2" />
        )}
        <div className="absolute top-[-30%] left-[80%] text-red-500" >{totalProducts}</div>
      </IconButton>
      <Drawer open={openRight} onClose={closeDrawer} className={`my-cart`}>
        <div className="px-2 py-5">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {cart.map((product) => (
                <li key={product.productId}>
                  <div className="flex items-center">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products${product.images[0]}`} width={100} height={100} alt={product.shortDescription}/>
                    <div className="text-xs flex flex-col gap-2">
                      <div>{product.name}</div>
                      <div>Cantidad: {product.quantity}</div>
                      <div>Precio Unitario: S/{product.price}.00</div>
                      <div>Color: {product.color} - Talla: {product.size}</div>
                      <button onClick={() => removeFromCart(product.productId)}>Quitar</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
         Precio Total: S/{totalPrice}.00
        </div>
        <Link href={`${process.env.NEXT_PUBLIC_MY_URL}/pagos/informacion`}>Ir a Pagar</Link>
      </Drawer>
    </div>
  );
}