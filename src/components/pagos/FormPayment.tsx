"use client" // Asegura que este componente se ejecute en el cliente (solo en el navegador)

import ShippingMethod from './ShippingMethod'; // Importa el componente de selección del método de envío
import { Card, Input } from "@material-tailwind/react"; // Importa componentes de Material Tailwind para el UI
import { useOrderStore } from '@/store/orderStore'; // Importa el hook para gestionar el estado del pedido
import { Order } from '@/types/Order-Type'; // Importa el tipo de datos para la orden

const FormPayment = () => {
  // Usamos el hook de estado `useOrderStore` para obtener la función que actualizará los campos del pedido
  const setOrderField = useOrderStore((state) => state.setOrderField)

  // Función que maneja el cambio de valores en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Desestructuramos el evento para obtener el nombre y valor del campo
    setOrderField(name as keyof Order, value) // Actualiza el estado global con el nuevo valor
  }

  return (
    // Contenedor de formulario dentro de una tarjeta, sin sombra y transparente
    <Card color="transparent" shadow={false} className=''>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"  onSubmit={(e) => e.preventDefault()}>
        <div className="mb-1 flex flex-col gap-6">
          {/* Cada campo de entrada tiene un tamaño fijo de 72 y se usa el componente Input */}
          <div className="w-72">
            <Input label="Nombres" color='black' name='name' onChange={handleInputChange} required/>
          </div>
          <div className="w-72">
            <Input label="Apellidos" color='black' name='lastname' onChange={handleInputChange} required/>
          </div>
          <div className="w-72">
            <Input label="Correo" color='black' name='email' type='email' onChange={handleInputChange} required/>
          </div>
          <div className="w-72">
            <Input label="Celular" color='black' name='phone' onChange={handleInputChange} required/>
          </div>
          <div className="w-72">
            <Input label="DNI" color='black' name='dni' onChange={handleInputChange} required/>
          </div>
        </div>
        {/* Componente de selección de método de envío */}
        <ShippingMethod />
      </form>
    </Card>
  )
}

export default FormPayment