"use client";

import React, { useState } from "react";

const CounterProduct: React.FC = () => {
  // Establecer contador inicial en 1
  const [counter, setCounter] = useState<number>(1);

  // Manejar incremento y asegurarse de que no baje de 1
  const handleDecrease = () => setCounter((prev) => Math.max(1, prev - 1));
  const handleIncrease = () => setCounter((prev) => prev + 1);

  return (
    <div className="flex flex-col gap-2 py-3">
      <p className="text-lg font-semibold">Cantidad</p>
      <div className="flex gap-2 *:border *:rounded-lg *:border-black *:text-sm *:px-2 *:py-1">
        {/* Botón de disminuir */}
        <button
          className="w-8 text-center"
          onClick={handleDecrease}
          aria-label="Disminuir cantidad"
        >
          -
        </button>

        {/* Mostrar cantidad actual */}
        <div className="w-12 text-center">{counter}</div>

        {/* Botón de aumentar */}
        <button
          className="w-8 text-center"
          onClick={handleIncrease}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterProduct;
