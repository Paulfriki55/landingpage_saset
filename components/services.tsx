"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Ship, Plane, FileText, BarChart4, Globe, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: <Ship className="w-10 h-10" />,
    title: "Exportación Marítima",
    description: "Transporte de mercancías por vía marítima con seguimiento en tiempo real y documentación completa.",
  },
  {
    icon: <Plane className="w-10 h-10" />,
    title: "Exportación Aérea",
    description: "Soluciones rápidas para envíos urgentes con cobertura global y tiempos de tránsito optimizados.",
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Gestión Aduanera",
    description: "Trámites aduaneros y documentación para cumplir con las regulaciones internacionales.",
  },
  {
    icon: <BarChart4 className="w-10 h-10" />,
    title: "Consultoría Comercial",
    description: "Asesoría especializada para optimizar sus operaciones de comercio internacional.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Importaciones",
    description: "Gestión integral de importaciones desde cualquier origen con control de costos.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Seguros y Protección",
    description: "Cobertura completa para sus mercancías durante todo el proceso logístico.",
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      // Animación del título
      gsap.from(".services-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animación de las tarjetas de servicios
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="servicios" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="services-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios de Exportación e Importación
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ofrecemos soluciones integrales para todas sus necesidades de comercio internacional, con un enfoque
            personalizado y atención a cada detalle.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
