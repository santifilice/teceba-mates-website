"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Cebando mate con agua caliente",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Ronda de mate al atardecer en Mendoza",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Artesano tallando un mate",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Coleccion de mates artesanales",
    span: "col-span-2 row-span-1",
  },
]

export default function GallerySection() {
  return (
    <section id="galeria" className="relative py-24 paper-texture">
      <div className="absolute inset-0 bg-parchment/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-burgundy">
            Nuestro Mundo
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-brown-dark md:text-5xl">
            Galeria
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold-old" />
            <div className="h-2 w-2 rotate-45 bg-gold-old" />
            <div className="h-px w-16 bg-gold-old" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium tracking-wide text-cream">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
