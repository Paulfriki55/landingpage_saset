'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Building
} from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+593 2 234 5678',
      subtitle: 'Lun - Vie 8:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@saset.com.ec',
      subtitle: 'Respuesta en 2 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      content: 'Av. Amazonas N45-123',
      subtitle: 'Quito, Ecuador'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: 'Lunes a Viernes',
      subtitle: '8:00 AM - 6:00 PM'
    }
  ]

  const services = [
    'Trámites Aduaneros',
    'Transporte Marítimo',
    'Transporte Aéreo',
    'Transporte Terrestre',
    'Seguros y Garantías',
    'Asesoría Especializada',
    'Otro'
  ]

  return (
    <section id="contacto" ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Póngase en <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Contacto</span> con Nosotros
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Nuestros expertos están listos para ayudarle con sus necesidades de comercio internacional. 
            Solicite una consulta gratuita y descubra cómo podemos optimizar sus operaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">{info.title}</h4>
                      <p className="text-lg text-neutral-700 mb-1">{info.content}</p>
                      <p className="text-sm text-neutral-500">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
              <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center">
                <Building className="w-5 h-5 text-primary mr-2" />
                Horarios de Oficina
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Lunes - Viernes</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sábados</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contacto de Emergencia
              </h4>
              <p className="text-white/90 mb-4">
                Para casos urgentes fuera del horario de oficina, contáctenos directamente.
              </p>
              <div className="space-y-2">
                <p className="font-medium">+593 99 123 4567</p>
                <p className="text-sm text-white/80">emergencias@saset.com.ec</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Solicite una Consulta Gratuita
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-neutral-800 mb-2">
                    ¡Mensaje Enviado Exitosamente!
                  </h4>
                  <p className="text-neutral-600">
                    Nos pondremos en contacto con usted en las próximas 2 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Su nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="su@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="+593 99 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Servicio de Interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Seleccione un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Describa sus necesidades y nos pondremos en contacto con usted..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
            <div className="p-6 border-b border-neutral-100">
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Nuestra Ubicación</h3>
              <p className="text-neutral-600">
                Visítenos en nuestras oficinas principales en Quito, Ecuador
              </p>
            </div>
            <div className="h-96 bg-neutral-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-600">Mapa interactivo</p>
                <p className="text-sm text-neutral-500">Av. Amazonas N45-123, Quito, Ecuador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
