import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { WHATSAPP } from '@/config/constants'
import { tracking } from '@/utils/tracking'

const NAV_LINKS = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    tracking.whatsAppClicked('header_nav')
    window.open(WHATSAPP.urlWithMessage, '_blank', 'noopener,noreferrer')
  }

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (href === '#quem-somos') {
      const el = document.querySelector('#depoimentos')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('activate-tab', { detail: 'quem-somos' }))
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-brand-gray-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[112px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
            aria-label="Realiza Empréstimos — Ir para o início"
          >
            <img
              src="/LOGO_.jpeg"
              alt="Realiza Empréstimos"
              className="h-[96px] w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-brand-gray-dark hover:text-brand-red transition-colors duration-150 focus:outline-none focus-visible:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#hero')}
              className="hidden sm:inline-flex text-sm"
            >
              Simular grátis
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsApp}
              className="gap-1.5 text-sm"
              aria-label="Falar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-brand-black hover:bg-brand-gray-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-brand-gray-border overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="container-xl py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-brand-gray-dark hover:bg-brand-gray-light hover:text-brand-red transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="mt-2 py-3 px-3 rounded-lg text-sm font-bold text-center bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          >
            Simular Agora →
          </a>
        </nav>
      </div>
    </header>
  )
}
