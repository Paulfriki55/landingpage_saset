"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    // Animación inicial del logo
    gsap.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    })

    // Animación de los items del menú
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
    })

    // Efecto de scroll
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=500",
        scrub: 0.3,
      },
      backdropFilter: "blur(10px)",
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
    })
  }, [scrolled])

  // Animación del menú móvil
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
      )
    }
  }, [isMenuOpen])

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary" ref={logoRef}>
            SASET
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Inicio", "Servicios", "Proceso", "Testimonios", "Contacto"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-item text-foreground hover:text-primary transition-colors draw-line"
              >
                {item}
              </Link>
            ))}
            <button className="nav-item bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Cotizar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6 px-4"
          >
            <div className="flex flex-col space-y-5">
              {["Inicio", "Servicios", "Proceso", "Testimonios", "Contacto"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-menu-item text-foreground hover:text-primary transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button
                className="mobile-menu-item bg-primary text-white px-4 py-3 rounded-md hover:bg-primary-dark transition-colors w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Cotizar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
