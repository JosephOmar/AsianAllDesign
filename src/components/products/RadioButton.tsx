"use client"

// ! ESTABLECER PROPIEDADES DEL RADIOBUTTON
interface RadioButtonProps {
  options: string[]; //! Opciones disponibles para los botones de radio
  name: string; //! Nombre del grupo de botones de radio
  color: string[]; //! Colores asociados a cada opción
  selected: string; //! Opción actualmente seleccionada
  onChange: (value: string) => void; //! Función para manejar el cambio de selección
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, name, color, selected, onChange }) => {

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Nombre del grupo de opciones */}
      <div className="text-lg font-semibold">{name}</div>
      <div className="flex gap-2 flex-wrap ">
        {options.map((option, index) => (
          <label 
            key={option} 
            htmlFor={option} 
            className="flex gap-2 justify-center items-center border rounded-lg border-black px-2 py-1 text-sm font-medium"
          >
            <input
              type="radio" //! Define el input como un botón de radio
              id={option} //! Asigna un identificador único
              name={name} //! Agrupa los botones bajo el mismo nombre
              value={option} //! Valor del botón de radio
              checked={selected === option} //! Determina si está seleccionado
              onChange={() => onChange(option)} //! Llama a la función cuando el valor cambia
              className="appearance-none h-[8px] w-[8px] rounded-full outline outline-offset-2 outline-1"
              style={{
                //! Define el color de fondo si está seleccionado
                backgroundColor: selected === option ? color[index] : "",
                //! Define el color del borde
                outlineColor: color[index],
              }}
            />
            {option} {/* Etiqueta que muestra el nombre de la opción */}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
