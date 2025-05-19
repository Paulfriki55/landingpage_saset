import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "../components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SASET - Soluciones de Exportación e Importación",
  description: "Servicios profesionales de exportación e importación para empresas globales",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
