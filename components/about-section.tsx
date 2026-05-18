"use client"

import Image from "next/image"
import { Award, Heart, Mountain, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasion Artesanal",
    description:
      "Cada mate es tallado y terminado a mano, con la dedicacion y el amor del artesano mendocino.",
  },
  {
    icon: Mountain,
    title: "Raices Mendocinas",
    description:
      "Nacimos al pie de los Andes, entre vinedos y tradicion. Nuestra esencia es la tierra mendocina.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description:
      "Seleccionamos las mejores calabazas y materiales nobles: alpaca, cuero curtido, madera nativa.",
  },
  {
    icon: Users,
    title: "La Ronda",
    description:
      "El mate nos une. Creemos en la ronda como ritual de amistad, familia y comunidad argentina.",
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="absolute inset-0 bg-brown-dark" />
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5 paper-texture" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left - Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-sm border border-gold-old/20" />
              <Image
                src="/images/gaucho.png"
                alt="Gaucho argentino con mate - Teceba Mates"
                width={500}
                height={650}
                className="relative rounded-sm shadow-2xl"
              />
              {/* Decorative label */}
              <div className="absolute -bottom-6 -right-6 rounded-sm border border-gold-old/40 bg-burgundy px-6 py-3 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cream">
                  Desde 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-old">
              Nuestra Historia
            </span>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-cream md:text-5xl">
              Sobre
              <br />
              <span className="text-gold-old">Teceba Mates</span>
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-16 bg-gold-old" />
              <div className="h-2 w-2 rotate-45 bg-gold-old" />
              <div className="h-px w-16 bg-gold-old" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              TECEBA MATES nace en Mendoza de la mano de tres amigos con una
              misma idea: crear mates artesanales de calidad, hechos con
              dedicación y respeto por la tradición argentina. Es un
              emprendimiento que surge desde cero, con mucho esfuerzo y ganas de
              hacer las cosas bien.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Cada mate refleja nuestra identidad argentina: pasar tiempo con
              amigos, llevarlo al trabajo o al gimnasio, de la universidad al
              campo. Un buen mate siempre acompaña, incluso en los momentos
              difíciles, porque forma parte de lo cotidiano y de lo que nos une.
            </p>

            {/* Values grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-gold-old/30 bg-gold-old/10">
                    <value.icon className="h-5 w-5 text-gold-old" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-cream">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-cream/50">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
