'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const STOCKISTS = [
  {
    name: 'Morning Glory',
    area: 'Brunswick, Maine',
    tag: 'Health Food Store',
    logo: '/images/stockist-morning-glory.png',
    href: 'https://www.moglonf.com',
    overlayColor: 'rgba(20, 12, 4, 0.55)',
  },
  {
    name: 'Brickyard Brands',
    area: 'Portland, Maine',
    tag: 'Distributor',
    logo: '/images/stockist-brickyard-brands.png',
    href: 'https://www.brickyardbrands.com',
    overlayColor: 'rgba(10, 6, 2, 0.45)',
  },
]

export default function WhereToBuyPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [formValues, setFormValues] = useState({
    name: '', business: '', location: '', message: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setFormStatus('sent')
    } catch {
      setFormStatus('idle')
    }
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          1. PAGE HERO
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(64px, 8vw, 104px) clamp(24px, 4vw, 48px) clamp(48px, 5vw, 72px)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border-light)',
      }}>
        {/* Background glow */}
        <div aria-hidden style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(245,201,106,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: '-40px', left: '-40px',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(107,147,88,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '32px',
          position: 'relative', zIndex: 1,
        }} className="hero__split">

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-honey-dark)',
              }}>
                Availability
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1.0, letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)',
              marginBottom: '20px',
            }}>
              Find Honeysuckle.
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.65,
              color: 'var(--color-text-mid)',
              maxWidth: '560px',
            }}>
              We&apos;re a small-batch brand, currently available online and at a growing number of select locations. The easiest way to get a bottle is always direct — but we&apos;re working on making that closer to you.
            </p>
          </div>

          {/* Product image accent */}
          <div style={{
            position: 'relative',
            width: 'clamp(120px, 12vw, 180px)',
            aspectRatio: '1/2',
            borderRadius: '999px',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 16px 48px rgba(154,109,24,0.15)',
          }} className="hero__product-img">
            <Image
              src="/images/product-1.jpg"
              alt="Honeysuckle"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(200,145,42,0.08) 0%, rgba(26,15,6,0.15) 100%)',
            }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. LOCAL STOCKISTS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-surface)',
        padding: 'clamp(64px, 7vw, 96px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,145,42,0.2), transparent)',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
            marginBottom: 'clamp(40px, 4vw, 56px)',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--color-honey-dark)',
                }}>
                  In Store
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '-0.02em',
                color: 'var(--color-text-dark)',
              }}>
                Local Stockists
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'var(--color-text-muted)', letterSpacing: '0.02em',
              maxWidth: '320px', lineHeight: 1.6, textAlign: 'right',
            }} className="stockist__header-note">
              We&apos;re selective about where we stock — every retailer below was chosen because they care about quality the same way we do.
            </p>
          </div>

          {/* Stockist grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, clamp(200px, 26vw, 340px)))',
            gap: 'clamp(16px, 2vw, 28px)',
            marginBottom: '32px',
          }} className="stockists__grid">
            {STOCKISTS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  aspectRatio: '1 / 1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  border: '1px solid rgba(200,145,42,0.12)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  transition: 'transform 260ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 260ms ease, border-color 260ms ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.22)'
                  el.style.borderColor = 'rgba(200,145,42,0.35)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)'
                  el.style.borderColor = 'rgba(200,145,42,0.12)'
                }}
              >
                {/* Logo background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${s.logo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 400ms ease',
                }} className="stockist-card__bg" />

                {/* Dark gradient overlay */}
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, ${s.overlayColor} 0%, rgba(0,0,0,0.1) 60%, transparent 100%)`,
                }} />

                {/* Visit link indicator */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  width: '32px', height: '32px', borderRadius: '999px',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"/>
                  </svg>
                </div>

                {/* Card content */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  padding: 'clamp(16px, 2vw, 24px)',
                  display: 'flex', flexDirection: 'column', gap: '6px',
                }}>
                  <span style={{
                    display: 'inline-block', alignSelf: 'flex-start',
                    fontFamily: 'var(--font-body)', fontSize: '10px',
                    fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(245,201,106,0.9)',
                    background: 'rgba(200,145,42,0.2)',
                    border: '1px solid rgba(200,145,42,0.35)',
                    borderRadius: '999px', padding: '3px 10px',
                    backdropFilter: 'blur(6px)',
                  }}>
                    {s.tag}
                  </span>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 400, fontStyle: 'italic',
                    letterSpacing: '-0.01em', color: '#fff',
                    lineHeight: 1.15,
                  }}>
                    {s.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em',
                  }}>
                    {s.area}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '16px 20px',
            background: 'rgba(200,145,42,0.05)',
            border: '1px solid rgba(200,145,42,0.12)',
            borderRadius: '12px',
            width: 'fit-content',
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--color-honey-dark)" strokeWidth="1.5">
              <circle cx="8" cy="8" r="6"/>
              <path d="M8 5v4M8 11v.5" strokeLinecap="round"/>
            </svg>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'var(--color-text-mid)', lineHeight: 1.5,
            }}>
              Don&apos;t see your area? We&apos;re expanding —{' '}
              <span style={{ color: 'var(--color-honey-dark)', fontWeight: 500 }}>check back soon.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. WHOLESALE / STOCKIST INQUIRY
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(64px, 7vw, 96px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(107,147,88,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 6vw, 88px)',
          alignItems: 'start',
          position: 'relative', zIndex: 1,
        }} className="wholesale__grid">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--color-honey-dark)',
                }}>
                  Stock Honeysuckle
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                color: 'var(--color-text-dark)',
              }}>
                Interested in carrying Honeysuckle?
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.8, color: 'var(--color-text-mid)',
            }}>
              We work with independent retailers, restaurants, bars, cafés, and hospitality businesses who care about what they put in front of their customers. We keep our wholesale relationships personal — so reach out and tell us a little about what you&apos;re building.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.8, color: 'var(--color-text-mid)',
            }}>
              We typically respond within 2–3 business days.
            </p>
            <div style={{
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-light)',
              borderRadius: '14px',
              padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '14px',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                What to expect
              </p>
              {[
                'Minimum order quantities that work for small retailers',
                'Support with in-store merchandising and education',
                'A direct line to the founders — no middlemen',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '5px', height: '5px', borderRadius: '999px',
                    background: 'var(--color-honey)', flexShrink: 0, marginTop: '7px',
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px',
                    lineHeight: 1.6, color: 'var(--color-text-mid)',
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formStatus === 'sent' ? (
              <div style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid rgba(107,147,88,0.25)',
                borderRadius: '20px',
                padding: 'clamp(40px, 5vw, 60px)',
                textAlign: 'center',
                display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '999px',
                  background: 'rgba(107,147,88,0.12)',
                  border: '1px solid rgba(107,147,88,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: 'var(--color-text-dark)', letterSpacing: '-0.01em',
                }}>
                  We&apos;ll be in touch.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  lineHeight: 1.7, color: 'var(--color-text-muted)',
                  maxWidth: '320px',
                }}>
                  Thanks for reaching out. We look forward to learning more about your business and seeing if we&apos;re a good fit.
                </p>
              </div>
            ) : (
              <form
                name="wholesale-inquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '20px',
                  padding: 'clamp(32px, 4vw, 48px)',
                  display: 'flex', flexDirection: 'column', gap: '20px',
                }}
              >
                <input type="hidden" name="form-name" value="wholesale-inquiry" />
                <p style={{ display: 'none' }}>
                  <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form__row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}>Your Name</label>
                    <input type="text" name="name" required placeholder="[Name]"
                      value={formValues.name}
                      onChange={e => setFormValues(v => ({ ...v, name: e.target.value }))}
                      style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-dark)', background: 'var(--color-bg-deep)', border: '1.5px solid var(--color-border)', borderRadius: '10px', padding: '12px 14px', outline: 'none', transition: 'border-color 180ms ease' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--color-honey)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}>Business Name</label>
                    <input type="text" name="business" required placeholder="[Business Name]"
                      value={formValues.business}
                      onChange={e => setFormValues(v => ({ ...v, business: e.target.value }))}
                      style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-dark)', background: 'var(--color-bg-deep)', border: '1.5px solid var(--color-border)', borderRadius: '10px', padding: '12px 14px', outline: 'none', transition: 'border-color 180ms ease' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--color-honey)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                  }}>Location</label>
                  <input type="text" name="location" required placeholder="City, State / Country"
                    value={formValues.location}
                    onChange={e => setFormValues(v => ({ ...v, location: e.target.value }))}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-dark)', background: 'var(--color-bg-deep)', border: '1.5px solid var(--color-border)', borderRadius: '10px', padding: '12px 14px', outline: 'none', transition: 'border-color 180ms ease' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-honey)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                  }}>Tell us about your business</label>
                  <textarea name="message" required rows={4}
                    placeholder="What do you sell, who are your customers, and why do you think Honeysuckle would be a good fit?"
                    value={formValues.message}
                    onChange={e => setFormValues(v => ({ ...v, message: e.target.value }))}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-dark)', background: 'var(--color-bg-deep)', border: '1.5px solid var(--color-border)', borderRadius: '10px', padding: '12px 14px', outline: 'none', resize: 'vertical', transition: 'border-color 180ms ease', lineHeight: 1.65 }}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-honey)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <button type="submit" disabled={formStatus === 'sending'}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--color-dark)',
                    background: formStatus === 'sending' ? 'var(--color-honey-dark)' : 'var(--color-honey)',
                    padding: '14px 28px', borderRadius: '999px', border: 'none',
                    cursor: formStatus === 'sending' ? 'default' : 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                  onMouseEnter={e => { if (formStatus !== 'sending') { e.currentTarget.style.background = 'var(--color-honey-light)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-honey)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {formStatus === 'sending' ? 'Sending…' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. CLOSING SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-dark)',
        padding: 'clamp(64px, 7vw, 96px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,145,42,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '28px',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.35)' }} />
            <span style={{ color: 'rgba(200,145,42,0.45)', fontSize: '12px' }}>✦</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.35)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.1,
            color: 'var(--color-cream)',
            marginBottom: '16px',
          }}>
            Can&apos;t find us near you yet?
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.75,
            color: 'var(--color-cream-muted)',
            marginBottom: '36px',
          }}>
            Online ordering ships nationwide. We&apos;re adding new stockists regularly — but ordering direct is always the fastest way to get a bottle in your hands.
          </p>

          <Link
            href="/honeysuckle"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--color-dark)', background: 'var(--color-honey)',
              padding: '14px 36px', borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-honey-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(200,145,42,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-honey)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Order Honeysuckle Online →
          </Link>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero__split {
            grid-template-columns: 1fr !important;
          }
          .hero__product-img {
            display: none !important;
          }
          .order-card__grid {
            grid-template-columns: 1fr !important;
          }
          .order-card__grid > div:first-child {
            min-height: 280px !important;
          }
          .stockists__grid {
            grid-template-columns: minmax(0, 340px) !important;
          }
          .wholesale__grid {
            grid-template-columns: 1fr !important;
          }
          .form__row {
            grid-template-columns: 1fr !important;
          }
          .stockist__header-note {
            text-align: left !important;
          }
        }
        .stockist-card__bg:hover {
          transform: scale(1.04);
        }
      `}</style>
    </>
  )
}
