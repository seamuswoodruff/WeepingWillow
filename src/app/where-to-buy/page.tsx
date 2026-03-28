'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const STOCKISTS = [
  {
    name: '[Store Name]',
    area: '[Neighborhood], [City]',
    note: 'Available in store',
    tag: 'Bottle Shop',
  },
  {
    name: '[Store Name]',
    area: '[Neighborhood], [City]',
    note: 'Available in store and online',
    tag: 'Specialty Grocer',
  },
  {
    name: '[Store Name]',
    area: '[City]',
    note: 'Available at the bar and to take home',
    tag: 'Restaurant & Bar',
  },
  {
    name: '[Store Name]',
    area: '[Neighborhood], [City]',
    note: 'Available in store',
    tag: 'Natural Foods',
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
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(12px, 1.5vw, 20px)',
            marginBottom: '32px',
          }} className="stockists__grid">
            {STOCKISTS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-bg-deep)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 2vw, 28px)',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(200,145,42,0.3)'
                  el.style.boxShadow = '0 8px 24px rgba(154,109,24,0.1)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(154,109,24,0.1)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)', fontSize: '10px',
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--color-green-dark)',
                  background: 'rgba(107,147,88,0.1)',
                  border: '1px solid rgba(107,147,88,0.2)',
                  borderRadius: '999px', padding: '3px 10px',
                  alignSelf: 'flex-start',
                }}>
                  {s.tag}
                </span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(17px, 1.6vw, 20px)',
                    fontWeight: 400, fontStyle: 'italic',
                    letterSpacing: '-0.01em', color: 'var(--color-text-dark)',
                    lineHeight: 1.2, marginBottom: '4px',
                  }}>
                    {s.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    color: 'var(--color-text-muted)', letterSpacing: '0.03em',
                  }}>
                    {s.area}
                  </p>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '12px',
                  lineHeight: 1.55, color: 'var(--color-text-mid)',
                  borderTop: '1px solid var(--color-border-light)',
                  paddingTop: '10px',
                }}>
                  {s.note}
                </p>
              </div>
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
                'Competitive wholesale pricing',
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
          4. ONLINE — ORDER DIRECT
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(64px, 7vw, 96px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--color-honey-dark)',
            }}>
              Order Online
            </span>
          </div>

          {/* Premium order card */}
          <div style={{
            background: 'var(--color-dark)',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }} className="order-card__grid">

            {/* Left: image panel */}
            <div style={{ position: 'relative', minHeight: '420px' }}>
              <Image
                src="/images/product-hero.jpg"
                alt="Order Honeysuckle direct"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, transparent 50%, rgba(28,17,10,0.7) 100%)',
              }} />
              {/* Label badge */}
              <div style={{
                position: 'absolute', top: '28px', left: '28px',
                background: 'rgba(26,15,6,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(200,145,42,0.3)',
                borderRadius: '999px',
                padding: '6px 16px',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '999px', background: 'var(--color-green-light)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '10px',
                  fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--color-cream)',
                }}>
                  Available Now
                </span>
              </div>
            </div>

            {/* Right: order details */}
            <div style={{
              padding: 'clamp(36px, 4vw, 56px)',
              display: 'flex', flexDirection: 'column', gap: '28px',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Subtle warm glow */}
              <div aria-hidden style={{
                position: 'absolute', top: '-80px', right: '-80px',
                width: '360px', height: '360px',
                background: 'radial-gradient(circle, rgba(200,145,42,0.08) 0%, transparent 65%)',
                pointerEvents: 'none',
              }} />

              <div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--color-honey)', marginBottom: '10px',
                }}>
                  Weeping Willow Co.
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 300, fontStyle: 'italic',
                  letterSpacing: '-0.02em', lineHeight: 1.05,
                  color: 'var(--color-cream)',
                  marginBottom: '16px',
                }}>
                  Order direct.<br />
                  <span style={{ color: 'var(--color-honey-fill)' }}>Always the freshest batch.</span>
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.75,
                  color: 'var(--color-cream-muted)',
                  maxWidth: '380px',
                }}>
                  When you order from us directly, you&apos;re getting the latest production run — no sitting in a warehouse, no compromised freshness. It also means more of your money goes back into what we&apos;re building.
                </p>
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(200,145,42,0.2) 0%, transparent 80%)',
              }} />

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  fontWeight: 400, letterSpacing: '-0.02em',
                  color: 'var(--color-cream)',
                }}>
                  $XX.XX
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '12px',
                  color: 'rgba(200,180,144,0.5)', letterSpacing: '0.04em',
                }}>
                  per bottle
                </span>
              </div>

              {/* ── SHOPIFY BUY BUTTON EMBED ── */}
              {/*
                TODO: Replace the placeholder button below with the Shopify Buy Button embed.
                Steps:
                1. Shopify Admin → Sales Channels → Buy Button
                2. Create a button for Honeysuckle
                3. Paste the embed code here and remove the placeholder <button>
              */}
              <button
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--color-dark)', background: 'var(--color-honey)',
                  padding: '15px 32px', borderRadius: '999px', border: 'none',
                  cursor: 'pointer',
                  transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-honey-light)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(200,145,42,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--color-honey)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Order Now — Shopify embed placeholder
              </button>

              {/* Shipping + delivery info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { icon: '→', text: 'Free shipping on orders over $XX — placeholder' },
                  { icon: '→', text: 'Estimated delivery: X–X business days — placeholder' },
                ].map(item => (
                  <p key={item.text} style={{
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    color: 'rgba(200,180,144,0.45)', letterSpacing: '0.02em',
                    display: 'flex', alignItems: 'flex-start', gap: '8px',
                  }}>
                    <span style={{ color: 'rgba(200,145,42,0.4)', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
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
            grid-template-columns: 1fr 1fr !important;
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
        @media (max-width: 480px) {
          .stockists__grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
