"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Exportadora Pacífico",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "SASET ha transformado nuestra logística internacional. Sus procesos eficientes y atención personalizada nos han permitido expandir nuestro negocio a nuevos mercados con confianza.",
    stars: 5,
  },
  {
    name: "María González",
    company: "Importadora Global",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Trabajar con SASET ha sido una experiencia excepcional. Su equipo de expertos nos ha guiado en cada paso del proceso de importación, ahorrando tiempo y recursos.",
    stars: 5,
  },
  {
    name: "Alejandro Torres",
    company: "Distribuidora Internacional",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "La precisión y profesionalismo de SASET nos ha permitido cumplir con los plazos más exigentes. Su conocimiento en trámites aduaneros es invaluable para nuestro negocio.",
    stars: 4,
  },
  {
    name: "Laura Méndez",
    company: "Comercializadora Andina",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Desde que contratamos a SASET, nuestras operaciones de exportación han mejorado significativamente. Su enfoque en la satisfacción del cliente es realmente destacable.",
    stars: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      // Animación del título
      gsap.from(".testimonials-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Configurar la animación para los testimonios
      const setupTestimonialAnimation = () => {
        gsap.from(".testimonial-card", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        })
      }

      // Ejecutar inicialmente
      setupTestimonialAnimation()

      // Configurar para que se ejecute cuando cambie el índice
      return () => {
        setupTestimonialAnimation()
      }
    },
    { scope: sectionRef, dependencies: [currentIndex] },
  )

  return (
    <section id="testimonios" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Empresas de diversos sectores confían en nuestros servicios para sus operaciones de comercio internacional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Controles de navegación */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          {/* Tarjeta de testimonio */}
          <div className="testimonial-card bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonials[currentIndex].stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">"{testimonials[currentIndex].quote}"</blockquote>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
