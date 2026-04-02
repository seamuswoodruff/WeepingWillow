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
          padding:  'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 48px) clamp(40px, 5vw, 64px)',
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

          {/* Willow icon glyph */}
          <div aria-hidden style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img
              src="/images/willow-icon.svg"
              alt=""
              style={{
                width: '68px',
                height: 'auto',
                // Tint black SVG to match the leaf green (rgb(107,147,88)) at ~35% opacity
                filter: 'invert(54%) sepia(28%) saturate(480%) hue-rotate(63deg) brightness(88%) contrast(85%) opacity(0.38)',
              }}
            />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      'clamp(48px, 9vw, 80px)',
            fontWeight:    400,
            fontStyle:     'italic',
            letterSpacing: '-0.03em',
            lineHeight:    1.02,
            color:         'var(--color-green)',
            margin:        0,
          }}>
            Get in touch
          </h1>
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
            4. CLOSING NOTE
        ───────────────────────────────────────────────────────── */}
        <section style={{
          padding:   'clamp(12px, 2vw, 20px) clamp(24px, 5vw, 48px) clamp(48px, 6vw, 72px)',
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
