'use client'

import Image from 'next/image'
import ShopifyBuyButton from '@/components/ShopifyBuyButton'

/* ── Ingredient data ── */
const INGREDIENTS = [
  {
    name: 'Water',
    note: 'The base of every bottle. Clean and neutral — it carries everything else without getting in the way.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C16 4 8 14 8 19 C8 23.4 11.6 27 16 27 C20.4 27 24 23.4 24 19 C24 14 16 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 21 C11 21 12 18 15 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    color: '#7BAFC4',
  },
  {
    name: 'Honey',
    note: 'Natural sweetness with a warm floral character. The first flavour you notice — present from the first sip to the last.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 2 L20.4 9.8 L29.6 11.2 L23 17.6 L24.8 26.8 L16 22.2 L7.2 26.8 L9 17.6 L2.4 11.2 L11.6 9.8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-honey)',
  },
  {
    name: 'Ginger Juice',
    note: 'Delivers the bold heat and satisfying spicy finish. Known to aid digestion and support immune health.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 24 C8 24 10 18 14 16 C18 14 22 15 24 12 C26 9 25 6 25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 16 C12 13 11 10 13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 14 C20 12 22 10 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="24" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-coral)',
  },
  {
    name: 'Lemon Juice',
    note: 'Bright acidity that balances the honey\'s sweetness and lifts the mid-palate.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 6 L16 26 M6 16 L26 16 M8.9 8.9 L23.1 23.1 M23.1 8.9 L8.9 23.1" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-honey-light)',
  },
  {
    name: 'Gentian Bitters',
    note: 'A traditional botanical bitter. Adds earthy depth and grounding complexity that keeps the sweetness in check.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 28 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 18 C12 16 9 12 10 8 C13 10 16 14 16 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 22 C20 20 23 16 22 12 C19 14 16 18 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 14 C14 10 14 7 16 4 C18 7 18 10 16 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'var(--color-green-dark)',
  },
  {
    name: 'Salt Water',
    note: 'A small but important addition. Salt rounds out the other flavours and brings the whole drink into balance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="11" y="8" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8 L14 5 M18 8 L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="1.5" fill="currentColor" opacity="0.6"/>
        <circle cx="16" cy="18" r="1" fill="currentColor" opacity="0.4"/>
        <circle cx="14" cy="16" r="1" fill="currentColor" opacity="0.4"/>
        <circle cx="18" cy="16" r="1" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    color: '#7BAFC4',
  },
]

const STEPS = [
  {
    num: '01',
    heading: 'Pour over ice',
    body: 'Fill a rocks glass or tall glass generously with fresh ice. The cold unlocks the botanicals.',
  },
  {
    num: '02',
    heading: 'Add your garnish',
    body: 'A thin lemon wheel and a sprig of fresh mint finish the glass beautifully. Optional — but worth it.',
  },
  {
    num: '03',
    heading: 'Sip slowly',
    body: 'Honeysuckle rewards attention. Let each sip unfold. There\'s more in there than the first taste reveals.',
  },
]


