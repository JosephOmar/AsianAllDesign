import React from "react";
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import CategoryCard from "./CategoryCard";
import { Category } from "@/types/Category-Type";

test('renders contect', () => {
  const categorie: Category = {
    name: 'Categoria 1',
    description: 'Una descripción',
    slug: 'categoria-1',
    image: 'imageCategory.webp'
  }

  const component = render(<CategoryCard categorie={categorie}/>)

  component.getByText('Categoria 1')
  //! expect(component.container).toHaveTextContent(categorie.name)
})