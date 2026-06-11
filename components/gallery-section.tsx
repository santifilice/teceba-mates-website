"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/images/torpedo%20bordo.jpeg",
    alt: "Torpedo bordo",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/torpedo%20bordo%20monta%C3%B1a.jpeg",
    alt: "Torpedo bordo montaña",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/torpedo%20facha%20con%20termo.jpeg",
    alt: "Torpedo facha con termo",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/mate-calabaza.jpeg",
    alt: "Mate calabaza",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
