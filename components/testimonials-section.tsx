"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Julio Luquez",
    location: "Godoy Cruz, Mendoza, Argentina",
    text: "Me armé una canasta con mate artesanal y bombillón de alpaca y quedó espectacular. El mate está muy bien terminado, se nota que es hecho a mano. La bombilla es pesada y de buena calidad, no se tapa. Muy recomendable para regalo o uso diario.",
    rating: 5,
  },
  {
    name: "Verónica Valoy",
    location: "Ciudad, Mendoza, Argentina",
    text: "Compré varias yerbas (Canarias y Rei Verde) y la verdad estaban bastante más baratas que en otros lados. La Canarias vino un poco más comprimida de lo esperado, pero igual rinde muchísimo. La entrega fue rápida y todo bien embalado. Volvería a comprar.",
    rating: 4,
  },
  {
    name: "Guillermo Farrugia",
    location: "Barriales, San Juan, Argentina",
    text: "Compré yerba Baldo y Sara para probar porque estaban más baratas que en el súper. La Baldo me gustó más, la Sara es más suave. Lo único es que una baldo vino un poco aplastada, pero el producto estaba perfecto igual. Buen precio y variedad.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-24">
      <div className="absolute inset-0 bg-burgundy" />
      <div className="absolute inset-0 opacity-10 paper-texture" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-old">
            Lo Que Dicen
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-cream md:text-5xl">
            Testimonios
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold-old/60" />
            <div className="h-2 w-2 rotate-45 bg-gold-old/60" />
            <div className="h-px w-16 bg-gold-old/60" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-sm border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold-old/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold-old text-gold-old"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm italic leading-relaxed text-cream/80">
                {`"${t.text}"`}
              </p>
              <div className="mt-6 border-t border-cream/10 pt-4">
                <p className="text-sm font-bold text-cream">{t.name}</p>
                <p className="text-xs text-cream/50">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
