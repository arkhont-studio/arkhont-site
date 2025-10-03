import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Архонт — Архитектурная мастерская',
  description: 'Проектируем и возводим храмы, часовни, купола. Санкт‑Петербург.'
}

function Header(){
  return (
    <header className="header">
      <div className="container flex justify-between items-center h-16">
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="Архонт" width={40} height={40} priority />
          <span>АРХОНТ</span>
        </Link>
        <nav className="nav">
          <Link href="/about">О мастерской</Link>
          <Link href="/projects">Проекты</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/news">Новости</Link>
          <Link className="btn btn-primary" href="/contact">Связаться</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container flex flex-col md:flex-row md:justify-between gap-4">
        <div>© 2025 Архонт • Санкт‑Петербург</div>
        <div className="opacity-70">info@arkhont.ru • +7 (812) 000‑00‑00</div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
