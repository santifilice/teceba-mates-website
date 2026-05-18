"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#c7b28d_0%,#d7bd9e_24%,#e9dbc4_100%)]"
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-30 paper-texture" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,29,29,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,168,83,0.1),transparent_30%)]" />

      {/* Top hero image */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
            src="/images/fondo.png"
            alt="Mate artesanal con paisaje de montaña"
            fill
            className="object-cover"
            style={{ filter: 'contrast(1.06) saturate(1.05)' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d7bd9e]/60 via-[#d7bd9e]/30 to-[#e9dbc4]/80" />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 w-full h-1/2"
            style={{
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 lg:flex-row lg:gap-12 lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Main visual only: logo, title and tagline removed per request */}

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-lg text-base leading-relaxed text-burgundy/85">
            Mates artesanales premium de Mendoza, Argentina. Cada pieza es una
            obra de arte, tallada con la tradicion y el alma del campo argentino.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600 mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-sm border-2 border-gold-old bg-burgundy px-8 py-3 text-sm font-bold uppercase tracking-widest text-cream shadow-lg transition-all hover:bg-burgundy-light hover:shadow-xl"
            >
              Ver Mates
            </a>
            <a
              href="#contacto"
              className="rounded-sm border-2 border-burgundy/25 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-widest text-burgundy shadow-lg transition-all hover:border-burgundy hover:bg-burgundy/10"
            >
              Contactanos
            </a>
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex items-center gap-4">
            <div className="h-px w-8 bg-gold-old/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-burgundy/70">
              Desde 2026 &middot; Mendoza, Argentina
            </span>
            <div className="h-px w-8 bg-gold-old/60" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-burgundy/70">
            Descubrir
          </span>
          <div className="h-8 w-px bg-burgundy/30" />
        </div>
      </div>
    </section>
  )
}
