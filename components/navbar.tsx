"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galeria" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brown-dark/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Teceba Mates Logo"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full object-cover shadow-lg"
          />
          <span className="hidden text-lg font-bold tracking-wider text-cream sm:block">
            TECEBA MATES
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-gold-old"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-cream transition-colors hover:text-gold-old"
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-burgundy text-xs font-bold text-cream">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full bg-brown-dark/98 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-gold-old"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
