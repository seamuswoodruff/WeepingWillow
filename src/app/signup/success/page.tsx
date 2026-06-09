import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're on the list",
}

export default function SignupSuccessPage() {
  return (
    <main style={{
      background: 'var(--color-bg-deep)',
      minHeight: 'calc(100dvh - 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(48px, 8vw, 96px) clamp(24px, 5vw, 48px)',
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: '20px',
        padding: 'clamp(48px, 6vw, 72px) clamp(32px, 5vw, 56px)',
        boxShadow: '0 4px 32px rgba(200,145,42,0.08), 0 1px 6px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '50%',
            background: 'rgba(200,145,42,0.10)',
            border: '1px solid rgba(200,145,42,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <path d="M2 9 L9 16 L22 2" stroke="var(--color-honey)" strokeWidth="1.75"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 style={{
          fontFamily:    'var(--font-heading)',
          fontSize:      'clamp(30px, 4vw, 40px)',
          fontWeight:    400,
          fontStyle:     'italic',
          letterSpacing: '-0.02em',
          lineHeight:    1.1,
          color:         'var(--color-text-dark)',
          marginBottom:  '14px',
        }}>
          You&apos;re on the list.
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '15px',
          lineHeight: 1.7,
          color:      'var(--color-text-muted)',
          marginBottom: '36px',
        }}>
          We&apos;ll be in touch when Honeysuckle is ready.
          No spam — just the good stuff.
        </p>

        <Link href="/" style={{
          display:       'inline-block',
          fontFamily:    'var(--font-body)',
          fontSize:      '11px',
          fontWeight:    600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color:         'var(--color-dark)',
          background:    'var(--color-honey)',
          padding:       '14px 32px',
          borderRadius:  '999px',
          textDecoration: 'none',
          boxShadow:     '0 4px 16px rgba(200,145,42,0.20)',
        }}>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
