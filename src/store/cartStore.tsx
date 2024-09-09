import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/Product-Type';

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  pickup: boolean;
  setPickup: (value: boolean) => void;
  totalPrice: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      totalPrice: 0,

      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (p) => p.productId === product.productId
          );
          let newCart;
          if (existingProduct) {
            newCart = state.cart.map((p) =>
              p.productId === product.productId
                ? { ...p, quantity: p.quantity + 1 }
                : p
            );
          } else {
            newCart = [...state.cart, { ...product, quantity: 1 }];
          }
          
          return {
            cart: newCart,
            totalPrice: newCart.reduce((accumulator, product) => {
              return accumulator + product.price * product.quantity;
            }, 0),
          };
        }),

        removeFromCart: (productId) =>
          set((state) => {
            const newCart = state.cart.filter(
              (product) => product.productId !== productId
            );
            return {
              cart: newCart,
              totalPrice: newCart.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
              }, 0),
            };
          }),

      clearCart: () => set({ cart: [] }),
      pickup: true,
      setPickup: (value: boolean) => set({ pickup: value }),
    }),
    {
      name: 'cart-storage', 
    }
  )
);