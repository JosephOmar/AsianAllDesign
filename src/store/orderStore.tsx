import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Order } from "@/types/Order-Type";

interface OrderStore{
  order: Order;
  setOrderField: (field: keyof Order, value: any) => void;
  setOrder: (order: Order) => void
}

export const useOrderStore = create<OrderStore>()(
  persist(
  (set) => ({
    order: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      dni: "",
      district: "",
      cart: [],
    },
    setOrderField: (field, value) => 
      set((state) => ({
        order: {
          ...state.order,
          [field]: value
        }
      })),
    setOrder: (order) => set({order})
  }),
  {
    name: 'order-storage'
  }
  )
) 