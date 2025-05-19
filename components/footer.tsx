"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const footerRef = useRef(null)

  useGSAP(
    () => {
      // Animación simple para el footer
      gsap.from(".footer-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
    },
    { scope: footerRef },
  )

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="footer-content grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SASET</h3>
            <p className="text-gray-400 mb-4">
              Soluciones integrales para exportación e importación, conectando su negocio con el mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Exportación Marítima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Exportación Aérea
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Gestión Aduanera
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Consultoría Comercial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Importaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-white transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Boletín Informativo</h4>
            <p className="text-gray-400 mb-4">
              Suscríbase para recibir noticias y actualizaciones sobre comercio internacional.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Su email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-grow"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SASET. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
