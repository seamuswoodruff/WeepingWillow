'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark)',
        color: 'var(--color-cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '360px', height: '360px',
        background: 'radial-gradient(circle, rgba(200,145,42,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* ── Main row ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'clamp(40px, 4vw, 56px) clamp(24px, 4vw, 48px) 0',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '32px',
        flexWrap: 'wrap',
      }}>

        {/* Left: wordmark + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: 'var(--color-cream)',
              textDecoration: 'none',
              lineHeight: 1,
              transition: 'color 150ms ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-honey-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-cream)')}
          >
            Weeping Willow Co.
          </Link>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-cream-muted)',
            lineHeight: 1.4,
            letterSpacing: '0.01em',
          }}>
            Complex flavour. No compromise.
          </p>
        </div>

        {/* Right: social icons */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingBottom: '4px' }}>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '38px', height: '38px', borderRadius: '999px',
              border: '1px solid rgba(240,228,200,0.14)',
              color: 'var(--color-cream-muted)',
              transition: 'color 180ms ease, border-color 180ms ease, background 180ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--color-cream)'
              e.currentTarget.style.borderColor = 'rgba(200,145,42,0.45)'
              e.currentTarget.style.background = 'rgba(200,145,42,0.09)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--color-cream-muted)'
              e.currentTarget.style.borderColor = 'rgba(240,228,200,0.14)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '38px', height: '38px', borderRadius: '999px',
              border: '1px solid rgba(240,228,200,0.14)',
              color: 'var(--color-cream-muted)',
              transition: 'color 180ms ease, border-color 180ms ease, background 180ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--color-cream)'
              e.currentTarget.style.borderColor = 'rgba(200,145,42,0.45)'
              e.currentTarget.style.background = 'rgba(200,145,42,0.09)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--color-cream-muted)'
              e.currentTarget.style.borderColor = 'rgba(240,228,200,0.14)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{
        maxWidth: '1280px', margin: '32px auto 0',
        padding: '0 clamp(24px, 4vw, 48px)',
      }}>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,145,42,0.2) 20%, rgba(200,145,42,0.2) 80%, transparent)',
        }} />
      </div>

      {/* ── Bottom strip ── */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: 'clamp(16px, 2vw, 22px) clamp(24px, 4vw, 48px)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '11px',
          color: 'rgba(200,180,144,0.4)', letterSpacing: '0.04em',
        }}>
          © {year} Weeping Willow Co. All rights reserved.
        </p>
        <p style={{
          fontFamily: 'var(--font-heading)', fontSize: '13px',
          fontStyle: 'italic', fontWeight: 300,
          color: 'rgba(200,145,42,0.45)', letterSpacing: '0.02em',
        }}>
          Poured with care ✦
        </p>
      </div>
    </footer>
  )
}