export default function HoneysucklePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          1. PRODUCT HERO
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: 'calc(100dvh - 72px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'var(--color-bg-deep)',
        position: 'relative',
        overflow: 'hidden',
      }} className="product-hero__grid">

        {/* Left: product image */}
        <div style={{
          position: 'relative',
          background: 'var(--color-bg-surface)',
          overflow: 'hidden',
        }}>
          <Image
            src="/images/product-hero.jpg"
            alt="Honeysuckle by Weeping Willow Co."
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Warm overlay */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(200,145,42,0.06) 0%, rgba(26,15,6,0.18) 100%)',
          }} />
          {/* Subtle right vignette to blend into right panel */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent 60%, rgba(250,243,224,0.4) 100%)',
          }} />
        </div>

        {/* Right: product details */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(48px, 6vw, 80px) clamp(36px, 5vw, 72px)',
          gap: '28px',
          position: 'relative',
        }}>
          {/* Subtle background texture */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(245,201,106,0.12) 0%, transparent 65%)',
          }} />

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
            <div style={{ width: '24px', height: '1px', background: 'var(--color-honey)' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--color-honey-dark)',
            }}>
              Weeping Willow Co.
            </span>
          </div>

          {/* Product name */}
          <div style={{ position: 'relative' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(52px, 6vw, 80px)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 0.95, letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)',
              margin: 0,
            }}>
              Honeysuckle
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 400,
              letterSpacing: '0.06em', color: 'var(--color-text-muted)',
              marginTop: '10px',
            }}>
              Premium Non-Alcoholic Cocktail · 12 fl oz
            </p>
          </div>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.75,
            color: 'var(--color-text-mid)',
            maxWidth: '440px',
            position: 'relative',
          }}>
            Honey and lemon juice open with warm sweetness and bright acidity.
            Ginger brings bold heat that builds through the finish — with real benefits
            for digestion and immune health. Gentian bitters add earthy depth that
            grounds the whole experience.
          </p>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-border) 0%, transparent 80%)',
            position: 'relative',
          }} />

          {/* Shopify Buy Button — price is pulled live from Shopify */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--color-text-muted)', marginBottom: '10px',
            }}>
              Pack of 12 × 12 oz cans
            </p>
            <ShopifyBuyButton />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. FLAVOR PROFILE — What's Inside
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-dark)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background image at low opacity */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/images/serve-glass.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.07 }}
          />
        </div>

        {/* Decorative radial */}
        <div aria-hidden style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(200,145,42,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ marginBottom: 'clamp(48px, 5vw, 64px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-honey)',
              }}>
                Ingredient Profile
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300, fontStyle: 'italic',
              letterSpacing: '-0.02em', lineHeight: 1.05,
              color: 'var(--color-cream)',
              maxWidth: '520px',
            }}>
              What&apos;s Inside
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.7,
              color: 'var(--color-cream-muted)',
              maxWidth: '480px',
              marginTop: '16px',
            }}>
              Six ingredients. Each one chosen for both its flavour and the role it plays in the overall experience.
            </p>
          </div>

          {/* Ingredient grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }} className="ingredient__grid">
            {INGREDIENTS.map((ing, i) => (
              <div
                key={ing.name}
                style={{
                  padding: 'clamp(28px, 3vw, 40px)',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.015)',
                  border: '1px solid rgba(200,145,42,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'background 250ms ease, border-color 250ms ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,145,42,0.06)'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,145,42,0.2)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.015)'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,145,42,0.08)'
                }}
              >
                <div style={{ color: ing.color, opacity: 0.9 }}>{ing.icon}</div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px', fontWeight: 400, fontStyle: 'italic',
                    color: 'var(--color-cream)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    marginBottom: '6px',
                  }}>
                    {ing.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px', lineHeight: 1.6,
                    color: 'var(--color-cream-muted)',
                  }}>
                    {ing.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. HOW TO ENJOY
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Faint honey gradient */}
        <div aria-hidden style={{
          position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(245,201,106,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(56px, 6vw, 80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-honey-dark)',
              }}>
                Serving Guide
              </span>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300, fontStyle: 'italic',
              letterSpacing: '-0.02em', lineHeight: 1.05,
              color: 'var(--color-text-dark)',
            }}>
              How to Enjoy
            </h2>
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(32px, 4vw, 56px)',
            position: 'relative',
          }} className="steps__grid">

            {/* Connector line between steps */}
            <div aria-hidden style={{
              position: 'absolute',
              top: '42px',
              left: 'calc(16.66% + 20px)',
              right: 'calc(16.66% + 20px)',
              height: '1px',
              background: 'linear-gradient(90deg, var(--color-border) 0%, var(--color-border) 50%, var(--color-border) 100%)',
              zIndex: 0,
            }} className="steps__connector" />

            {STEPS.map((step, i) => (
              <div key={step.num} style={{
                display: 'flex', flexDirection: 'column', gap: '20px',
                position: 'relative', zIndex: 1,
              }}>
                {/* Number badge */}
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '999px',
                  background: i === 0 ? 'var(--color-honey)' : 'var(--color-bg-surface)',
                  border: i === 0 ? 'none' : '1.5px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px', fontWeight: 400, fontStyle: 'italic',
                    color: i === 0 ? 'var(--color-dark)' : 'var(--color-text-muted)',
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 400, fontStyle: 'italic',
                    letterSpacing: '-0.01em',
                    color: 'var(--color-text-dark)',
                    marginBottom: '10px',
                  }}>
                    {step.heading}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px', lineHeight: 1.7,
                    color: 'var(--color-text-mid)',
                  }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lifestyle image accent */}
          <div style={{
            marginTop: 'clamp(56px, 6vw, 80px)',
            position: 'relative',
            height: 'clamp(240px, 30vw, 380px)',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#B8ADA3',
          }}>
            <Image
              src="/images/serve-glass-can.jpg"
              alt="Honeysuckle served over ice"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom',
                transform: 'scale(1.4) translateY(7%)',
                transformOrigin: 'center bottom',
              }}
            />
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(26,15,6,0.5) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '40px', left: '48px',
            }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(20px, 2.5vw, 30px)',
                fontWeight: 300, fontStyle: 'italic',
                color: 'var(--color-cream)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}>
                Best served cold.<br />
                <span style={{ color: 'var(--color-honey-fill)' }}>Best savoured slowly.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. ABOUT THE ARTIST
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border-light)',
      }}>
        {/* Artist botanical background */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/images/artist-background.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }}
          />
        </div>
        {/* Fade overlay to keep text readable */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(250,243,224,0.6) 0%, rgba(250,243,224,0.3) 50%, rgba(250,243,224,0.6) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'center',
          position: 'relative', zIndex: 1,
        }} className="artist__grid">

          {/* Left: headshot */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: 'clamp(180px, 20vw, 260px)',
              aspectRatio: '1 / 1',
              borderRadius: '999px',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src="/images/artist-clara-bossi-2.png"
                alt="Clara Bossi"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 15%', opacity: 0.82 }}
              />
              {/* Soft radial fade to blend edges into background */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle, transparent 55%, rgba(250,243,224,0.35) 80%, rgba(250,243,224,0.75) 100%)',
                borderRadius: '999px',
              }} />
            </div>
          </div>

          {/* Right: text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '1px', background: 'var(--color-honey)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--color-honey-dark)',
                }}>
                  The Art on the Can
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '-0.02em', lineHeight: 1.05,
                color: 'var(--color-text-dark)',
              }}>
                Clara Bossi
              </h2>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.8,
              color: 'var(--color-text-mid)',
              maxWidth: '560px',
            }}>
              [Artist bio — a few sentences about who they are, their practice, and how they came to create the artwork for Honeysuckle. This is a placeholder and should be replaced with the real artist&apos;s story.]
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              lineHeight: 1.8,
              color: 'var(--color-text-mid)',
              maxWidth: '560px',
            }}>
              [Second paragraph — more about the artistic process, inspiration, or connection to the brand. Optional.]
            </p>

            {/* Social / portfolio link placeholder */}
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-honey-dark)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(200,145,42,0.3)',
                paddingBottom: '2px',
                width: 'fit-content',
                transition: 'color 180ms ease, border-color 180ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-honey)'
                e.currentTarget.style.borderColor = 'var(--color-honey)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-honey-dark)'
                e.currentTarget.style.borderColor = 'rgba(200,145,42,0.3)'
              }}
            >
              View their work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .artist__grid {
            grid-template-columns: 1fr !important;
          }
          .artist__grid > div:first-child {
            align-items: flex-start !important;
            flex-direction: row !important;
            gap: 24px !important;
          }
          .product-hero__grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .product-hero__grid > div:first-child {
            height: 360px;
            position: relative !important;
          }
          .ingredient__grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .steps__grid {
            grid-template-columns: 1fr !important;
          }
          .steps__connector {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .ingredient__grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
