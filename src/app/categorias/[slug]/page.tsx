import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product-Type";

interface Category {
  categoryId: string
  name: string,
  slug: string,
  description: string,
  image: string,
}

export async function generateStaticParams() {
  const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`).then((res) => res.json())
  return categories.map((category: Category) => ({
    slug: category.slug
  }))
}

const CategoriesPages = async ({params} : {params : {slug: string}}) => {
  const categories: Category[] = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`).then((res) => res.json())

  const category = categories.find((p) => p.slug === params.slug);
  const categoryId = category?.categoryId

  const productsByCategory : Product[] = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?category=${categoryId}`).then((res) => res.json())

  if (!category) {
    return <div>Categoria no encontrada</div>;
  }

  if (productsByCategory.length === 0) {
    return <div>Categoria sin productos de momento</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 bg-white rounded-2xl gap-4 sm:gap-10 px-5 sm:px-20 py-5 sm:py-10" style={{margin:"30px 10px"}}>
        {
          productsByCategory.map((product) => (
            <ProductCard key={product.productId} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoriesPages
//<Link href={`${process.env.NEXT_PUBLIC_MY_URL}/productos/${product.slug}`}><div>{product.name}</div></Link>
//              <div>{product.description}</div>
//              <div>{product.price}</div> 