"use client"; // Indica que este código debe ejecutarse en el cliente

import { themeChange } from "theme-change"; // Importa la función para cambiar el tema
import { useEffect } from "react"; // Importa el hook useEffect de React

const ChangeTheme = () => {
  // useEffect se utiliza para ejecutar el código que cambia el tema cuando el componente se monta
  useEffect(() => {
    // Llama a la función `themeChange` para inicializar la funcionalidad de cambio de tema
    themeChange(false); // El parámetro false previene que el cambio de tema se realice automáticamente al cargar
  }, []); // El array vacío asegura que esto solo se ejecute una vez, cuando el componente se monta

  return (
    <div className="fixed bottom-[50px] right-[50px] flex gap-5"> {/* Posiciona el contenedor de botones */}
      {/* Botón para tema claro */}
      <button
        className="w-5 h-5 rounded-full border-black border bg-white" 
        data-set-theme="" // Establece el tema a claro
        data-act-class="ACTIVECLASS" // Define la clase activa para cuando el botón está seleccionado
      ></button>
      
      {/* Botón para tema oscuro */}
      <button
        className="w-5 h-5 rounded-full border-black border bg-black" 
        data-set-theme="dark" // Establece el tema a oscuro
        data-act-class="ACTIVECLASS" // Define la clase activa para cuando el botón está seleccionado
      ></button>
    </div>
  );
};

export default ChangeTheme;
