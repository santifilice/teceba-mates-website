"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"

type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  badge: string | null
}

type Category = {
  id: string
  title: string
  subtitle: string
  products: Product[]
}

const categories: Category[] = [
  {
    id: "mates",
    title: "Mates",
    subtitle: "Cada mate es una pieza unica, tallada con la paciencia del artesano y el alma del campo argentino.",
    products: [
      {
        id: "imperial-calabaza-lizo",
        name: "IMPERIAL DE CALABAZA LIZO",
        description:
          "Mate calabaza revestido en cuero con virola de acero y guarda de alpaca cincelada.",
        price: 25800,
        image: "/images/foto 1.jpeg",
        badge: null,
      },
      {
        id: "torpedo-calabaza-cincelado",
        name: "TORPEDO DE CALABAZA CINCELADO",
        description:
          "Mate torpedo revestido en cuero repujado con base reforzada en alpaca y virola de alpaca cincelada.",
        price: 42000,
        image: "/images/foto 2.jpeg",
        badge: null,
      },
      {
        id: "imperial-algarrobo-alpaca",
        name: "IMPERIAL DE ALGARROBO CON VIROLA DE ALPACA",
        description:
          "Mate imperial de algarrobo con virol de acero y guarda de alpaca cincelada.",
        price: 20000,
        image: "/images/foto 3.jpeg",
        badge: null,
      },
      {
        id: "imperial-algarrobo-acero",
        name: "IMPERIAL DE ALGARROBO CON VIROLA DE ACERO",
        description:
          "Mate imperial de algarrobo con virola y guarda de acero.",
        price: 16200,
        image: "/images/foto 4.jpeg",
        badge: null,
      },
      {
        id: "camionero-calabaza",
        name: "CAMIONERO DE CALABAZA",
        description:
          "Mate de calabaza estilo camionero revestido en cuero con virola de acero.",
        price: 18360,
        image: "/images/foto 7.jpeg",
        badge: null,
      },
    ],
  },
  {
    id: "bombillas",
    title: "Bombillas",
    subtitle: "Bombillas de alpaca labrada y bombillones criollos, hechos para durar toda la vida.",
    products: [
      {
        id: "bombilla-pico-de-loro",
        name: "BOMBILLA PICO DE LORO",
        description: "Bombilla de acero con pico de loro.",
        price: 5200,
        image: "/images/foto 6.jpeg",
        badge: null,
      },
    ],
  },
  {
    id: "canastas",
    title: "Canastas",
    subtitle: "Canastas materas para llevar todo lo que necesitas a donde vayas.",
    products: [
      {
        id: "canasta-simil-cuero",
        name: "CANASTA SIMIL CUERO",
        description: "Canasta revestida en simil cuero reforzada.",
        price: 11900,
        image: "/images/foto 9.jpeg",
        badge: null,
      },
    ],
  },
  {
    id: "yerberos-azucareros",
    title: "Yerberos y Azucareros",
    subtitle: "Complementos esenciales para mantener tu mate listo en cualquier lugar.",
    products: [
      {
        id: "set-yerbera-azucarera",
        name: "SET YERBERA Y AZUCARERA",
        description: "Set de yerbera y azucarera hechos de simil cuero.",
        price: 6000,
        image: "/images/foto 5.jpeg",
        badge: null,
      },
    ],
  },
  {
    id: "termos",
    title: "Termos",
    subtitle: "Termos resistentes para mantener tu agua caliente y disfrutar del mate donde vayas.",
    products: [
      {
        id: "termo-media-manija-pico-cebador-1l",
        name: "TERMO MEDIA MANIJA CON PICO CEBADOR 1L",
        description: "Termo media manija gris con pico cebador. Duración de 24hs.",
        price: 24650,
        image: "/images/foto 8.jpeg",
        badge: null,
      },
    ],
  },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-cream shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-4 top-4 z-10 rounded-sm bg-burgundy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream shadow-md">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-parchment">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-brown-dark/0 transition-all duration-300 group-hover:bg-brown-dark/30">
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="flex translate-y-4 items-center gap-2 rounded-sm bg-burgundy px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream opacity-0 shadow-lg transition-all duration-300 hover:bg-burgundy-light group-hover:translate-y-0 group-hover:opacity-100"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <Plus className="h-4 w-4" />
            Agregar
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold uppercase tracking-wide text-brown-dark">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-medium/80">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-black text-burgundy">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="flex items-center gap-2 rounded-sm border border-gold-old bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-brown-dark transition-all hover:bg-gold-old hover:text-cream"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("mates")

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0]

  return (
    <section id="productos" className="relative py-24 paper-texture">
      {/* Section bg */}
      <div className="absolute inset-0 bg-parchment-dark/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-burgundy">
            Nuestra Coleccion
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-brown-dark md:text-5xl">
            Productos
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold-old" />
            <div className="h-2 w-2 rotate-45 bg-gold-old" />
            <div className="h-px w-16 bg-gold-old" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brown-medium">
            Explore nuestra colección de mates, bombillas y bombillones, canastas, yerbas, yerberos y azucareros y termos.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-sm border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                activeTab === cat.id
                  ? "border-burgundy bg-burgundy text-cream shadow-lg"
                  : "border-brown-dark/20 bg-cream text-brown-dark hover:border-burgundy hover:bg-burgundy/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category subtitle */}
        <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-brown-medium/70 italic">
          {activeCategory.subtitle}
        </p>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
