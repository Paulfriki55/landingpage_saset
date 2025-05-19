"use client"

import { type ReactNode, useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Registrar plugins de GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // Inicializar Lenis para scroll suave con configuración mejorada
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Ease out expo
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      smoothWheel: true,
      // Usamos as any para evitar errores de tipo
    } as any)

    // Función para actualizar ScrollTrigger cuando Lenis hace scroll
    function raf(time: number) {
      lenisRef.current?.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    // Vincular Lenis con ScrollTrigger
    lenisRef.current.on("scroll", ({ scroll, limit, velocity, direction, progress }: any) => {
      ScrollTrigger.update()
      
      // Emitir evento personalizado con datos de scroll para que otros componentes puedan reaccionar
      document.documentElement.style.setProperty("--scroll", scroll.toString())
      document.documentElement.style.setProperty("--scroll-progress", progress.toString())
      
      // Añadir clase cuando hay velocidad de scroll para efectos adicionales
      if (Math.abs(velocity) > 0.05) {
        document.documentElement.classList.add("is-scrolling")
      } else {
        document.documentElement.classList.remove("is-scrolling")
      }
    })

    // Iniciar el loop de animación
    requestAnimationFrame(raf)

    return () => {
      // Limpiar cuando el componente se desmonte
      lenisRef.current?.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
