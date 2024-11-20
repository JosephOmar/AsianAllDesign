import React from "react";
import InfoProduct from "@/components/products/InfoProduct";
import { Product } from "@/types/Product-Type";
import { Metadata } from "next";

export async function generateStaticParams() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
  ).then((res) => res.json());
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Fetch the product data based on the slug
  const products: Product[] = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
  ).then((res) => res.json());
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription || "Descripción del producto",
  };
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const products: Product[] = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
  ).then((res) => res.json());

  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <InfoProduct product={product} />
    </div>
  );
};

export default ProductPage;

// <h1>{product.name}</h1>
// <p>{product.shortDescription}</p>
// <p>Precio: {product.price}</p>
// <p>Material: {product.material}</p>
//  Renderizar la primera imagen del producto
// {product.images.length > 0 && (
//   <Image
//     src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/products/${product.images[0]}`}
//     alt={product.name}
//     width={500}
//     height={500}
//   />
// )}

// <h1>{product.name}</h1>
// <p>{product.description}</p>
// <ul>
//   {product.images?.length > 0 ? (
//     product.images.map((image, index) => (
//       <li key={index}>
//         <Image fill src={image} alt={`${product.shortDescription}-2`} />
//       </li>
//     ))
//   ) : (
//     <li>No images available</li>
//   )}
// </ul>
// <p>Price: ${product.price}</p>
// <p>Material: {product.material}</p>
// <p>Care Instructions:</p>
// <ul>
//   {product.careInstructions?.length > 0 ? (
//     product.careInstructions.map((instruction, index) => (
//       <li key={index}>{instruction}</li>
//     ))
//   ) : (
//     <li>No care instructions available</li>
//   )}
// </ul>
