"use client"

import Image from "next/image"
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black-soft/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-parchment px-6 py-4">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-burgundy" />
            <h2 className="text-lg font-bold uppercase tracking-wider text-brown-dark">
              Carrito
            </h2>
            <span className="rounded-full bg-burgundy px-2 py-0.5 text-xs font-bold text-cream">
              {totalItems}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brown-medium transition-colors hover:text-burgundy"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <ShoppingCart className="mb-4 h-16 w-16 text-border" />
              <p className="text-sm text-brown-medium/60">
                Tu carrito esta vacio
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm font-bold uppercase tracking-wider text-burgundy transition-colors hover:text-burgundy-light"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-sm border border-border bg-parchment p-3"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-brown-dark">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-brown-medium/50 transition-colors hover:text-burgundy"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="mt-1 text-sm font-bold text-burgundy">
                      {formatPrice(item.price)}
                    </span>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-cream text-brown-dark transition-colors hover:bg-parchment-dark"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-brown-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-cream text-brown-dark transition-colors hover:bg-parchment-dark"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-parchment px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-wider text-brown-medium">
                Total
              </span>
              <span className="text-2xl font-black text-burgundy">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <a
              href={`https://wa.me/5492617705282?text=${encodeURIComponent(
                `Hola! Quiero comprar:\n${items
                  .map(
                    (i) =>
                      `- ${i.name} x${i.quantity} (${formatPrice(
                        i.price * i.quantity
                      )})`
                  )
                  .join("\n")}\n\nTotal: ${formatPrice(totalPrice)}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-burgundy px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition-all hover:bg-burgundy-light"
            >
              Finalizar Compra por WhatsApp
            </a>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-center text-xs font-medium uppercase tracking-wider text-brown-medium/60 transition-colors hover:text-burgundy"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
