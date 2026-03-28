'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Our Story',    href: '/our-story' },
  { label: 'Honeysuckle', href: '/honeysuckle' },
  { label: 'Where to Buy', href: '/where-to-buy' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const menuRef                   = useRef<HTMLDivElement>(null)

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Close menu on route change (click) ── */
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ───────────────── Header bar ───────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter:       scrolled ? 'blur(14px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(1.4)' : 'none',
          backgroundColor: scrolled
            ? 'rgba(250, 243, 224, 0.90)'
            : 'rgba(250, 243, 224, 0.70)',
          borderBottom: scrolled
            ? '1px solid rgba(154, 109, 24, 0.14)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 2px 24px rgba(154, 109, 24, 0.09), 0 1px 4px rgba(0,0,0,0.05)'
            : 'none',
          transition: 'background-color 320ms ease, backdrop-filter 320ms ease, box-shadow 320ms ease, border-color 320ms ease',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin:   '0 auto',
            padding:  '0 clamp(20px, 4vw, 48px)',
            height:   '72px',
            display:  'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* ── Wordmark ── */}
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              fontFamily:     'var(--font-heading)',
              fontSize:       'clamp(18px, 2vw, 22px)',
              fontWeight:     400,
              fontStyle:      'italic',
              letterSpacing:  '-0.01em',
              lineHeight:     1,
              color:          'var(--color-text-dark)',
              textDecoration: 'none',
              flexShrink:     0,
              transition:     'color 150ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-honey-dark)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dark)')}
          >
            Weeping Willow Co.
          </Link>

          {/* ── Desktop nav links ── */}
          <ul
            style={{
              display:        'none', // overridden at ≥768px via media query class
              alignItems:     'center',
              gap:            '36px',
              listStyle:      'none',
              margin:         0,
              padding:        0,
              flex:           1,
              justifyContent: 'flex-end',
            }}
            className="navbar__links"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} style={navLinkStyle} className="navbar__link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right zone: CTA + mobile toggle ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="navbar__toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                display:        'flex', // hidden at ≥768px
                flexDirection:  'column',
                alignItems:     'flex-end',
                gap:            '5px',
                background:     'none',
                border:         'none',
                cursor:         'pointer',
                padding:        '8px 0',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* Two refined lines that morph */}
              <span style={{
                display:       'block',
                height:        '1.5px',
                width:         menuOpen ? '20px' : '24px',
                background:    'var(--color-text-dark)',
                borderRadius:  '2px',
                transformOrigin: 'right center',
                transform:     menuOpen ? 'rotate(-40deg) translateY(1px)' : 'none',
                transition:    'transform 280ms cubic-bezier(0.4,0,0.2,1), width 280ms ease',
              }} />
              <span style={{
                display:       'block',
                height:        '1.5px',
                width:         menuOpen ? '20px' : '16px',
                background:    'var(--color-honey)',
                borderRadius:  '2px',
                transformOrigin: 'right center',
                transform:     menuOpen ? 'rotate(40deg) translateY(-1px)' : 'none',
                transition:    'transform 280ms cubic-bezier(0.4,0,0.2,1), width 280ms ease',
              }} />
            </button>
          </div>
        </nav>
      </header>

      {/* ───────────────── Mobile overlay menu ───────────────── */}
      <div
        ref={menuRef}
        aria-hidden={!menuOpen}
        style={{
          position:   'fixed',
          top:        '72px',
          left:       0,
          right:      0,
          bottom:     0,
          zIndex:     49,
          display:    'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--color-bg-deep)',
          transform:  menuOpen ? 'translateY(0)' : 'translateY(-12px)',
          opacity:    menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease',
          overflowY:  'auto',
        }}
      >
        {/* Decorative top border */}
        <div style={{
          height:     '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,145,42,0.4), transparent)',
          flexShrink: 0,
        }} />

        {/* Nav links — large, editorial */}
        <nav style={{
          flex:           1,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          padding:        '48px clamp(24px, 6vw, 56px)',
          gap:            '4px',
        }}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'clamp(36px, 8vw, 56px)',
                fontWeight:    300,
                fontStyle:     'italic',
                letterSpacing: '-0.02em',
                lineHeight:    1.15,
                color:         'var(--color-text-dark)',
                textDecoration:'none',
                display:       'block',
                padding:       '10px 0',
                borderBottom:  i < NAV_LINKS.length - 1 ? '1px solid rgba(154,109,24,0.1)' : 'none',
                transform:     menuOpen ? 'translateX(0)' : 'translateX(-16px)',
                opacity:       menuOpen ? 1 : 0,
                transition:    `transform 340ms cubic-bezier(0.4,0,0.2,1) ${80 + i * 50}ms, opacity 300ms ease ${60 + i * 50}ms, color 150ms ease`,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-honey)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dark)')}
            >
              {label}
            </Link>
          ))}

          {/* CTA inside mobile menu */}
          <div style={{ marginTop: '40px' }}>
            <Link
              href="/honeysuckle"
              onClick={closeMenu}
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                fontFamily:     'var(--font-body)',
                fontSize:       '12px',
                fontWeight:     600,
                letterSpacing:  '0.14em',
                textTransform:  'uppercase',
                color:          'var(--color-dark)',
                background:     'var(--color-honey)',
                padding:        '14px 32px',
                borderRadius:   '999px',
                textDecoration: 'none',
                transform:      menuOpen ? 'translateY(0)' : 'translateY(8px)',
                opacity:        menuOpen ? 1 : 0,
                transition:     `transform 340ms cubic-bezier(0.34,1.56,0.64,1) ${80 + NAV_LINKS.length * 50}ms, opacity 300ms ease ${60 + NAV_LINKS.length * 50}ms`,
              }}
            >
              Order Now →
            </Link>
          </div>
        </nav>

        {/* Bottom ornament */}
        <div style={{
          padding:    '24px clamp(24px, 6vw, 56px)',
          flexShrink: 0,
        }}>
          <p style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color:       'var(--color-text-muted)',
          }}>
            Weeping Willow Co. — Premium Mocktails
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .navbar__links { display: flex !important; }
          .navbar__toggle { display: none !important; }
        }
        .navbar__link {
          font-family:     var(--font-body);
          font-size:       11px;
          font-weight:     500;
          letter-spacing:  0.12em;
          text-transform:  uppercase;
          color:           var(--color-text-mid);
          text-decoration: none;
          position:        relative;
          padding-bottom:  2px;
          white-space:     nowrap;
          transition:      color 150ms ease;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 100%;
          height: 1px;
          background: var(--color-honey);
          transition: right 240ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar__link:hover {
          color: var(--color-text-dark);
        }
        .navbar__link:hover::after {
          right: 0;
        }
      `}</style>
    </>
  )
}

/* ── Shared nav link style (applied inline for TS safety) ── */
const navLinkStyle: React.CSSProperties = {
  fontFamily:     'var(--font-body)',
  fontSize:       '11px',
  fontWeight:     500,
  letterSpacing:  '0.12em',
  textTransform:  'uppercase',
  color:          'var(--color-text-mid)',
  textDecoration: 'none',
  position:       'relative',
  paddingBottom:  '2px',
  transition:     'color 150ms ease',
}
