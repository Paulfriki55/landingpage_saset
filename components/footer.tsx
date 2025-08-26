'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { name: 'Trámites Aduaneros', href: '#servicios' },
      { name: 'Transporte Marítimo', href: '#servicios' },
      { name: 'Transporte Aéreo', href: '#servicios' },
      { name: 'Transporte Terrestre', href: '#servicios' },
      { name: 'Seguros y Garantías', href: '#servicios' },
      { name: 'Asesoría Especializada', href: '#servicios' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#nosotros' },
      { name: 'Nuestro Equipo', href: '#equipo' },
      { name: 'Certificaciones', href: '#certificaciones' },
      { name: 'Casos de Éxito', href: '#casos-exito' },
      { name: 'Trabaje con Nosotros', href: '#trabajo' }
    ],
    recursos: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guías de Importación', href: '/guias' },
      { name: 'Calculadora de Costos', href: '/calculadora' },
      { name: 'Glosario Aduanero', href: '/glosario' },
      { name: 'Descargar Brochure', href: '/brochure' }
    ],
    soporte: [
      { name: 'Centro de Ayuda', href: '/ayuda' },
      { name: 'Preguntas Frecuentes', href: '/faq' },
      { name: 'Contacto de Emergencia', href: '#contacto' },
      { name: 'Seguimiento de Carga', href: '/tracking' },
      { name: 'Reportar Problema', href: '/reportar' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/saset', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/saset', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/saset', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/saset', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/saset', label: 'YouTube' }
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo_saset.png"
                  alt="SASET Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">SASET</h3>
                <p className="text-sm text-neutral-400">Servicios Aduaneros</p>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Expertos en servicios aduaneros y gestión logística internacional en Ecuador. 
              Facilitamos el comercio exterior con soluciones integrales y profesionales.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">+593 2 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">info@saset.com.ec</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">Av. Amazonas N45-123, Quito</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">Lun - Vie 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Suscríbase a nuestro boletín</h4>
              <p className="text-neutral-300 mb-4">
                Reciba las últimas noticias sobre comercio internacional y ofertas especiales.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Su email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-400"
                />
                <button className="px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-lg transition-colors duration-300">
                  Suscribirse
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">Síganos</h4>
              <div className="flex justify-end space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-neutral-400">
              <span>&copy; {currentYear} SASET. Todos los derechos reservados.</span>
              <a href="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="/terminos" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="/cookies" className="hover:text-primary transition-colors">Política de Cookies</a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/593991234567?text=Hola,%20me%20interesan%20sus%20servicios%20aduaneros"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </footer>
  )
}

export default Footer
