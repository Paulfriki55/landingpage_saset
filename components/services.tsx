'use client'

import { useEffect, useRef } from 'react'
import { 
  FileText, 
  Ship, 
  Plane, 
  Truck, 
  Shield, 
  Clock, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: FileText,
      title: 'Trámites Aduaneros',
      description: 'Gestión completa de documentación y trámites aduaneros para importación y exportación.',
      features: ['Declaraciones aduaneras', 'Gestión de permisos', 'Asesoría legal', 'Seguimiento en tiempo real'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Ship,
      title: 'Transporte Marítimo',
      description: 'Soluciones logísticas marítimas con cobertura global y tiempos de entrega optimizados.',
      features: ['FCL y LCL', 'Consolidación de carga', 'Tracking en línea', 'Seguros marítimos'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Plane,
      title: 'Transporte Aéreo',
      description: 'Servicios de carga aérea express y regular para envíos urgentes y de alto valor.',
      features: ['Carga express', 'Carga consolidada', 'Handling especializado', 'Documentación rápida'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Truck,
      title: 'Transporte Terrestre',
      description: 'Distribución nacional e internacional con flota propia y aliados estratégicos.',
      features: ['Distribución nacional', 'Carga internacional', 'Tracking GPS', 'Entrega puerta a puerta'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Seguros y Garantías',
      description: 'Protección integral de su mercancía con coberturas personalizadas y asesoría especializada.',
      features: ['Seguro de carga', 'Responsabilidad civil', 'Coberturas personalizadas', 'Gestión de siniestros'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Asesoría Especializada',
      description: 'Consultoría en comercio internacional con expertos certificados y experiencia comprobada.',
      features: ['Consultoría legal', 'Optimización de costos', 'Análisis de mercados', 'Capacitación'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Tiempo de Respuesta',
      description: 'Respuesta en menos de 2 horas para consultas urgentes'
    },
    {
      icon: Globe,
      title: 'Cobertura Global',
      description: 'Presencia en más de 150 países con red de agentes'
    },
    {
      icon: CheckCircle,
      title: 'Certificaciones',
      description: 'Certificados ISO 9001, OEA y otras normativas internacionales'
    }
  ]

  return (
    <section id="servicios" ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Soluciones <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Integrales</span> para tu Negocio
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ofrecemos servicios aduaneros y logísticos completos para facilitar el comercio internacional 
            de su empresa con la máxima eficiencia y seguridad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 transform group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-primary font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 transform duration-300">
                Saber más
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              ¿Por qué elegir <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">SASET</span>?
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nuestra experiencia y compromiso nos convierten en el socio estratégico ideal 
              para su operación de comercio internacional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para optimizar su comercio internacional?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestros expertos están listos para asesorarle y crear la solución perfecta 
              para sus necesidades de importación y exportación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Solicitar Consulta Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                Descargar Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
