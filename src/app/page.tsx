'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────
   HEADLINE OPTIONS (pick one):
   1. "Some moments deserve a better drink."
   2. "Nothing watered down about it."
   3. "Complexity, finally bottled."
   Using option 1 — speaks to occasion without mentioning alcohol.
───────────────────────────────────────────────────────────────────── */

export default function Home() {
  // On first visit the preloader is running — hero tree fades in to cross-fade with it
  const [freshLoad, setFreshLoad] = useState(false)

  useEffect(() => {
    const isFresh = !sessionStorage.getItem('wwco-fresh')
    sessionStorage.setItem('wwco-fresh', '1')
    if (isFresh) setFreshLoad(true)
  }, [])


  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — full-viewport, golden hour
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          minHeight: 'calc(100dvh - 72px)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(245,201,106,0.35) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 90% 80%, rgba(200,145,42,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 55% 50% at 5% 15%, rgba(107,147,88,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 35% 45% at 30% 85%, rgba(107,147,88,0.12) 0%, transparent 55%),
            var(--color-bg-deep)
          `,
        }}
      >
        {/* Grain texture */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto', width: '100%',
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'center',
          position: 'relative', zIndex: 1,
        }} className="hero__grid">

          {/* Text block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-honey-dark)',
              }}>
                Weeping Willow Co.
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1.0, letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)',
              margin: 0,
            }}>
              Some moments deserve<br />
              <span style={{ color: 'var(--color-honey)' }}>a better drink.</span>
            </h1>

            {/* Subheading */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.4vw, 17px)',
              fontWeight: 400, lineHeight: 1.65,
              color: 'var(--color-text-mid)', maxWidth: '440px', margin: 0,
            }}>
              Honeysuckle is a premium non-alcoholic cocktail — layered, botanical,
              and crafted for those who refuse to settle for something forgettable.
            </p>

          </div>

          {/* Brand mark */}
          <div id="hero-tree" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative',
            // On first visit: start hidden, fade in right as the preloader tree lands and fades out
            // Preloader: move 0.75s + fade delay 0.72s → starts fading at 3.52s from page load
            animation: freshLoad ? 'hero-tree-in 0.3s ease-out 3.5s both' : 'none',
          }}>
            {/* Warm radial glow behind the icon */}
            <div aria-hidden style={{
              position: 'absolute', inset: '-20%',
              background: 'radial-gradient(ellipse 70% 70% at 50% 55%, rgba(200,145,42,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <img
              src="/images/willow-icon.svg"
              alt="Weeping Willow Co."
              style={{
                width: '100%',
                maxWidth: 'clamp(260px, 36vw, 480px)',
                height: 'auto',
                display: 'block',
                opacity: 0.82,
                position: 'relative',
              }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-muted)',
          }}>Scroll</span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--color-honey), transparent)',
          }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. PRODUCT SPOTLIGHT
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="product"
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          padding: 'clamp(80px, 8vw, 120px) clamp(24px, 4vw, 48px)',
        }}
      >
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 6vw, 96px)', alignItems: 'center',
        }} className="spotlight__grid">

          {/* Left: product image */}
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/5',
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            boxShadow: '0 16px 60px rgba(154,109,24,0.15), 0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <Image
              src="/images/product-1.jpg"
              alt="Honeysuckle bottle detail"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Right: product details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Eyebrow */}
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-green)',
            }}>
              The Product
            </span>

            {/* Product name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(40px, 4.5vw, 64px)',
                fontWeight: 300, fontStyle: 'italic',
                lineHeight: 1.0, letterSpacing: '-0.02em',
                color: 'var(--color-text-dark)', margin: 0,
              }}>
                Honeysuckle
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-text-muted)', margin: 0,
              }}>
                By Weeping Willow Co.
              </p>
            </div>

            {/* Flavor description */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.75, color: 'var(--color-text-mid)', margin: 0,
            }}>
              Honeysuckle is designed to emulate the sophisticated experience of a cocktail while replacing alcohol&apos;s negative effects with the restorative benefits of ginger, such as aiding digestion and supporting immune health. As you sip, you will discover the sweet warmth of honey harmonizing with bright lemon acidity. The experience concludes with the bold heat of ginger and the grounding, earthy notes of gentian.
              <br /><br />
              Overall, Honeysuckle is a bright, full-bodied beverage with a strong floral profile and a satisfyingly spicy finish. We recommend savoring it slowly; take small sips and allow the complex layers of flavor to wash over your palate.
            </p>

            {/* Flavor callouts */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Raw Honey', 'Citrus', 'Ginger', 'Gentian Bitters'].map(note => (
                <span key={note} style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--color-honey-dark)',
                  background: 'rgba(200,145,42,0.1)',
                  border: '1px solid rgba(154,109,24,0.2)',
                  padding: '7px 14px', borderRadius: '999px',
                }}>
                  {note}
                </span>
              ))}
            </div>

            {/* Shopify Buy Button */}
            <div style={{
              paddingTop: '8px',
              borderTop: '1px solid rgba(154,109,24,0.15)',
            }}>
              {/*
               ┌─────────────────────────────────────────────────────────┐
               │  SHOPIFY BUY BUTTON                                     │
               │  Replace this block with your Shopify embed snippet.    │
               │                                                         │
               │  To generate:                                           │
               │  Shopify Admin → Sales Channels → Buy Button →         │
               │  Create Buy Button → Copy embed code                   │
               │                                                         │
               │  Paste the two script/div tags here.                   │
               └─────────────────────────────────────────────────────────┘
              */}
              <Link
                href="/honeysuckle"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--color-dark)', background: 'var(--color-honey)',
                  padding: '14px 32px', borderRadius: '999px', textDecoration: 'none',
                  transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-honey-light)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,145,42,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--color-honey)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Order Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. FLAVOR STORY — atmospheric, no CTA
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="story"
        style={{
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(100px, 10vw, 160px) clamp(24px, 4vw, 48px)',
          backgroundColor: 'var(--color-dark)',
        }}
      >
        {/* Background lifestyle image */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <Image
            src="/images/craft-bg.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.25 }}
          />
          {/* Dark overlay for legibility */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(28,17,10,0.6) 0%, rgba(28,17,10,0.4) 50%, rgba(28,17,10,0.75) 100%)',
          }} />
        </div>

        {/* Content */}
        <div style={{
          maxWidth: '760px', margin: '0 auto',
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', gap: '28px',
          alignItems: 'center',
        }}>
          {/* Ornament */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.5)' }} />
            <span style={{ color: 'rgba(200,145,42,0.7)', fontSize: '14px' }}>✦</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.5)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            color: 'var(--color-cream)', margin: 0,
          }}>
            Flavour is a craft,<br />
            <span style={{ color: 'var(--color-honey-light)' }}>not a compromise.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.8, color: 'var(--color-cream-muted)',
            maxWidth: '580px', margin: 0,
          }}>
            Every batch we make is built the same way — slowly, carefully, and without
            shortcuts. We use honey instead of refined sweeteners and real juices instead
            of artificial flavors, because the difference is one you can taste and feel.
            This is a drink that rewards your attention.
          </p>

          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(16px, 1.6vw, 20px)',
            fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(200,180,144,0.6)', margin: 0,
          }}>
            — Weeping Willow Co., est. 2024
          </p>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          5. EMAIL SIGNUP — Netlify Forms
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="signup"
        style={{
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(72px, 7vw, 112px) clamp(24px, 4vw, 48px)',
          background: `
            radial-gradient(ellipse 80% 100% at 50% 120%, rgba(200,145,42,0.18) 0%, transparent 60%),
            var(--color-bg-elevated)
          `,
        }}
      >
        <div style={{
          maxWidth: '600px', margin: '0 auto',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column',
          gap: '24px', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>
          {/* Ornament */}
          <span style={{ color: 'var(--color-honey-dark)', fontSize: '18px', opacity: 0.7 }}>✦</span>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            color: 'var(--color-text-dark)', margin: 0,
          }}>
            Be first in the glass.
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.65, color: 'var(--color-text-mid)',
            maxWidth: '420px', margin: 0,
          }}>
            New flavours, limited drops, and early access — straight to your inbox.
            No noise, just the good stuff.
          </p>

          {/* Netlify Form */}
          <form
            name="honeysuckle-signup"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            style={{
              display: 'flex', gap: '10px', width: '100%',
              maxWidth: '480px', flexWrap: 'wrap',
            }}
          >
            <input type="hidden" name="form-name" value="honeysuckle-signup" />
            {/* Honeypot */}
            <p style={{ display: 'none' }}>
              <label>Don&apos;t fill this out: <input name="bot-field" /></label>
            </p>

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              style={{
                flex: 1, minWidth: '200px',
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-text-dark)',
                background: 'rgba(250,243,224,0.8)',
                border: '1.5px solid rgba(154,109,24,0.2)',
                borderRadius: '999px', padding: '13px 20px',
                outline: 'none',
                transition: 'border-color 150ms ease, box-shadow 150ms ease',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--color-honey)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(200,145,42,0.12)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'rgba(154,109,24,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-dark)', background: 'var(--color-honey)',
                padding: '13px 24px', borderRadius: '999px', border: 'none',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-honey-dark)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-honey)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Notify Me
            </button>
          </form>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '11px',
            color: 'var(--color-text-muted)', letterSpacing: '0.03em',
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @keyframes hero-tree-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (max-width: 768px) {
          .hero__grid {
            grid-template-columns: 1fr !important;
          }
          .hero__grid > div:last-child {
            max-width: 280px;
            margin: 0 auto;
          }
          .spotlight__grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .spotlight__grid > div:first-child {
            aspect-ratio: 1/1 !important;
          }
        }
      `}</style>
    </>
  )
}
