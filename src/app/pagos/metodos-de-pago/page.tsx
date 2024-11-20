"use client";

import React, { useState } from "react";
import { useOrderStore } from "@/store/orderStore";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useCartStore } from "@/store/cartStore";

const PaymentMethod = () => {
  const order = useOrderStore((state) => state.order);
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const pickUp = useCartStore((state) => state.pickup);

  const [selectedPayment, setSelectedPayment] = useState<string>("Yape");

  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const getWhatsAppLink = () => {
    const deliveryDetails = pickUp
      ? `Entrega en:%20${order.pickupPoint}%0A`
      : `Dirección:%20${order.address}%20-%20${order.district}`;

    const productSummary = cart
      .map(
        (product) =>
          `- ${product.name} (x${product.quantity} - ${product.size} - ${
            product.color
          }): S/${(product.price * product.quantity).toFixed(2)}`
      )
      .join("%0A");

    const message =
      `Hola!%20Adjunto%20el%20comprobante%20de%20mi%20compra.%0A%0A` +
      `Método%20de%20pago:%20${selectedPayment}%0A` +
      `Total:%20S/${totalPrice.toFixed(2)}%0A%0A` +
      `Productos:%0A${productSummary}%0A%0A` +
      `Datos%20del%20Cliente:%0A` +
      `Nombre:%20${order.name}%0A` +
      `Email:%20${order.email}%0A` +
      deliveryDetails +
      `Teléfono:%20${order.phone}`;

    return `https://wa.me/51980002076?text=${message}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Resumen y Método de Pago</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Datos del Cliente</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p>
            <strong>Nombre:</strong> {order.name}
          </p>
          <p>
            <strong>Email:</strong> {order.email}
          </p>
          {pickUp ? (
            <p>
              <strong>Recojo en:</strong> {order.pickupPoint}
            </p>
          ) : (
            <p>
              <strong>Dirección:</strong> {order.address} - {order.district}
            </p>
          )}
          <p>
            <strong>Teléfono:</strong> {order.phone}
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resumen de la Compra</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {cart.map((product) => (
            <div key={product.productId} className="mb-2">
              <div className="flex justify-between">
                <p>
                  {product.name} (x{product.quantity})
                </p>
                <p>S/{(product.price * product.quantity).toFixed(2)}</p>
              </div>
              <p className="text-xs">
                Talla: {product.size} / Color: {product.color}
              </p>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-xl">
            <p>Total:</p>
            <p>S/{totalPrice}.00</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Selecciona tu Método de Pago
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => handlePaymentChange("Yape")}
            className="border rounded-lg p-4 w-1/2 text-center cursor-pointer shadow-md"
            style={{"border": selectedPayment === "Yape" ? "1px solid #2196f3 " : ""}}
          >
            <Image
              src="/yape-qr.jpg"
              alt="Yape QR"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="mt-2 font-semibold">Yape</p>
          </button>

          <button
            onClick={() => handlePaymentChange("Plin")}
            className="border rounded-lg p-4 w-1/2 text-center cursor-pointer shadow-md"
            style={{"border": selectedPayment === "Plin" ? "1px solid #2196f3 " : ""}}
          >
            <Image
              src="/plin-qr.jpg"
              alt="Plin QR"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="mt-2 font-semibold">Plin</p>
          </button>
        </div>
        <p className="text-center py-2 font-semibold">
          A nombre de: Joseph Omar Meza Torres
        </p>
      </section>

      <div className="text-center mt-8">
        <Link href={getWhatsAppLink()} target="_blank" passHref>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-md">
            Envíanos el Comprobante
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentMethod;
