"use client";

import CategoryCard from "@/components/categories/CategoryCard";
import React, { useEffect, useState, useCallback } from "react";
import { Category } from "@/types/Category-Type";
import { CategoriesLib } from "@/components/categories/CategoryLib";

const CategoriesPages = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const allCategories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`).then((res) => res.json())
      setCategories(
        allCategories.map((categorie: Category) => ({
          name: categorie.name,
          description: categorie.description,
          slug: categorie.slug,
          image: categorie.image,
        }))
      );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  
  const getCategoriesLib = useCallback(() => {
    if (categories.length === 0) {
      setCategories(CategoriesLib);
    }
  }, [categories]); 

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getCategoriesLib();
  }, [getCategoriesLib]);

  return (
    <div className="">
      <section className="py-10">
        <div className="text-center">CATEGORIAS</div>
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((categorie, index) => (
            <div key={index} className="flex justify-center items-center">
              <CategoryCard categorie={categorie} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoriesPages;
