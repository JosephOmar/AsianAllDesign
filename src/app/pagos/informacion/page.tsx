import React, {useState} from 'react'
import FormPayment from '@/components/pagos/FormPayment';
import PurchaseSummary from '@/components/pagos/PurchaseSummary';


const CustomerInformation = () => {

  return (
    <section className='flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto grid sm:grid-cols-2 my-20'>
        <div className='pl-10'>
          <h3>Información de Entrega</h3>
          <FormPayment />
        </div>
        <div>
          <h3>Resumen de Compra</h3>
          <PurchaseSummary />
        </div>
      </div>   
   </section>
 );
}

export default CustomerInformation