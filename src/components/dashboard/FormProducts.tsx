"use client"; // Indica que este componente depende de la ejecución del lado del cliente

import React, { useState, useEffect } from "react";
import {
  Input,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
// Interfaces para las categorías y marcas
interface Category {
  categoryId: number,
  name: string
}

interface Brand {
  brandId: number,
  name: string
}

// Consideraciones predefinidas que se usan como instrucciones de cuidado
const Considerations = [
  "Lavar a mano o en ciclo suave",
  "No usar lejía ni blanqueadores",
  "Secar al aire libre",
  "Planchar al revés",
  "Evitar frotar o raspar la impresión"
];

const NavbarDashboard = () => {
  // Estados para el formulario
  const [recommendation, setRecommendation] = useState(""); // Estado para la recomendación
  const [careInstructions, setCareInstructions] = useState<string[]>(Considerations); // Instrucciones de cuidado
  
  const [brandSelected, setBrandSelected] = useState<number>(0); // Marca seleccionada
  const [brands, setBrands] = useState<Brand[]>([]); // Lista de marcas

  const [allCategories, setAllCategories] = useState<Category[]>([]); // Categorías seleccionadas
  const [categories, setCategories] = useState<Category[]>([]); // Lista de categorías
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null); // ID de categoría seleccionada

  // Estados para los datos del producto
  const [errors, setErrors] = useState<string[]>([]); // Errores al enviar el formulario
  const [name, setName] = useState<string>(""); // Nombre del producto
  const [shortDescription, setShortDescription] = useState<string>(""); // Descripción corta
  const [description, setDescription] = useState<string>(""); // Descripción larga
  const [price, setPrice] = useState<number>(35); // Precio del producto
  const [stock, setStock] = useState<number>(30); // Stock del producto
  const [weight, setWeight] = useState<number>(1); // Peso del producto
  const [dimensions, setDimensions] = useState<string>("0x0x0"); // Dimensiones del producto
  const [material, setMaterial] = useState<string>("Jersey 20/1"); // Material del producto
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // Estado de envío del formulario

  //! SUBMIT PRODUCT
  // Función para manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]); // Limpiar errores previos
    const brandId = brandSelected; // Obtener el ID de la marca seleccionada
    const categoriesIds = allCategories.map((category) => category.categoryId); // Obtener los IDs de las categorías seleccionadas

    // Crear el cuerpo del request en formato JSON
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
    });

    console.log(bodySubmit); // Depuración

    // Realizar la solicitud POST
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodySubmit
      }
    );

    // Parsear la respuesta
    const responseAPI = await res.json();

    // Verificar si hubo un error en la respuesta
    if (!res.ok) {
      setErrors(responseAPI.message); // Mostrar el mensaje de error
      setSubmitStatus('error'); // Cambiar el estado del formulario a error
      console.log(errors); // Depuración
      return;
    }

    setSubmitStatus('success'); // Si todo salió bien, cambiar el estado a éxito
  };
  
  //! INSTRUCTIONS
  // Función para añadir nuevas recomendaciones
  const addCareInstructions = () => {
    if (recommendation.trim() !== "") { // Solo si hay texto en la recomendación
      setCareInstructions([...careInstructions, recommendation]); // Añadir la recomendación
      setRecommendation(""); // Limpiar el campo de entrada
    }
  };

  // Función para limpiar las recomendaciones
  const clearInstructions = () => {
    setCareInstructions([]); // Limpiar todas las recomendaciones
  };

  //! CATEGORIES
  // Función para obtener las categorías de la API
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
      }))); // Guardar las categorías
    } catch (error) {
      console.error("Error fetching categories:", error); // Manejo de errores
    }
  };

  // Función para añadir una categoría seleccionada
  const addCategory = () => {
    if (selectedCategoryId !== null) { // Solo si se ha seleccionado una categoría
      const selectedCategory = categories.find(categorie => categorie.categoryId === selectedCategoryId); // Buscar la categoría seleccionada
      if (selectedCategory && !allCategories.some(categorie => categorie.categoryId === selectedCategoryId)) {
        setAllCategories([...allCategories, selectedCategory]); // Añadir la categoría a las seleccionadas
        setSelectedCategoryId(null); // Limpiar la categoría seleccionada
      }
    }
  };

  // Función para limpiar las categorías
  const clearCategories = () => {
    setAllCategories([]); // Limpiar todas las categorías seleccionadas
  };

  //! BRANDS
  // Función para obtener las marcas de la API
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
      }))); // Guardar las marcas
    } catch (error) {
      console.error("Error fetching brands:", error); // Manejo de errores
    }
  };

  // Obtener marcas y categorías al cargar el componente
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
          {/* Campos del formulario para nombre, descripción, precio, etc. */}
          <Input color="blue" label="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <Input color="blue" label="Descripción Corta" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}  />
          <Input color="blue" label="Descripción Larga" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="number" color="blue" label="Precio" value={price} onChange={(e) => setPrice(Number(e.target.value))}  />
          <Input type="number" color="blue" label="Stock" value={stock} onChange={(e) => setStock(Number(e.target.value))}  />
          <Input type="number" color="blue" label="Peso" value={weight} onChange={(e) => setWeight(Number(e.target.value))}  />
          <Input color="blue" label="Dimensiones" value={dimensions} onChange={(e) => setDimensions(e.target.value)}  />
          <Input color="blue" label="Material" value={material} onChange={(e) => setMaterial(e.target.value)} />
          <Select color="blue" label="Marca" onChange={(value) => setBrandSelected(Number(value))}>
            {brands.map((brand) => (
                <Option key={brand.brandId} value={brand.brandId.toString()}>
                  {brand.name}
                </Option>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20 pb-5">
          {/* Campo para añadir recomendaciones */}
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
          {/* Campo para añadir categorías */}
          <div className="text-center">
            <Select color="blue" label="Categorías" onChange={(value) => setSelectedCategoryId(Number(value))}>
              {categories.map((category) => (
                <Option key={category.categoryId} value={category.categoryId.toString()}>
                  {category.name}
                </Option>
              ))}
            </Select>
            <Button className="mt-5 mr-5" color="green" type="button" onClick={addCategory}>Añadir Categoría</Button>
            <Button className="mt-5" color="red" type="button" onClick={clearCategories}>Limpiar Categorías</Button>
          </div>
        </div>
        {/* Mostrar los errores o estado de éxito */}
        <div>
          {errors.length > 0 && (
            <Typography color="red" className="text-center text-sm">{errors}</Typography>
          )}
          {submitStatus === 'success' && (
            <Typography color="green" className="text-center text-sm">Producto creado con éxito</Typography>
          )}
        </div>
        <Button type="submit" color="red" className="w-full mt-5">Crear Producto</Button>
      </form>
    </section>
  );
};

export default NavbarDashboard;
