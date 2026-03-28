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
          src="/images/lifestyle-1.jpg"
          alt="Weeping Willow Co. — Our Story"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
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
                A gap I couldn&apos;t stop thinking about.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                I&apos;ve always been drawn to the ritual of a good drink — the way a well-made cocktail can punctuate an evening, signal that the day is done, or make a quiet Tuesday feel like an occasion. But a few years ago, I started cutting back on alcohol. Not dramatically. Just thoughtfully. And I immediately ran into a problem.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                There was nothing worth drinking. Not really. The non-alcoholic options at bars and restaurants ranged from sad to saccharine — sugary mocktails with no depth, sparkling waters dressed up with a garnish, or diet versions of things I didn&apos;t want in the first place. I kept waiting for someone to solve this. Nobody did.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                So I started experimenting in my kitchen. Infusions, botanicals, bitters, honey from a local farm. I made dozens of batches that were either too sweet, too sharp, or just too one-dimensional. Then one evening, I got it right. Something with layers — opening floral, mid-citrus brightness, a long warm finish from ginger and gentian. That batch became Honeysuckle.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.8, color: 'var(--color-text-mid)',
              }}>
                Weeping Willow Co. exists because I believe the choice not to drink shouldn&apos;t mean choosing something forgettable. It should mean choosing something better.
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
          3. THE NAME
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
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(200,145,42,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Botanical illustration placeholder — decorative ring */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 40vw, 560px)',
          height: 'clamp(300px, 40vw, 560px)',
          borderRadius: '999px',
          border: '1px solid rgba(200,145,42,0.06)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(220px, 30vw, 420px)',
          height: 'clamp(220px, 30vw, 420px)',
          borderRadius: '999px',
          border: '1px solid rgba(200,145,42,0.04)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '720px', margin: '0 auto',
          position: 'relative', zIndex: 1,
        }}>
          {/* Ornament */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '36px',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.35)' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,145,42,0.5)" strokeWidth="1">
              <path d="M12 2 C12 2 6 8 6 13 C6 16.3 8.7 19 12 19 C15.3 19 18 16.3 18 13 C18 8 12 2 12 2Z"/>
              <path d="M12 19 L12 22"/>
              <path d="M9 16 C7 14 7 11 9 9"/>
            </svg>
            <div style={{ width: '40px', height: '1px', background: 'rgba(200,145,42,0.35)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.05,
            color: 'var(--color-cream)',
            marginBottom: '36px',
          }}>
            Why the Weeping Willow?
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.85,
            color: 'var(--color-cream-muted)',
            marginBottom: '24px',
          }}>
            The weeping willow is one of the most quietly remarkable trees. Its branches trail the ground without apology — graceful, unhurried, unbothered by the weight they carry. It thrives near water. It bends in wind without breaking. There&apos;s a kind of resilience in that, and a kind of beauty, that we try to bring to everything we make.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.85,
            color: 'var(--color-cream-muted)',
          }}>
            It also just felt right. Understated. A little unexpected. Something you might walk past a hundred times before you really look at it — and then wonder how you ever missed it. That&apos;s exactly what we hope Honeysuckle feels like on the palate.
          </p>

          {/* Italic closing line */}
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontStyle: 'italic', fontWeight: 300,
            color: 'rgba(245,201,106,0.7)',
            letterSpacing: '-0.01em',
            marginTop: '40px',
          }}>
            Resilient. Natural. Quietly sophisticated.
          </p>
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

            {/* ── Founder 1 ── */}
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
                      src="/images/lifestyle-2.jpg"
                      alt="Co-founder of Weeping Willow Co."
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                    <div aria-hidden style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(160deg, rgba(200,145,42,0.1) 0%, transparent 60%)',
                    }} />
                  </div>
                </div>

                {/* Bio text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '6px' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, fontStyle: 'italic',
                      letterSpacing: '-0.01em', color: 'var(--color-text-dark)',
                      lineHeight: 1.1, marginBottom: '4px',
                    }}>
                      [Founder Name]
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-honey-dark)',
                    }}>
                      Co-Founder — [Role Placeholder]
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
                  [Founder Name] spent years working in [relevant industry — food, hospitality, etc.] before turning a personal frustration into a craft project and, eventually, a company. The combination of a trained palate and genuine stubbornness about quality is what makes Honeysuckle taste the way it does.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.8, color: 'var(--color-text-mid)',
                }}>
                  Outside of Weeping Willow Co., [he/she/they] [personal detail — something warm and human]. The same attention that goes into that goes into every batch of Honeysuckle.
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
                  [Founder Name]
                </p>
              </div>
            </div>

            {/* ── Founder 2 ── */}
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
                      src="/images/lifestyle-3.jpg"
                      alt="Co-founder of Weeping Willow Co."
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                    <div aria-hidden style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(160deg, rgba(200,145,42,0.1) 0%, transparent 60%)',
                    }} />
                  </div>
                </div>

                {/* Bio text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '6px' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, fontStyle: 'italic',
                      letterSpacing: '-0.01em', color: 'var(--color-text-dark)',
                      lineHeight: 1.1, marginBottom: '4px',
                    }}>
                      [Founder Name]
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '11px',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-honey-dark)',
                    }}>
                      Co-Founder — [Role Placeholder]
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
                  [Founder Name] brought [complementary skill — operations, design, brand, etc.] to Weeping Willow Co. after years of [relevant background]. Where the product obsession comes from one direction, the care that goes into how it reaches you comes from the other.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.2vw, 15px)',
                  lineHeight: 1.8, color: 'var(--color-text-mid)',
                }}>
                  Outside of the company, [he/she/they] [personal detail]. It&apos;s a small team, and that&apos;s intentional — every decision about Honeysuckle goes through people who care deeply about the outcome.
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
                  [Founder Name]
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
