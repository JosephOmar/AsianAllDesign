import React from 'react'

const Contactanos = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">¡Contáctanos!</h1>
      <p className="text-center text-lg mb-8">
        Si tienes alguna pregunta, quieres más información sobre nuestros productos, o deseas crear un diseño personalizado, estamos aquí para ayudarte. Utiliza cualquiera de los medios de contacto que prefieras.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
        <ul className="text-lg space-y-4">
          <li>
            <strong>Correo electrónico:</strong> <a href="mailto:asianalldesigns@gmail.com" className="text-blue-500 hover:underline">asianalldesigns@gmail.com</a>
          </li>
          <li>
            <strong>Teléfono:</strong> <a href="tel:+51980002076" className="text-blue-500 hover:underline">+51 980 002 076</a>
          </li>
          <li>
            <strong>WhatsApp:</strong> <a href="https://wa.me/51980002076" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+51 980 002 076</a>
          </li>
        </ul>
      </div>

      {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Horario de atención</h2>
        <p className="text-lg">Lunes a Viernes de 9:00 a.m. a 6:00 p.m.</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visítanos</h2>
        <p className="text-lg mb-4">Av Principal Mz K Lt 9 - Los Olivos</p>
        <iframe
          title="Google Maps Location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=-12.002900,%20-77.075760+(Asian%20All%20Design)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="300"
          className="rounded-lg shadow-md"
          loading="lazy"
        ></iframe>
      </div> */}

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Síguenos en redes sociales</h2>
        <ul className="flex space-x-4">
          <li><a href="https://instagram.com" className="text-blue-500 hover:underline">Instagram</a></li>
          <li><a href="https://facebook.com" className="text-blue-500 hover:underline">Facebook</a></li>
          <li><a href="https://tiktok.com" className="text-blue-500 hover:underline">TikTok</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contactanos