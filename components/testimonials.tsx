'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: 'María González',
      position: 'Directora de Comercio Exterior',
      company: 'TecnoImport S.A.',
      content: 'SASET ha transformado completamente nuestras operaciones de importación. Su equipo profesional y atención al detalle nos ha permitido reducir costos en un 30% y mejorar nuestros tiempos de entrega significativamente.',
      rating: 5,
      image: '/testimonial-1.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Gerente General',
      company: 'ExportEcuador Ltda.',
      content: 'Llevamos más de 5 años trabajando con SASET y su servicio ha sido excepcional. Su conocimiento del mercado internacional y capacidad de resolver problemas complejos nos ha dado una ventaja competitiva importante.',
      rating: 5,
      image: '/testimonial-2.jpg'
    },
    {
      name: 'Ana Martínez',
      position: 'CEO',
      company: 'GlobalTrade Solutions',
      content: 'La confianza y transparencia que SASET nos brinda en cada operación es invaluable. Su sistema de seguimiento en tiempo real y comunicación constante nos permite tener control total de nuestras exportaciones.',
      rating: 5,
      image: '/testimonial-3.jpg'
    },
    {
      name: 'Luis Fernández',
      position: 'Director de Logística',
      company: 'Industrias del Pacífico',
      content: 'SASET no solo es nuestro proveedor de servicios aduaneros, sino un verdadero socio estratégico. Su asesoría ha sido fundamental para expandirnos a nuevos mercados internacionales.',
      rating: 5,
      image: '/testimonial-4.jpg'
    },
    {
      name: 'Patricia Silva',
      position: 'Gerente de Operaciones',
      company: 'Comercial Andina',
      content: 'La eficiencia y profesionalismo del equipo de SASET es sobresaliente. Han simplificado procesos complejos y nos han ayudado a cumplir con todas las regulaciones aduaneras sin problemas.',
      rating: 5,
      image: '/testimonial-5.jpg'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="testimonios" ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conozca las experiencias de empresas que han transformado su comercio internacional con SASET.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100">
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-center mb-8">
                      <p className="text-lg md:text-xl text-neutral-700 leading-relaxed italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-neutral-800 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {testimonial.position}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-neutral-600">Satisfacción del Cliente</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-neutral-600">Calificación Promedio</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-neutral-600">Clientes Satisfechos</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              ¿Listo para unirse a nuestros clientes satisfechos?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Únase a las cientos de empresas que ya confían en SASET para sus operaciones 
              de comercio internacional y experimente la diferencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Solicitar Consulta Gratuita
              </button>
              <button className="btn-secondary">
                Ver Más Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
