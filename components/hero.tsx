"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".hero-image",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )

      // Animación de las líneas decorativas
      gsap.from(".line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.2,
      })
    },
    { scope: containerRef },
  )

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="line h-px bg-blue-600 w-full absolute top-1/4"></div>
        <div className="line h-px bg-blue-600 w-full absolute top-2/4"></div>
        <div className="line h-px bg-blue-600 w-full absolute top-3/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Soluciones globales para <span className="text-blue-600">importación y exportación</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8">
            Conectamos tu negocio con el mundo a través de servicios logísticos integrales y asesoría especializada en
            comercio internacional.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Solicitar cotización
            </button>
            <button className="border border-gray-300 hover:border-blue-600 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors">
              Conocer servicios
            </button>
          </div>
        </div>

        <div className="hero-image relative z-10 hidden md:block">
          <div className="relative w-full h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Logística global"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Círculo decorativo */}
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
    </section>
  )
}
