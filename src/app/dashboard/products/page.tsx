import FormProducts from '@/components/dashboard/FormProducts'
import React from 'react'

const DashboardProducts = () => {
  return (
    <section>
      <div className='max-w-[1024px] mx-auto flex flex-col items-center'>
        <div>Productos</div>
        <FormProducts />
      </div>
    </section>
  )
}

export default DashboardProducts