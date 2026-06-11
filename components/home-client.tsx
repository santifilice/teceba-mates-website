"use client"

import { CartProvider } from "@/lib/cart-context"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import CartDrawer from "@/components/cart-drawer"
import Footer from "@/components/footer"

export default function HomeClient() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5492617705282?text=Hola!%20Quiero%20consultar%20por%20los%20mates%20TECEBA"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy shadow-lg transition-all hover:scale-110 hover:bg-burgundy-light hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 text-cream"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </CartProvider>
  )
}
