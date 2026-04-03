'use client'

import Image from 'next/image'
import Link from 'next/link'

const VALUES = [
  {
    heading: 'Craft',
    body: 'We don\'t rush the process. Every ingredient in Honeysuckle was tested in dozens of iterations before we settled on something we\'d be proud to put our name on. Craft isn\'t a marketing word for us — it\'s the standard we hold ourselves to before anything leaves the batch.',
    accent: 'var(--color-honey)',
  },
  {
    heading: 'Honesty',
    body: 'We\'re not trying to convince you that non-alcoholic is "just as good." It\'s different — and different, done right, can be extraordinary. Honeysuckle isn\'t a compromise. It\'s a choice. We\'ll always be straight with you about what we make and why we make it.',
    accent: 'var(--color-green)',
  },
  {
    heading: 'Belonging',
    body: 'The table should have room for everyone. For too long, not drinking meant settling for a glass of sparkling water while everyone else savoured something special. We built Honeysuckle so that moment of choosing a drink could feel genuinely good — for anyone, any evening.',
    accent: 'var(--color-coral)',
  },
]

export default function OurStoryPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          1. PAGE HERO
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: 'clamp(480px, 65vh, 720px)',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        {/* Atmospheric background image */}
        <Image
          src="/images/our-story-hero-v3.jpg"
          alt="Weeping Willow Co. — Our Story"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          priority
        />

        {/* Layered overlays for depth and legibility */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(26,15,6,0.2) 0%, rgba(26,15,6,0.15) 40%, rgba(26,15,6,0.72) 100%)',
        }} />
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 30% 60%, rgba(200,145,42,0.12) 0%, transparent 65%)',
        }} />

        {/* Hero text — anchored to bottom */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1280px', width: '100%',
          margin: '0 auto',
          padding: 'clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)',
        }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(200,145,42,0.7)' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(200,145,42,0.9)',
            }}>
              Our Story
            </span>
          </div>

          {/* Headline — option 1 chosen: quiet confidence, sense of origin */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.0, letterSpacing: '-0.02em',
            color: 'var(--color-cream)',
            maxWidth: '820px',
            margin: 0,
          }}>
            We made the drink<br />
            <span style={{ color: 'var(--color-honey-fill)' }}>we couldn&apos;t find anywhere else.</span>
          </h1>

          {/*
            Headline alternatives considered:
            Option 2: "Some things are worth building from scratch."
              — more universal, less product-specific
            Option 3: "A drink for the moments you want to remember."
              — occasion-led, warmer tone
          */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. ORIGIN STORY
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle warm glow top-right */}
        <div aria-hidden style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(245,201,106,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'start',
          position: 'relative', zIndex: 1,
        }} className="story__grid">

          {/* Left: founder copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--color-honey-dark)',
                }}>
                  How It Started
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                color: 'var(--color-text-dark)',
              }}>
                A gap we couldn&apos;t stop thinking about.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                There is something to be said for the ritual of a good drink. Whether sharing a beer with co-workers after a long shift, enjoying a stimulating drink on your way to class or work, or finding that special drink that compliments your meal perfectly, a good drink is a simple luxury that is irreplaceable in our current society.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                But many of us are making the conscious choice to cut back on alcohol for a variety of reasons. However, we found that all of the non-alcoholic options on the market felt more like watered-down versions of their alcoholic siblings than something that truly shines on its own and does justice to the choice of leaving alcohol behind. This is the problem we kept bumping into.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                We didn&apos;t want sugary mocktails with no depth, sparkling waters dressed up with a garnish, or diet versions of things we didn&apos;t want in the first place. We kept waiting for someone to solve this. Nobody did.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                So our founders got to work and started experimenting in their kitchens with infusions, botanicals, bitters, and honey from a local farm. We made dozens of batches that were either too sweet, too sharp, or just too one-dimensional. Then one evening, we got it right. Something with layers—opening floral, mid-citrus brightness, and a long warm finish from ginger and gentian. That batch became Honeysuckle.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                Weeping Willow Co. exists because we believe the choice not to drink shouldn&apos;t mean choosing something forgettable. It should mean choosing something better.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote style={{
              borderLeft: '2px solid var(--color-honey)',
              paddingLeft: '24px',
              margin: '8px 0 0',
            }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontStyle: 'italic', fontWeight: 300,
                lineHeight: 1.5, letterSpacing: '-0.01em',
                color: 'var(--color-text-dark)',
              }}>
                &ldquo;The choice not to drink shouldn&apos;t mean choosing something forgettable.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(154,109,24,0.15), 0 8px 24px rgba(0,0,0,0.08)',
            }}>
              <Image
                src="/images/product-hero.jpg"
                alt="The origin of Honeysuckle"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(26,15,6,0.25) 100%)',
              }} />
            </div>
            {/* Caption */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '12px',
              letterSpacing: '0.04em', color: 'var(--color-text-muted)',
              textAlign: 'center',
            }}>
              Early batches — kitchen table, 2023.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          4. OUR VALUES
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(107,147,88,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ marginBottom: 'clamp(56px, 6vw, 80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-honey-dark)',
              }}>
                What We Stand For
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 300, fontStyle: 'italic',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)',
            }}>
              Three things we won&apos;t compromise on.
            </h2>
          </div>

          {/* Values */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(24px, 3vw, 40px)',
          }} className="values__grid">
            {VALUES.map((val, i) => (
              <div key={val.heading} style={{
                padding: 'clamp(32px, 3vw, 44px)',
                background: 'var(--color-bg-surface)',
                borderRadius: '16px',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Large background number */}
                <div aria-hidden style={{
                  position: 'absolute', bottom: '-8px', right: '20px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '96px', lineHeight: 1,
                  fontStyle: 'italic',
                  color: 'rgba(154,109,24,0.06)',
                  userSelect: 'none',
                  letterSpacing: '-0.04em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Accent line */}
                <div style={{
                  width: '32px', height: '2px',
                  background: val.accent,
                  borderRadius: '2px',
                }} />

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 400, fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-text-dark)',
                }}>
                  {val.heading}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.75,
                  color: 'var(--color-text-mid)',
                  position: 'relative', zIndex: 1,
                }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. FOUNDER SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-surface)',
        padding: 'clamp(72px, 8vw, 112px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(200,145,42,0.25), transparent)',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ marginBottom: 'clamp(56px, 6vw, 80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-honey-dark)',
              }}>
                The People Behind It
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 300, fontStyle: 'italic',
              letterSpacing: '-0.02em', lineHeight: 1.1,
              color: 'var(--color-text-dark)',
              maxWidth: '560px',
            }}>
              Made by two people who actually care what&apos;s in the glass.
            </h2>
          </div>

          {/* Two founder cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 5vw, 72px)',
          }} className="founder__grid">

            {/* ── Founder 1 — Aidan Stark-Chessa ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: 'clamp(24px, 3vw, 40px)', alignItems: 'flex-start' }} className="founder-card__inner">
                {/* Hexagon portrait */}
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    position: 'relative',
                    width: 'clamp(110px, 14vw, 160px)',
                    aspectRatio: '1/1',
                    clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                    boxShadow: '0 16px 40px rgba(154,109,24,0.18)',
                  }}>
                    <Image
                      src="/images/aidan-stark-chessa.png"
                      alt="Aidan Stark-Chessa, co-founder of Weeping Willow Co."
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 20%', transform: 'scale(1.3)', transformOrigin: 'center 20%' }}
                    />
                    <div aria-hidden style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(160deg, rgba(200,145,42,0.1) 0%, transparent 60%)',
                    }} />
                  </div>
                </div>

                {/* Name & role */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '6px' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, fontStyle: 'italic',
                      letterSpacing: '-0.01em', color: 'var(--color-text-dark)',
                      lineHeight: 1.1, marginBottom: '4px',
                    }}>
                      Aidan Stark-Chessa
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-honey-dark)',
                    }}>
                      Co-Founder &amp; Creator
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.8, color: 'var(--color-text-mid)',
                }}>
                  A Portland, Maine-based bartender and server, Aidan developed Honeysuckle to address the lack of high-quality non-alcoholic options on the market. He began refining the formula in his dorm room during his sophomore year at Bates College — and after perfecting the blend, pitched his concept to Bobcat Ventures to secure the funding needed to produce the first batch.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.8, color: 'var(--color-text-mid)',
                }}>
                  A Philosophy major specialising in Rhetoric and Gender and Race Studies, Aidan is committed to using Honeysuckle to drive real social change — offering a sophisticated alternative that doesn&apos;t ask anyone to compromise. Outside of Weeping Willow Co., he spends his time surfing, skiing, and finding excuses to be outdoors.
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--color-border-light)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px', fontStyle: 'italic', fontWeight: 300,
                  color: 'var(--color-honey-dark)', letterSpacing: '-0.01em',
                }}>
                  Aidan
                </p>
              </div>
            </div>

            {/* ── Founder 2 — Seamus Woodruff ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: 'clamp(24px, 3vw, 40px)', alignItems: 'flex-start' }} className="founder-card__inner">
                {/* Hexagon portrait */}
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    position: 'relative',
                    width: 'clamp(110px, 14vw, 160px)',
                    aspectRatio: '1/1',
                    clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                    boxShadow: '0 16px 40px rgba(154,109,24,0.18)',
                  }}>
                    <Image
                      src="/images/seamus-woodruff.png"
                      alt="Seamus Woodruff, co-founder of Weeping Willow Co."
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                    />
                    <div aria-hidden style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(160deg, rgba(200,145,42,0.1) 0%, transparent 60%)',
                    }} />
                  </div>
                </div>

                {/* Name & role */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '6px' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, fontStyle: 'italic',
                      letterSpacing: '-0.01em', color: 'var(--color-text-dark)',
                      lineHeight: 1.1, marginBottom: '4px',
                    }}>
                      Seamus Woodruff
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-honey-dark)',
                    }}>
                      Co-Founder
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.8, color: 'var(--color-text-mid)',
                }}>
                  Seamus&apos;s story coming soon.
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--color-border-light)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px', fontStyle: 'italic', fontWeight: 300,
                  color: 'var(--color-honey-dark)', letterSpacing: '-0.01em',
                }}>
                  Seamus
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. CLOSING CTA
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-bg-elevated)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Warm glow */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,145,42,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Grain texture */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.022,
        }} />

        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Ornament */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '32px',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(154,109,24,0.4)' }} />
            <span style={{ color: 'rgba(154,109,24,0.5)', fontSize: '12px' }}>✦</span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(154,109,24,0.4)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.1,
            color: 'var(--color-text-dark)',
            marginBottom: '16px',
          }}>
            Now that you know us —<br />
            meet Honeysuckle.
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.75, color: 'var(--color-text-mid)',
            maxWidth: '440px', margin: '0 auto 40px',
          }}>
            The drink we built this company around. Complex, botanical, and made without compromise.
          </p>

          <Link
            href="/honeysuckle"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--color-dark)', background: 'var(--color-honey)',
              padding: '15px 40px', borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background 200ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-honey-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(200,145,42,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-honey)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Discover Honeysuckle →
          </Link>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .story__grid {
            grid-template-columns: 1fr !important;
          }
          .story__grid > div:last-child {
            order: -1;
          }
          .values__grid {
            grid-template-columns: 1fr !important;
          }
          .founder__grid {
            grid-template-columns: 1fr !important;
          }
          .founder-card__inner {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  )
}
