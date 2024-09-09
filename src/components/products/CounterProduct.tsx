"use client"

import React from 'react'
import { useState } from 'react'

const CounterProduct = () => {
  const [counter, setCounter] = useState<number>(1)


  return (
    <div className='flex flex-col gap-2 py-3'>
      <p className="text-lg font-semibold">Cantidad</p>
      <div className='flex gap-2 *:border *:rounded-lg *:border-black *:text-sm *:px-2 *:py-1'>
        <button className='w-8 text-center' onClick={() => { counter > 1 ? setCounter(counter - 1) : setCounter(1)}}>-</button>
        <div className='w-12 text-center'>{counter}</div>
        <button className='w-8 text-center' onClick={() => {setCounter(counter + 1)}}>+</button>
      </div>
    </div>
  )
}

export default CounterProduct