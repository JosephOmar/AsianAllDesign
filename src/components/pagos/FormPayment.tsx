"use client"
import { useState } from 'react';
import ShippingMethod from './ShippingMethod';
import {
  Card,
  Input,
} from "@material-tailwind/react";
import { useOrderStore } from '@/store/orderStore';
import { Order } from '@/types/Order-Type';


const FormPayment = () => {

  const setOrderField = useOrderStore((state)=> state.setOrderField)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setOrderField(name as keyof Order, value)
   }
  
  return (
    <Card color="transparent" shadow={false} className=''>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"  onSubmit={(e) => e.preventDefault()}>
        <div className="mb-1 flex flex-col gap-6 ">
          <div className="w-72">
            <Input label="Nombres"  color='black' name='name' onChange={handleInputChange} required/>
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
        <ShippingMethod />
      </form>
    </Card> 
  )
}

export default FormPayment