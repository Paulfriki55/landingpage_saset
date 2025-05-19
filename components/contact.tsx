"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      // Animación del título
      gsap.from(".contact-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animación de la información de contacto
      gsap.from(".contact-info-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animación del formulario
      gsap.from(".form-element", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="contacto" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="contact-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctenos</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Estamos listos para ayudarle con sus necesidades de exportación e importación. Póngase en contacto con
            nuestro equipo de expertos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="contact-info">
            <div className="contact-info-item flex items-start mb-8">
              <div className="text-blue-600 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Av. Principal 123, Piso 4, Oficina 405
                  <br />
                  Ciudad Empresarial, País
                </p>
              </div>
            </div>

            <div className="contact-info-item flex items-start mb-8">
              <div className="text-blue-600 mr-4">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">+123 456 7890</p>
                <p className="text-gray-600">+123 456 7891</p>
              </div>
            </div>

            <div className="contact-info-item flex items-start mb-8">
              <div className="text-blue-600 mr-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@saset.com</p>
                <p className="text-gray-600">ventas@saset.com</p>
              </div>
            </div>

            <div className="contact-info-item flex items-start">
              <div className="text-blue-600 mr-4">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábado: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact-form bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form>
              <div className="form-element mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Su nombre"
                />
              </div>

              <div className="form-element mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Su email"
                />
              </div>

              <div className="form-element mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="export">Exportación</option>
                  <option value="import">Importación</option>
                  <option value="customs">Gestión Aduanera</option>
                  <option value="consulting">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="form-element mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describa su consulta"
                ></textarea>
              </div>

              <div className="form-element">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
