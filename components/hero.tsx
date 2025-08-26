'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-32">
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt="SASET Banner"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Expertos en Comercio Internacional
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            <span>Servicios Aduaneros</span>
            <br />
            <span className="text-primary-200">Profesionales</span>
            <br />
            <span>en Ecuador</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Facilitamos el comercio internacional con soluciones integrales de gestión aduanera, 
            logística y trámites de importación/exportación.
          </p>

          {/* CTA Button */}
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary-700 hover:scale-105 transform group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
