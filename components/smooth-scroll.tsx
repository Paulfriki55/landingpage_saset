'use client'

import { useEffect, useRef, useCallback } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

// Hook personalizado para smooth scrolling
const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null)

  const initLenis = useCallback(() => {
    if (typeof window === 'undefined') return

    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => {
        // Función de easing más suave y natural
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      },
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.1,
      wheelMultiplier: 1,
      syncTouch: false,
      syncTouchLerp: 0.1,
      touchInertiaMultiplier: 7,
    })

    // Función de animación frame optimizada
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const scrollToElement = useCallback((elementId: string, offset: number = -80) => {
    if (!lenisRef.current) return

    const element = document.getElementById(elementId)
    if (element) {
      lenisRef.current.scrollTo(element, {
        duration: 2,
        easing: (t) => {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        },
        offset,
      })
    }
  }, [])

  const pauseScroll = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.stop()
    }
  }, [])

  const resumeScroll = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.start()
    }
  }, [])

  return {
    lenisRef,
    initLenis,
    scrollToElement,
    pauseScroll,
    resumeScroll,
  }
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const { lenisRef, initLenis, scrollToElement, pauseScroll, resumeScroll } = useSmoothScroll()

  useEffect(() => {
    initLenis()

    // Manejo de enlaces internos para smooth scrolling
    const handleInternalLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && link.href.includes('#')) {
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const targetId = href.substring(1)
          scrollToElement(targetId)
        }
      }
    }

    // Agregar event listener para enlaces internos
    document.addEventListener('click', handleInternalLinks)

    // Pausar Lenis cuando el usuario está interactuando con elementos específicos
    const interactiveElements = document.querySelectorAll('input, textarea, select, button')
    interactiveElements.forEach(el => {
      el.addEventListener('focus', pauseScroll)
      el.addEventListener('blur', resumeScroll)
    })

    // Pausar scroll en hover de elementos interactivos
    const hoverElements = document.querySelectorAll('.card, .btn-primary, .btn-secondary')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', pauseScroll)
      el.addEventListener('mouseleave', resumeScroll)
    })

    // Optimización para dispositivos móviles
    const isMobile = window.innerWidth <= 768
    if (isMobile && lenisRef.current) {
      // Para móviles, recreamos Lenis con configuración más conservadora
      lenisRef.current.destroy()
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        },
        touchMultiplier: 1,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        syncTouch: false,
        syncTouchLerp: 0.1,
        touchInertiaMultiplier: 7,
      })

      const mobileRaf = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time)
        }
        requestAnimationFrame(mobileRaf)
      }
      requestAnimationFrame(mobileRaf)
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      document.removeEventListener('click', handleInternalLinks)
      
      // Limpiar event listeners
      interactiveElements.forEach(el => {
        el.removeEventListener('focus', pauseScroll)
        el.removeEventListener('blur', resumeScroll)
      })

      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', pauseScroll)
        el.removeEventListener('mouseleave', resumeScroll)
      })
    }
  }, [initLenis, scrollToElement, pauseScroll, resumeScroll, lenisRef])

  return <>{children}</>
}

export default SmoothScroll
