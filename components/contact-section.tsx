"use client"

import { MapPin, Phone, Mail, Instagram, Clock, Package } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Mendoza, Argentina",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 261 538-9556",
    href: "tel:+5492615389556",
  },
  {
    icon: Mail,
    label: "Email",
    value: "teceba.mates03@gmail.com",
    href: "mailto:teceba.mates03@gmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Sabado: 9:00 - 19:00",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@teceba_mates",
    href: "https://instagram.com/teceba_mates",
  },
  {
    icon: Package,
    label: "Envíos / Entregas",
    value: "Envíos a todo el país",
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 paper-texture">
      <div className="absolute inset-0 bg-parchment-dark/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-burgundy">
            Hablemos
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-brown-dark md:text-5xl">
            Contacto
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold-old" />
            <div className="h-2 w-2 rotate-45 bg-gold-old" />
            <div className="h-px w-16 bg-gold-old" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-medium">
            Hacemos envios a todo el pais. Consultanos por WhatsApp o escribinos
            y te respondemos a la brevedad.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item) => {
              const content = (
                <>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-burgundy/10">
                      <item.icon className="h-5 w-5 text-burgundy" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brown-medium/60">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-brown-dark">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </>
              )

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col justify-between gap-4 rounded-sm border border-border bg-cream p-6 shadow-sm transition hover:border-burgundy/40"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div
                  key={item.label}
                  className="flex flex-col justify-between gap-4 rounded-sm border border-border bg-cream p-6 shadow-sm transition hover:border-burgundy/40"
                >
                  {content}
                </div>
              )
            })}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xl rounded-sm border border-border bg-cream p-6 shadow-sm">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-brown-dark">
                  Producto artesanal
                </p>
                <p className="mt-2 text-base text-brown-medium">
                  100% hecho artesanal
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/5492615389556?text=Hola!%20Quiero%20consultar%20por%20los%20mates%20TECEBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-burgundy px-6 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-lg transition hover:bg-burgundy-light hover:shadow-xl"
                >
                  Enviar mensaje por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
