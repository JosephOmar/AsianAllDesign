
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import React from 'react'
import { useCartStore } from '@/store/cartStore';
import { Product } from "@/types/Product-Type";

interface InfoProduct {
  product: Product
}

const ProductCard: React.FC<InfoProduct>  = ({product}) => {

    return (
      <div key={product.productId} className="flex justify-center items-center">
        <div  className="bg-white rounded-lg shadow-xl overflow-hidden w-[240px]">
          <Link href={`${process.env.NEXT_PUBLIC_MY_URL}/productos/${product.slug}`} prefetch={false}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products${product.images[0]}`}
               alt={product.name}
               width={300}
               height={300}
               className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-base font-semibold mb-2">{product.shortDescription}</h3>
              <p className="text-sm text-gray-500 mb-4 hidden sm:block">{product.name}</p>
            </div>
          </Link>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2 px-3 pb-3">
                <span className="text-base font-bold">S/{product.price}.00</span>
          </div>
        </div>
      </div>
    );
}
export default ProductCard