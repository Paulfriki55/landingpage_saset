'use client'

import { useEffect, useRef } from 'react'
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Truck, 
  ArrowRight,
  Clock,
  Shield,
  Users
} from 'lucide-react'

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const processSteps = [
    {
      step: '01',
      icon: FileText,
      title: 'Evaluación Inicial',
      description: 'Analizamos sus necesidades específicas y diseñamos la estrategia óptima para su operación.',
      details: [
        'Revisión de documentación',
        'Análisis de requisitos',
        'Evaluación de costos',
        'Propuesta personalizada'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      icon: Search,
      title: 'Gestión Documental',
      description: 'Preparamos y gestionamos toda la documentación necesaria para el proceso aduanero.',
      details: [
        'Preparación de documentos',
        'Verificación de requisitos',
        'Coordinación con autoridades',
        'Seguimiento de trámites'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      step: '03',
      icon: CheckCircle,
      title: 'Aprobación Aduanera',
      description: 'Gestionamos la aprobación y autorización de las autoridades aduaneras correspondientes.',
      details: [
        'Presentación de declaraciones',
        'Gestión de permisos',
        'Coordinación con SENAE',
        'Resolución de observaciones'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '04',
      icon: Truck,
      title: 'Logística y Entrega',
      description: 'Coordinamos el transporte y entrega final de su mercancía en el destino acordado.',
      details: [
        'Coordinación de transporte',
        'Tracking en tiempo real',
        'Entrega puerta a puerta',
        'Confirmación de recepción'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Tiempo Optimizado',
      description: 'Procesos eficientes que reducen los tiempos de tránsito hasta en un 40%'
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Protección integral de su mercancía con seguros especializados'
    },
    {
      icon: Users,
      title: 'Acompañamiento 24/7',
      description: 'Soporte continuo durante todo el proceso con expertos dedicados'
    }
  ]

  return (
    <section id="proceso" ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestro Proceso
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Proceso <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Simplificado</span> y Eficiente
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Nuestro método probado garantiza un servicio aduanero sin complicaciones, 
            con transparencia total y resultados predecibles.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary-600 hidden lg:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-6`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary mb-1">Paso {step.step}</div>
                        <h3 className="text-2xl font-bold text-neutral-800">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-primary z-10">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-lg mb-4">
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-4">
                {feature.title}
              </h4>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              ¿Tiene preguntas sobre nuestro proceso?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Nuestros expertos están disponibles para explicarle cada paso del proceso 
              y resolver cualquier duda que pueda tener.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-700 hover:scale-105 transform group">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </button>
              <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
