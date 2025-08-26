'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Estadísticas', href: '#estadisticas' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Main navigation */}
      <div className="container-custom relative">
        {/* Minimal Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-2 left-4 w-16 h-16 opacity-5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5"/>
          </svg>
          <svg className="absolute top-2 right-4 w-12 h-12 opacity-5" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        <div className="flex items-center justify-between py-2 relative z-10">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo_saset.png"
                alt="SASET Logo"
                fill
                className="object-contain"
                priority
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:text-primary relative group ${
                  scrolled ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {item.name}
                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Cotizar Ahora</span>
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-200 rounded-lg"></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-neutral-200 relative overflow-hidden">
          {/* Simple dots pattern */}
          <div className="absolute inset-0 opacity-3">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          
          <div className="container-custom py-2 relative z-10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-neutral-700 hover:text-primary transition-all duration-300 py-2 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="btn-primary w-full mt-4 relative overflow-hidden group">
                <span className="relative z-10">Cotizar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
