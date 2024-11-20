import React, { useEffect, useState } from 'react';
import { Select, Option, Input, Radio } from "@material-tailwind/react"; // Importación de componentes de Material Tailwind
import { useCartStore } from '@/store/cartStore'; // Importación del store para el carrito
import { useOrderStore } from '@/store/orderStore'; // Importación del store para la orden
import { Order } from '@/types/Order-Type'; // Importación de la interfaz Order

// Lista de distritos disponibles
const districts = [
  "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Cercado de Lima", "Chorrillos", "Comas", "El Agustino", 
  "Independencia", "Jesús María", "La Molina", "La Victoria", "Lince", "Los Olivos", "Magdalena del Mar", 
  "Miraflores", "Pueblo Libre", "Puente Piedra", "Rímac", "San Borja", "San Isidro", "San Juan de Lurigancho", 
  "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita", "Santiago de Surco", 
  "Surquillo", "Villa El Salvador", "Villa María del Triunfo", "Callao", "Bellavista", "Carmen de la Legua", 
  "La Punta", "La Perla", "Ventanilla"
];

const ShippingMethod = () => {
  const setOrderField = useOrderStore((state) => state.setOrderField); // Función para actualizar los campos de la orden
  const pickup = useCartStore((state) => state.pickup); // Estado para manejar la opción de recojo
  const setPickup = useCartStore((state) => state.setPickup); // Función para cambiar el estado de recojo
  const [pickupPoint, setPickupPoint] = useState<string>("Av. Angelica Gamarra 1418"); // Estado para la dirección de recogida
  const [district, setDistrict] = useState<string | null>(""); // Estado para el distrito seleccionado

  // Maneja el cambio de punto de recogida
  const handlePickupChange = (value: string) => {
    setPickupPoint(value); 
  };

  // Efecto que actualiza el campo 'pickupPoint' en el store cuando cambia
  useEffect(() => {
    setOrderField("pickupPoint", pickupPoint);
  }, [pickupPoint, setOrderField]);

  // Maneja el cambio en los inputs de dirección y referencia
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderField(name as keyof Order, value); // Actualiza el campo correspondiente en la orden
  };

  // Efecto que actualiza el campo 'district' en el store cuando cambia
  useEffect(() => {
    setOrderField("district", district);
  }, [district, setOrderField]);

  return (
    <div>
      <div className='my-5 text-sm'>
        {/* Botones para elegir entre "Recojo en Punto" o "Entrega a Domicilio" */}
        <button type='button' onClick={() => setPickup(true)} className='border border-white rounded-l-lg px-3 text-black'>
          Recojo en Punto
        </button>      
        <button type='button' onClick={() => setPickup(false)} className='border border-white rounded-r-lg px-3 text-black'>
          Entrega a Domicilio
        </button>
      </div>

      {/* Si 'pickup' es true, muestra la opción de puntos de recogida */}
      {pickup ? (
        <div className="mb-1 flex flex-col gap-6">
          <div className="w-72 text-black border-[#eeeeee] border rounded-lg p-3">
            <div>Puntos de Entrega (Gratis)</div>
            <div className="flex flex-col w-max">
              {/* Opciones de puntos de recogida */}
              <Radio onChange={() => handlePickupChange("Av. Angelica Gamarra 1418")} name="pickup-point" label="Av. Angelica Gamarra 1418" defaultChecked />
              <Radio onChange={() => handlePickupChange("CC Plaza Norte")} name="pickup-point" label="CC Plaza Norte" />
              <Radio onChange={() => handlePickupChange("Plaza Alameda 28 de Julio")} name="pickup-point" label="Plaza Alameda 28 de Julio" />
            </div>
            <span className='inline-block w-full h-[1px] bg-black'></span>
            <div className='text-xs'>Mostrar el DNI con el cuál se hizo la compra</div>
          </div>
        </div>
      ) : (
        // Si 'pickup' es false, muestra la opción de entrega a domicilio
        <div className="mb-1 flex flex-col gap-6">
          <h3 className='text-sm text-black'>Entregas en Lima y Callao</h3>
          <div className="w-72">
            {/* Campo para la dirección de entrega */}
            <Input onChange={handleInputChange} label="Dirección" color='black' name='address' />
          </div>
          <div className="w-72">
            {/* Campo para las referencias de entrega */}
            <Input onChange={handleInputChange} label="Referencias" color='black' name='reference' />
          </div>
          <div className="w-72">
            {/* Select para elegir el distrito */}
            <Select onChange={(value) => setDistrict(String(value))} label="Distrito" className='text-black' name='district'>
              {districts.map((district) => (
                <Option key={district} value={district}>{district}</Option>
              ))}
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShippingMethod;
