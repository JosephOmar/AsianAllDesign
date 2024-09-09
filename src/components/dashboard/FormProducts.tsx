"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Typography,
  Textarea,
  Button,
  Select,
  Option,
  Alert
} from "@material-tailwind/react";

interface Category{
  categoryId: number,
  name: string
}

interface Brand {
  brandId: number,
  name: string
}

const Considerations = [
  "Lavar a mano o en ciclo suave",
  "No usar lejía ni blanqueadores",
  "Secar al aire libre",
  "Planchar al revés",
  "Evitar frotar o raspar la impresión"
]

const NavbarDashboard = () => {
  const [recommendation, setRecommendation] = useState("");
  const [careInstructions, setCareInstructions] = useState<String[]>(Considerations);

  const [brandSelected, setBrandSelected] = useState<number>(0);
  const [brands, setBrands] = useState<Brand[]>([]);

  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const [errors, setErrors] = useState<string[]>([])
  const [name, setName] = useState<string>("")
  const [shortDescription, setShortDescription] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [price, setPrice] = useState<number>(35)
  const [stock, setStock] = useState<number>(30)
  const [weight, setWeight] = useState<number>(1)
  const [dimensions, setDimensions] = useState<string>("0x0x0")
  const [material, setMaterial ] = useState<string>("Jersey 20/1")
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  //! SUBMIT PRODUCT
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);
    const brandId = brandSelected
    const categoriesIds = allCategories.map((category) => category.categoryId);
    const bodySubmit = JSON.stringify({
      name,
      shortDescription,
      description,
      price,
      stock,
      weight,
      dimensions,
      material,
      categoriesIds,
      careInstructions,
      brandId
    })

    console.log(bodySubmit)

    const res = await fetch(
       `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodySubmit
       }
    )

    const responseAPI = await res.json();

    if(!res.ok) {
      setErrors(responseAPI.message);
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('success');
  }
  
  //! INSTRUCTIONS
  const addCareInstructions = () => {
    if (recommendation.trim() !== "") {
      setCareInstructions([...careInstructions, recommendation]);
      setRecommendation("");
    }
  };

  const clearInstructions = () => {
    setCareInstructions([]);
  };

  //! CATEGORIES
  const getCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCategories(data.map((categorie: Category) => ({
        categoryId: categorie.categoryId,
        name: categorie.name
      })));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const addCategory = () => {
    if (selectedCategoryId !== null) {
      const selectedCategory = categories.find(categorie => categorie.categoryId === selectedCategoryId);
      if (selectedCategory && !allCategories.some(categorie => categorie.categoryId === selectedCategoryId)) {
        setAllCategories([...allCategories, selectedCategory]);
        setSelectedCategoryId(null); 
      }
    }
  };

  const clearCategories = () => {
    setAllCategories([]);
  };

  //!BRANDS
  const getBrands = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brands`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBrands(data.map((brand: Brand) => ({
        brandId: brand.brandId,
        name: brand.name
      })));
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  //!OBTENER DE LA BD
  useEffect(() => {
    getBrands();
    getCategories();
  }, []);



  return (
    <section>
      <Typography
        variant="h2"
        className="mr-4 cursor-pointer py-1.5 font-medium text-center"
        color="red"
      >
        Crear Producto
      </Typography>
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="grid sm:w-[1024px] w-[90%]  grid-cols-1 sm:grid-cols-3 gap-5 pb-5">
          <Input color="blue" label="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <Input color="blue" label="Descripción Corta" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}  />
          <Input color="blue" label="Descripción Larga" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="number" color="blue" label="Precio" value={price} onChange={(e) => setPrice(Number(e.target.value))}  />
          <Input type="number" color="blue" label="Stock" value={stock} onChange={(e) => setStock(Number(e.target.value))}  />
          <Input type="number" color="blue" label="Peso" value={weight} onChange={(e) => setWeight(Number(e.target.value))}  />
          <Input color="blue" label="Dimensiones" value={dimensions} onChange={(e) => setDimensions(e.target.value)}  />
          <Input color="blue" label="Material" value={material} onChange={(e) => setMaterial(e.target.value)} />
          <Select color="blue" label="Marca" onChange={(value) => setBrandSelected(Number(value))}>
            {brands.map((brand, index) => (
                <Option key={index} value={brand.brandId.toString()}>
                  {brand.name}
                </Option>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20 pb-5">
          <div className="text-center">
            <Input 
              color="blue" 
              label="Recomendaciones" 

              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
            />
            <Button className="mt-5 mr-5" color="green" type="button" onClick={addCareInstructions}>Añadir</Button>
            <Button className="mt-5" color="red" type="button" onClick={clearInstructions}>Limpiar</Button>
          </div>
          <Textarea 
            label="Recomendaciones Agregadas" 
            className="col-span-2"
            value={careInstructions.join("\n")} 
            disabled 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20 pb-5">
          <div className="text-center">
          <Select 
            color="blue" 
            label="Categorías" 
            onChange={(value) => setSelectedCategoryId(Number(value))}
          >
            {categories.map((categorie, index) => (
              <Option key={index} value={categorie.categoryId.toString()}>
                {categorie.name}
              </Option>
            ))}
          </Select>
          <Button className="mt-5 mr-5" color="green" type="button" onClick={addCategory}>Añadir</Button>
          <Button className="mt-5" color="red" type="button" onClick={clearCategories}>Limpiar</Button>
          </div> 
          
        <Textarea 
          label="Categorías Agregadas" 
          className=""
          value={allCategories.map(categorie => `${categorie.categoryId}: ${categorie.name}`).join("\n")} 
          disabled 
        />
        </div>
        
        <Button className="mt-6" fullWidth type="submit">
            Crear Producto
        </Button>
      </form>
      {
        submitStatus === 'error' && (
          <Alert color="red">Error al crear el producto</Alert>
        )
      }
      {
        submitStatus === 'success' && (
          <Alert color="green">Producto creado correctamente</Alert>
        )
      }
    </section>
  );
};

export default NavbarDashboard;
