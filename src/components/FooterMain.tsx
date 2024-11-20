"use client";

import React, { useMemo } from "react";
import { Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation"; // Hook de Next.js para obtener la ruta actual
import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  // Uso de useMemo para optimizar el cálculo de la ruta solo cuando sea necesario
  // Si el pathname empieza con '/dashboard', el footer no se renderiza
  const pathname = usePathname();
  
  // Comprobamos si el footer debe mostrarse o no basado en la ruta
  const showFooter = useMemo(() => !pathname.startsWith("/dashboard"), [pathname]);

  // Si no se debe mostrar el footer, retornamos null para evitar el renderizado
  if (!showFooter) {
    return null;
  }

  return (
    <footer className="w-full p-8 bg-gray-50"> {/* Fondo gris claro para el pie de página */}
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        {/* Contenedor para el logo */}
        <div className="flex gap-5 justify-center items-center">
          <Image
            src="/AsianAllDesign.svg"
            height={60}
            width={60}
            alt="Logo Asian All Design"
            priority // Carga la imagen con alta prioridad
          />
          <Image
            src="/AsianAllDesignText.svg"
            height={60}
            width={120}
            alt="Logo Asian All Design"
            priority // Carga la imagen con alta prioridad
          />
        </div>

        {/* Lista de enlaces de navegación */}
        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
          {/* Cada enlace de la lista es un item de navegación */}
          <li>
            <Link
              href="/categorias" // Enlace relativo, asumiendo que la URL es relativa
              aria-label="Ir a categorías" // Mejora la accesibilidad
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Categorías
            </Link>
          </li>
          <li>
            <Link
              href="/terminos-y-condiciones"
              aria-label="Ir a términos y condiciones"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Términos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              href="/diseno-exclusivo"
              aria-label="Ir a diseño exclusivo"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Diseño Exclusivo
            </Link>
          </li>
          <li>
            <Link
              href="/contactanos"
              aria-label="Ir a contáctanos"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>

      {/* Separador para mejorar la estética visual */}
      <hr className="my-8 border-blue-gray-50" />

      {/* Texto de copyright, centrado */}
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Asian All Design
      </Typography>
    </footer>
  );
};

export default FooterMain;
