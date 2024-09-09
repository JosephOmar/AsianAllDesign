import { Product } from "./Product-Type";

export type Order = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  dni: string;
  pickupPoint?: string;
  district: string;
  address?: string;
  reference?: string;
  cart: Product[]
}