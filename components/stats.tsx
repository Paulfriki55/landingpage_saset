"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { value: "98%", label: "Satisfacción del cliente" },
  { value: "50+", label: "Países alcanzados" },
  { value: "1200+", label: "Envíos mensuales" },
  { value: "15+", label: "Años de experiencia" },
]

export default function Stats() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      // Animación de contador para los números
      gsap.from(".stat-value", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animación para el fondo
      gsap.from(".stats-bg", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="stats-bg absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value text-4xl md:text-5xl font-bold text-white mb-2" data-value={stat.value}>
                {stat.value}
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
