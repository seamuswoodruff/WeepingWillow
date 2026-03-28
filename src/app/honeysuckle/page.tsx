'use client'

import Image from 'next/image'

/* ── Ingredient data ── */
const INGREDIENTS = [
  {
    name: 'Raw Wildflower Honey',
    note: 'Deep floral sweetness with a lingering golden warmth',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 2 L20.4 9.8 L29.6 11.2 L23 17.6 L24.8 26.8 L16 22.2 L7.2 26.8 L9 17.6 L2.4 11.2 L11.6 9.8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-honey)',
  },
  {
    name: 'Elderflower',
    note: 'Delicate, fragrant — a whisper of summer garden at peak bloom',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="16" cy="7" rx="3" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="16" cy="25" rx="3" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="7" cy="16" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="25" cy="16" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="9.5" cy="9.5" rx="3" ry="5" transform="rotate(45 9.5 9.5)" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="22.5" cy="22.5" rx="3" ry="5" transform="rotate(45 22.5 22.5)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-green)',
  },
  {
    name: 'Fresh Lemon',
    note: 'Bright citrus lift — sharp on entry, clean and long on the finish',
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
    name: 'Ginger Root',
    note: 'Warm, gentle heat — builds slowly from the back of the palate',
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
    name: 'Gentian Bitters',
    note: 'Botanical depth that grounds and gives the whole story its structure',
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
    name: 'Spring Water',
    note: 'Pure and clean — the quiet foundation that lets every note breathe',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C16 4 8 14 8 19 C8 23.4 11.6 27 16 27 C20.4 27 24 23.4 24 19 C24 14 16 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 21 C11 21 12 18 15 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
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
            Raw wildflower honey and elderflower open the glass with quiet elegance.
            Fresh lemon brightens the mid-palate, and ginger root carries a slow,
            building warmth to the finish. Gentian bitters thread through everything —
            making Honeysuckle feel complex, grounded, and completely unlike anything else.
          </p>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-border) 0%, transparent 80%)',
            position: 'relative',
          }} />

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', position: 'relative' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 400, letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)',
            }}>
              $XX.XX
            </span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '12px',
              color: 'var(--color-text-muted)', letterSpacing: '0.04em',
            }}>
              per bottle
            </span>
          </div>

          {/* ── SHOPIFY BUY BUTTON EMBED ── */}
          <div style={{ position: 'relative' }}>
            {/* TODO: Replace this placeholder with the Shopify Buy Button embed script.
                Instructions:
                1. In your Shopify admin → Sales Channels → Buy Button
                2. Create a button for Honeysuckle
                3. Copy the embed code and replace the div below
                4. Remove the placeholder button once the embed is live
            */}
            <div style={{
              background: 'var(--color-bg-surface)',
              border: '1.5px dashed var(--color-border)',
              borderRadius: '12px',
              padding: '20px 24px',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                color: 'var(--color-text-muted)', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '12px',
              }}>
                Shopify Buy Button — embed here
              </p>
              {/* Placeholder CTA */}
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
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,145,42,0.32)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--color-honey)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Shipping note */}
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '12px',
            color: 'var(--color-text-muted)', letterSpacing: '0.02em',
            display: 'flex', alignItems: 'center', gap: '6px',
            position: 'relative',
          }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 8h10M8 4l3 4-3 4M11 8h4v3l-1.5 1.5H13M11 8V5l-1-1H2L1 5v5"/>
            </svg>
            Free shipping on orders over $XX — placeholder
          </p>
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
            src="/images/lifestyle-2.jpg"
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
              Every ingredient in Honeysuckle was chosen for a reason. Nothing is there for sweetness alone.
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
          }}>
            <Image
              src="/images/lifestyle-3.jpg"
              alt="Honeysuckle served over ice"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
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
          4. FINAL CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-dark)',
        padding: 'clamp(80px, 10vw, 128px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Background warmth */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,145,42,0.1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(107,147,88,0.06) 0%, transparent 55%)
          `,
          pointerEvents: 'none',
        }} />

        {/* Background image very subtle */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/images/product-hero.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.04 }}
          />
        </div>

        {/* Grain */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }} />

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Ornament */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '32px',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.4)' }} />
            <span style={{ color: 'rgba(200,145,42,0.5)', fontSize: '12px' }}>✦</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.4)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.05,
            color: 'var(--color-cream)',
            marginBottom: '20px',
          }}>
            Every sip was earned.
            <br />
            <span style={{ color: 'var(--color-honey-fill)' }}>This one&apos;s for you.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.75,
            color: 'var(--color-cream-muted)',
            maxWidth: '480px',
            margin: '0 auto 40px',
          }}>
            Honeysuckle was made for the moments that deserve something real.
            Complex, botanical, and completely non-alcoholic.
          </p>

          <button
            style={{
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--color-dark)', background: 'var(--color-honey)',
              padding: '16px 48px', borderRadius: '999px', border: 'none',
              cursor: 'pointer',
              transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-honey-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(200,145,42,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-honey)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Order Honeysuckle
          </button>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '11px',
            color: 'rgba(200,180,144,0.45)', letterSpacing: '0.08em',
            marginTop: '20px',
          }}>
            Free shipping on orders over $XX · Placeholder
          </p>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
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
