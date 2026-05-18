import Image from "next/image"
import { Instagram } from "lucide-react"

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galeria" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export default function Footer() {
  return (
    <footer className="relative bg-black-soft">
      <div className="absolute inset-0 opacity-5 paper-texture" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Main footer */}
        <div className="flex flex-col items-center gap-10 py-16 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/images/logo.jpeg"
              alt="Teceba Mates Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-gold-old/30"
            />
            <h3 className="mt-4 text-xl font-black uppercase tracking-wider text-cream">
              TECEBA MATES
            </h3>
            <p className="mt-1 text-xs font-medium italic tracking-wide text-cream/50">
              Donde empieza la ronda
            </p>
            <p className="mt-4 max-w-xs text-center text-xs leading-relaxed text-cream/40 lg:text-left">
              Mates artesanales premium de Mendoza, Argentina. Tradicion,
              calidad y arte en cada pieza.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-gold-old lg:text-left">
              Navegacion
            </h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:flex-col lg:gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 transition-colors hover:text-gold-old"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Contact */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-old">
              Seguinos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/teceba_mates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream/60 transition-all hover:border-gold-old hover:bg-gold-old/10 hover:text-gold-old"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5492615389556?text=Hola!%20Quiero%20consultar%20por%20los%20mates%20TECEBA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream/60 transition-all hover:border-gold-old hover:bg-gold-old/10 hover:text-gold-old"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-xs text-cream/40">teceba.mates03@gmail.com</p>
              <p className="mt-1 text-xs text-cream/40">+54 9 261 538-9556</p>
              <p className="mt-1 text-xs text-cream/40">Mendoza, Argentina</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[11px] text-cream/30">
              &copy; {new Date().getFullYear()} TECEBA MATES. Todos los derechos
              reservados. Mendoza, Argentina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
