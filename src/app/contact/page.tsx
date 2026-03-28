'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

/* ── Shared style helpers ── */
const labelStyle: React.CSSProperties = {
  fontFamily:    'var(--font-body)',
  fontSize:      '11px',
  fontWeight:    500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color:         'var(--color-text-muted)',
  display:       'block',
}

export default function ContactPage() {
  const [formStatus,   setFormStatus]   = useState<FormStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  /* ── Field style — updates per focus ── */
  const field = (name: string): React.CSSProperties => ({
    width:        '100%',
    fontFamily:   'var(--font-body)',
    fontSize:     '15px',
    lineHeight:   1.6,
    color:        'var(--color-text-dark)',
    background:   focusedField === name
      ? 'rgba(250,243,224,0.9)'
      : 'rgba(242,228,192,0.35)',
    border:       `1px solid ${focusedField === name
      ? 'rgba(200,145,42,0.50)'
      : 'rgba(154,109,24,0.18)'}`,
    borderRadius: '10px',
    padding:      '14px 18px',
    outline:      'none',
    boxShadow:    focusedField === name
      ? '0 0 0 3px rgba(200,145,42,0.07), 0 2px 10px rgba(200,145,42,0.06)'
      : '0 1px 3px rgba(0,0,0,0.04)',
    transition:   'border-color 200ms ease, background 200ms ease, box-shadow 200ms ease',
    appearance:   'none' as const,
    WebkitAppearance: 'none' as const,
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setFormStatus(res.ok ? 'sent' : 'error')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <>
      <main style={{ background: 'var(--color-bg-deep)', minHeight: '100dvh' }}>

        {/* ─────────────────────────────────────────────────────────
            1. PAGE HERO
        ───────────────────────────────────────────────────────── */}
        <section style={{
          padding:  'clamp(72px, 10vw, 120px) clamp(24px, 5vw, 48px) clamp(40px, 5vw, 64px)',
          textAlign: 'center',
          position:  'relative',
          overflow:  'hidden',
        }}>
          {/* Ambient bg radials */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 70% 90% at 50% -10%, rgba(200,145,42,0.07) 0%, transparent 65%),
              radial-gradient(ellipse 40% 50% at 15% 100%, rgba(107,147,88,0.05) 0%, transparent 55%)
            `,
          }} />

          {/* Botanical glyph */}
          <div aria-hidden style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <svg width="44" height="52" viewBox="0 0 44 52" fill="none">
              {/* Stem */}
              <line x1="22" y1="52" x2="22" y2="26" stroke="rgba(107,147,88,0.32)" strokeWidth="1" strokeLinecap="round"/>
              {/* Leaf body */}
              <path d="M22 8 C22 8, 12 18, 12 26 C12 34, 17 40, 22 40 C27 40, 32 34, 32 26 C32 18, 22 8, 22 8 Z"
                fill="rgba(107,147,88,0.07)" stroke="rgba(107,147,88,0.35)" strokeWidth="1"/>
              {/* Centre vein */}
              <line x1="22" y1="10" x2="22" y2="40" stroke="rgba(107,147,88,0.2)" strokeWidth="0.75" strokeLinecap="round"/>
              {/* Side veins */}
              <path d="M22 22 C19 20, 14 21, 14 21" stroke="rgba(107,147,88,0.2)" strokeWidth="0.75" strokeLinecap="round"/>
              <path d="M22 28 C25 26, 30 27, 30 27" stroke="rgba(107,147,88,0.2)" strokeWidth="0.75" strokeLinecap="round"/>
              {/* Side leaves */}
              <path d="M22 32 C18 28, 10 31, 10 31 C10 31, 14 36, 22 32 Z"
                fill="rgba(107,147,88,0.05)" stroke="rgba(107,147,88,0.22)" strokeWidth="0.75"/>
              <path d="M22 36 C26 32, 34 35, 34 35 C34 35, 30 40, 22 36 Z"
                fill="rgba(107,147,88,0.05)" stroke="rgba(107,147,88,0.22)" strokeWidth="0.75"/>
            </svg>
          </div>

          {/* Eyebrow */}
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '10px',
            fontWeight:    500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'var(--color-green)',
            marginBottom:  '16px',
          }}>
            Get in touch
          </p>

          {/* Headline — warm, not corporate */}
          <h1 style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      'clamp(48px, 9vw, 80px)',
            fontWeight:    400,
            fontStyle:     'italic',
            letterSpacing: '-0.03em',
            lineHeight:    1.02,
            color:         'var(--color-text-dark)',
            marginBottom:  '20px',
          }}>
            Say hello.
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'clamp(15px, 1.6vw, 17px)',
            color:      'var(--color-text-muted)',
            lineHeight: 1.7,
            maxWidth:   '360px',
            margin:     '0 auto',
          }}>
            We read every message ourselves and write back within 48 hours — usually sooner.
          </p>
        </section>


        {/* ─────────────────────────────────────────────────────────
            2. CONTACT FORM
        ───────────────────────────────────────────────────────── */}
        <section style={{
          padding: '0 clamp(24px, 5vw, 48px) clamp(80px, 10vw, 120px)',
        }}>
          <div style={{ maxWidth: '580px', margin: '0 auto' }}>

            {formStatus === 'sent' ? (

              /* ── Success state ── */
              <div style={{
                textAlign:    'center',
                padding:      'clamp(56px, 7vw, 88px) clamp(32px, 5vw, 64px)',
                background:   'var(--color-bg-surface)',
                borderRadius: '16px',
                border:       '1px solid var(--color-border-light)',
                boxShadow:    '0 4px 32px rgba(200,145,42,0.08), 0 1px 6px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'center', marginBottom: '24px',
                }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'rgba(107,147,88,0.10)',
                    border:     '1px solid rgba(107,147,88,0.28)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M2 8 L8 14 L20 2" stroke="var(--color-green)" strokeWidth="1.75"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'clamp(26px, 3vw, 34px)',
                  fontWeight:    400,
                  fontStyle:     'italic',
                  letterSpacing: '-0.02em',
                  color:         'var(--color-text-dark)',
                  marginBottom:  '12px',
                }}>
                  Message received.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '15px',
                  color:      'var(--color-text-muted)',
                  lineHeight: 1.7,
                  maxWidth:   '320px',
                  margin:     '0 auto',
                }}>
                  Thanks for reaching out — we&apos;ll be in touch soon. Keep an eye on your inbox.
                </p>
              </div>

            ) : (

              /* ── Form ── */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>Skip: <input name="bot-field" /></label>
                </div>

                {/* Name + Email row */}
                <div className="contact-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>
                      Name <span style={{ color: 'var(--color-honey)', fontStyle: 'normal' }}>*</span>
                    </label>
                    <input
                      type="text" name="name" required
                      placeholder="Your name"
                      style={field('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={()  => setFocusedField(null)}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>
                      Email <span style={{ color: 'var(--color-honey)', fontStyle: 'normal' }}>*</span>
                    </label>
                    <input
                      type="email" name="email" required
                      placeholder="your@email.com"
                      style={field('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={()  => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Subject dropdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Subject</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      name="subject"
                      defaultValue="general"
                      style={{ ...field('subject'), cursor: 'pointer', paddingRight: '42px' }}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={()  => setFocusedField(null)}
                    >
                      <option value="general">General Enquiry</option>
                      <option value="order">Order Question</option>
                      <option value="press">Press &amp; Media</option>
                      <option value="stockist">Stockist Enquiry</option>
                      <option value="other">Something Else</option>
                    </select>
                    {/* Custom chevron */}
                    <div aria-hidden style={{
                      position:      'absolute',
                      right:         '15px',
                      top:           '50%',
                      transform:     'translateY(-50%)',
                      pointerEvents: 'none',
                      color:         'var(--color-text-muted)',
                    }}>
                      <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message textarea */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>
                    Message <span style={{ color: 'var(--color-honey)', fontStyle: 'normal' }}>*</span>
                  </label>
                  <textarea
                    name="message" required
                    placeholder="Tell us what's on your mind…"
                    rows={7}
                    style={{ ...field('message'), resize: 'vertical', minHeight: '148px' }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={()  => setFocusedField(null)}
                  />
                </div>

                {/* Submit */}
                <div style={{ paddingTop: '4px' }}>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="contact-submit"
                    style={{
                      width:         '100%',
                      fontFamily:    'var(--font-body)',
                      fontSize:      '11px',
                      fontWeight:    600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color:         'var(--color-dark)',
                      background:    formStatus === 'sending'
                        ? 'var(--color-honey-dark)'
                        : 'var(--color-honey)',
                      border:       'none',
                      borderRadius: '999px',
                      padding:      '18px 40px',
                      cursor:       formStatus === 'sending' ? 'wait' : 'pointer',
                      boxShadow:    '0 4px 20px rgba(200,145,42,0.22), 0 1px 4px rgba(200,145,42,0.12)',
                      transition:   'background 200ms ease, box-shadow 200ms ease, transform 150ms cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                  >
                    {formStatus === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>

                  {formStatus === 'error' && (
                    <p style={{
                      marginTop:  '14px',
                      textAlign:  'center',
                      fontFamily: 'var(--font-body)',
                      fontSize:   '13px',
                      color:      'var(--color-coral)',
                      lineHeight: 1.6,
                    }}>
                      Something didn&apos;t go through — please try again or email us directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────
            3. ALTERNATIVE CONTACT
        ───────────────────────────────────────────────────────── */}
        <section style={{
          padding: '0 clamp(24px, 5vw, 48px) clamp(72px, 9vw, 104px)',
        }}>
          <div style={{
            maxWidth:       '480px',
            margin:         '0 auto',
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            gap:            '22px',
          }}>
            {/* Ornamental rule */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '16px',
              width:      '100%',
            }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border-light)' }} />
              <span style={{
                fontFamily:    'var(--font-heading)',
                fontStyle:     'italic',
                fontSize:      '14px',
                fontWeight:    300,
                color:         'var(--color-text-muted)',
                letterSpacing: '0.03em',
                whiteSpace:    'nowrap',
              }}>
                or find us here
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border-light)' }} />
            </div>

            {/* Direct email */}
            <a
              href="mailto:hello@weepingwillowco.com"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '14px',
                fontWeight:    400,
                letterSpacing: '0.01em',
                color:         'var(--color-text-muted)',
                textDecoration:'none',
                transition:    'color 150ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-honey-dark)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              hello@weepingwillowco.com
            </a>

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="alt-social"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '8px',
                  fontFamily:     'var(--font-body)',
                  fontSize:       '12px',
                  fontWeight:     500,
                  letterSpacing:  '0.04em',
                  color:          'var(--color-text-muted)',
                  textDecoration: 'none',
                  padding:        '10px 18px',
                  borderRadius:   '999px',
                  border:         '1px solid var(--color-border-light)',
                  transition:     'color 180ms ease, border-color 180ms ease, background 180ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color        = 'var(--color-text-dark)'
                  el.style.borderColor  = 'rgba(200,145,42,0.38)'
                  el.style.background   = 'rgba(200,145,42,0.06)'
                  el.style.transform    = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color        = 'var(--color-text-muted)'
                  el.style.borderColor  = 'var(--color-border-light)'
                  el.style.background   = 'transparent'
                  el.style.transform    = 'translateY(0)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                aria-label="Follow us on TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="alt-social"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '8px',
                  fontFamily:     'var(--font-body)',
                  fontSize:       '12px',
                  fontWeight:     500,
                  letterSpacing:  '0.04em',
                  color:          'var(--color-text-muted)',
                  textDecoration: 'none',
                  padding:        '10px 18px',
                  borderRadius:   '999px',
                  border:         '1px solid var(--color-border-light)',
                  transition:     'color 180ms ease, border-color 180ms ease, background 180ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color        = 'var(--color-text-dark)'
                  el.style.borderColor  = 'rgba(200,145,42,0.38)'
                  el.style.background   = 'rgba(200,145,42,0.06)'
                  el.style.transform    = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color        = 'var(--color-text-muted)'
                  el.style.borderColor  = 'var(--color-border-light)'
                  el.style.background   = 'transparent'
                  el.style.transform    = 'translateY(0)'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z"/>
                </svg>
                TikTok
              </a>

            </div>
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────
            4. CLOSING NOTE
        ───────────────────────────────────────────────────────── */}
        <section style={{
          padding:   'clamp(32px, 4vw, 48px) clamp(24px, 5vw, 48px) clamp(72px, 9vw, 104px)',
          textAlign: 'center',
        }}>
          {/* Ornamental mark */}
          <div aria-hidden style={{
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            gap:            '12px',
            marginBottom:   '28px',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(200,145,42,0.25)' }} />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="3" stroke="rgba(200,145,42,0.35)" strokeWidth="1"/>
              <circle cx="4" cy="4" r="1" fill="rgba(200,145,42,0.40)"/>
            </svg>
            <div style={{ width: '32px', height: '1px', background: 'rgba(200,145,42,0.25)' }} />
          </div>

          <p style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      'clamp(17px, 2.2vw, 22px)',
            fontWeight:    300,
            fontStyle:     'italic',
            letterSpacing: '-0.01em',
            lineHeight:    1.65,
            color:         'var(--color-text-muted)',
            maxWidth:      '440px',
            margin:        '0 auto',
          }}>
            Every message lands straight in our inbox — not a ticket queue, not a bot.
            We genuinely love hearing from you.
          </p>
        </section>

      </main>

      {/* ── Page-scoped styles ── */}
      <style>{`
        /* Responsive name/email row */
        @media (max-width: 500px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }

        /* Submit button hover / active */
        .contact-submit:hover:not(:disabled) {
          background:   var(--color-honey-light) !important;
          box-shadow:   0 6px 28px rgba(200,145,42,0.28), 0 2px 8px rgba(200,145,42,0.16) !important;
          transform:    translateY(-1px);
        }
        .contact-submit:active:not(:disabled) {
          transform:    translateY(0);
          box-shadow:   0 2px 10px rgba(200,145,42,0.14) !important;
        }
        .contact-submit:focus-visible {
          outline:      2px solid var(--color-honey);
          outline-offset: 3px;
        }

        /* Placeholder colour */
        input::placeholder,
        textarea::placeholder {
          color:   var(--color-text-muted);
          opacity: 0.65;
        }

        /* Select option background */
        select option {
          background: var(--color-bg-deep);
          color:      var(--color-text-dark);
        }

        /* Focus-visible for inputs */
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible {
          outline: none;
        }
      `}</style>
    </>
  )
}
