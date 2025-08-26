'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Users, 
  Globe, 
  Award, 
  Clock,
  TrendingUp,
  Shield
} from 'lucide-react'

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState({
    clients: 0,
    countries: 0,
    experience: 0,
    satisfaction: 0,
    operations: 0,
    team: 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            startCounters()
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

  const startCounters = () => {
    const targetCounts = {
      clients: 500,
      countries: 150,
      experience: 15,
      satisfaction: 98,
      operations: 2500,
      team: 25
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        clients: Math.floor(targetCounts.clients * progress),
        countries: Math.floor(targetCounts.countries * progress),
        experience: Math.floor(targetCounts.experience * progress),
        satisfaction: Math.floor(targetCounts.satisfaction * progress),
        operations: Math.floor(targetCounts.operations * progress),
        team: Math.floor(targetCounts.team * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targetCounts)
      }
    }, stepDuration)
  }

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'Empresas que confían en nuestros servicios'
    },
    {
      icon: Globe,
      value: counters.countries,
      suffix: '+',
      label: 'Países de Cobertura',
      description: 'Presencia global con red de agentes'
    },
    {
      icon: Award,
      value: counters.experience,
      suffix: ' Años',
      label: 'de Experiencia',
      description: 'Trayectoria en comercio internacional'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Satisfacción del Cliente',
      description: 'Calificación promedio de nuestros servicios'
    },
    {
      icon: Clock,
      value: counters.operations,
      suffix: '+',
      label: 'Operaciones Exitosas',
      description: 'Importaciones y exportaciones gestionadas'
    },
    {
      icon: Shield,
      value: counters.team,
      suffix: '+',
      label: 'Expertos Certificados',
      description: 'Profesionales especializados en aduanas'
    }
  ]

  return (
    <section id="estadisticas" ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Nuestros Números
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resultados que <span className="text-white/90">Hablan por Sí Solos</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Más de una década de experiencia respaldada por números que demuestran 
            nuestro compromiso con la excelencia en servicios aduaneros.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-white/70 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Certificaciones y Reconocimientos</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>ISO 9001:2015 - Gestión de Calidad</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>OEA - Operador Económico Autorizado</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Certificación SENAE - Agente de Aduanas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Miembro de la Cámara de Comercio</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Compromiso con la Excelencia</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80">Satisfacción del Cliente</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80">Cumplimiento de Plazos</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80">Resolución de Incidencias</span>
                  <span className="font-bold">99%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
