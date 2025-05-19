"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Evaluamos sus necesidades específicas y objetivos comerciales para diseñar una estrategia personalizada.",
  },
  {
    number: "02",
    title: "Planificación Logística",
    description: "Desarrollamos un plan detallado que incluye rutas, tiempos y costos optimizados para su operación.",
  },
  {
    number: "03",
    title: "Documentación",
    description:
      "Gestionamos todos los trámites y documentos necesarios para cumplir con las regulaciones internacionales.",
  },
  {
    number: "04",
    title: "Ejecución",
    description: "Coordinamos el transporte y seguimiento de su mercancía desde el origen hasta el destino final.",
  },
  {
    number: "05",
    title: "Entrega y Seguimiento",
    description: "Garantizamos la entrega segura y proporcionamos informes detallados de toda la operación.",
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      // Animación del título
      gsap.from(".process-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animación de la línea de tiempo
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
        },
      })

      // Animación de los pasos
      gsap.from(".process-step", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="proceso" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="process-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Un enfoque estructurado y eficiente para garantizar el éxito de sus operaciones de comercio internacional.
          </p>
        </div>

        <div className="process-steps relative max-w-4xl mx-auto">
          {/* Línea de tiempo vertical */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform md:translate-x-[-50%]"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-step relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 relative">
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="text-blue-600 font-bold text-4xl mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Punto en la línea de tiempo */}
              <div className="absolute left-[-10px] md:left-1/2 top-0 w-5 h-5 bg-blue-600 rounded-full transform md:translate-x-[-50%] border-4 border-white"></div>

              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
