import React from 'react'

const TerminosYCondiciones = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Términos y Condiciones</h1>
      <div className="mb-8">
        <p className="mb-4">
          Bienvenido a nuestra tienda en línea. Estos Términos y Condiciones rigen el uso de nuestro sitio web y la
          compra de nuestros productos. Al acceder o utilizar nuestro sitio web, usted acepta cumplir con estos
          términos.
        </p>
        <p>
          Es importante que lea y entienda estos términos antes de realizar cualquier compra. Si tiene alguna pregunta,
          no dude en ponerse en contacto con nuestro equipo de atención al cliente.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-bold">Uso del Sitio</h2>
          <p>
            Usted puede utilizar nuestro sitio web para navegar, buscar y comprar nuestros productos. Debe utilizar el
            sitio de manera responsable y de acuerdo con estos términos. No está permitido utilizar el sitio para fines
            ilegales o dañinos.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Pedidos y Pagos</h2>
          <p>
            Cuando realice un pedido, deberá proporcionar información precisa y completa. Nos reservamos el derecho de
            rechazar o cancelar cualquier pedido a nuestra discreción. Todos los pagos deben realizarse de forma segura y oportuna.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Devoluciones y Reembolsos</h2>
          <p className='mb-4'>
          Dado que ofrecemos productos personalizados, no aceptamos devoluciones una vez que la compra ha sido completada. Sin embargo, al momento de la entrega, el cliente tiene la oportunidad de revisar el producto.
          </p>
          <p>
          Si no está satisfecho con el resultado, puede cancelar la compra y solicitar una devolución en ese momento. Una vez aceptado el producto, la transacción se considera final y no podrá ser reembolsada.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Limitación de Responsabilidad</h2>
          <p>
            No seremos responsables por ningún daño o pérdida que pueda surgir del uso de nuestro sitio web o la compra
            de nuestros productos, incluyendo daños indirectos, especiales o consecuentes. Nuestra responsabilidad se
            limitará al precio de compra del producto.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TerminosYCondiciones