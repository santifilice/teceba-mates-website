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
        id: "mate-imperial",
        name: "Mate Imperial Bordo",
        description:
          "Mate artesanal de calabaza con virola de alpaca cincelada. Acabado bordo premium con detalles grabados a mano.",
        price: 18500,
        image: "/images/products/mate-imperial.jpg",
        badge: "Mas Vendido",
      },
      {
        id: "mate-camionero",
        name: "Mate Camionero Tradicional",
        description:
          "El clasico mate camionero con boca ancha. Ideal para el cebador experto. Cuero cosido a mano.",
        price: 14200,
        image: "/images/products/mate-camionero.jpg",
        badge: null,
      },
      {
        id: "mate-cuero",
        name: "Mate Cuero Premium",
        description:
          "Envuelto en cuero curtido con guarda pampa. Base reforzada y virola de alpaca labrada.",
        price: 22800,
        image: "/images/products/mate-cuero.jpg",
        badge: "Premium",
      },
    ],
  },
  {
    id: "bombillas",
    title: "Bombillas y Bombillones",
    subtitle: "Bombillas de alpaca labrada y bombillones criollos, hechos para durar toda la vida.",
    products: [
      {
        id: "bombilla-alpaca",
        name: "Bombilla Alpaca Labrada",
        description:
          "Bombilla de alpaca con grabados criollos. Desmontable para facil limpieza. Pico recto.",
        price: 8500,
        image: "/images/products/bombilla-alpaca.jpg",
        badge: null,
      },
      {
        id: "bombillon-criollo",
        name: "Bombillon Criollo",
        description:
          "Bombillon grueso de alpaca con grabado artesanal. Ideal para mates grandes y camioneros.",
        price: 11200,
        image: "/images/products/bombillon-criollo.jpg",
        badge: "Nuevo",
      },
      {
        id: "bombilla-pico-loro",
        name: "Bombilla Pico de Loro",
        description:
          "Clasica bombilla pico de loro de alpaca. Punta curva para mejor cebado. Grabados finos.",
        price: 9800,
        image: "/images/products/bombilla-pico-loro.jpg",
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
        id: "canasta-matera",
        name: "Canasta Matera Mimbre",
        description:
          "Canasta tejida a mano con mimbre y tientos de cuero. Espacio para termo, mate, yerbera y azucarera.",
        price: 25600,
        image: "/images/products/canasta-matera.jpg",
        badge: "Artesanal",
      },
      {
        id: "canasta-cuero",
        name: "Canasta de Cuero Premium",
        description:
          "Matera de cuero repujado con compartimentos. Hebillas de bronce antiguo. Guarda pampa grabada.",
        price: 34500,
        image: "/images/products/canasta-cuero.jpg",
        badge: "Premium",
      },
      {
        id: "kit-matero",
        name: "Kit Matero Completo",
        description:
          "Incluye mate, bombilla, yerbera y azucarera. Todo en caja de madera artesanal. El regalo perfecto.",
        price: 38900,
        image: "/images/products/kit-matero.jpg",
        badge: "Oferta",
      },
    ],
  },
  {
    id: "yerbas",
    title: "Yerbas",
    subtitle: "Yerbas seleccionadas para acompanar tus mates con el mejor sabor.",
    products: [
      {
        id: "yerba-tradicional",
        name: "Yerba Tradicional Premium",
        description:
          "Blend artesanal de yerba mate con estacionamiento natural de 12 meses. Sabor intenso y equilibrado.",
        price: 6800,
        image: "/images/products/yerba-tradicional.jpg",
        badge: null,
      },
      {
        id: "yerba-serrana",
        name: "Yerba Serrana de Montana",
        description:
          "Yerba mate serrana con hierbas de las sierras mendocinas. Peperina, menta y poleo del campo.",
        price: 7500,
        image: "/images/products/yerba-serrana.jpg",
        badge: "Edicion Limitada",
      },
      {
        id: "yerbera",
        name: "Yerbera de Cuero",
        description:
          "Yerbera artesanal de cuero repujado con cierre de bronce antiguo. Guarda pampa grabada a mano.",
        price: 12600,
        image: "/images/products/yerbera.jpg",
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
            Cada mate es una pieza unica. Explora nuestra coleccion de mates,
            bombillas, canastas y yerbas.
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
