'use client'

import { useEffect, useRef, useState } from 'react'

const SHOP_DOMAIN  = 'pxkmb5-ey.myshopify.com'
const PRODUCT_ID   = '9168154886293'
const SCRIPT_URL   = 'https://cdn.judge.me/widget_preloader.js'

export default function JudgeMeReviews() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [hasReviews, setHasReviews] = useState<boolean | null>(null) // null = loading

  useEffect(() => {
    // Judge.me requires SHOP_DOMAIN and PLATFORM set as globals before the script runs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    w.jdgm = w.jdgm || {}
    w.jdgm.SHOP_DOMAIN = SHOP_DOMAIN
    w.jdgm.PLATFORM = 'shopify'

    // Avoid loading twice on hot reload
    if (!document.querySelector('script[data-judgeme]')) {
      const script = document.createElement('script')
      script.src = SCRIPT_URL
      script.async = true
      script.setAttribute('data-judgeme', '1')
      document.head.appendChild(script)
    }

    // Poll for widget population — check if Judge.me injected any content
    let attempts = 0
    const check = setInterval(() => {
      attempts++
      const el = widgetRef.current
      if (el && el.children.length > 0) {
        setHasReviews(true)
        clearInterval(check)
      } else if (attempts >= 20) {
        // After ~4s with no content, assume no reviews yet
        setHasReviews(false)
        clearInterval(check)
      }
    }, 200)

    return () => clearInterval(check)
  }, [])

  // Hide section entirely until we know state (avoids flash of empty content)
  if (hasReviews === null) return null

  return (
    <section style={{
      background: 'var(--color-bg-surface)',
      padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 64px)',
      borderTop: '1px solid var(--color-border-light)',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          marginBottom: 'clamp(36px, 4vw, 52px)',
        }}>
          <div style={{ width: '28px', height: '1px', background: 'var(--color-honey)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--color-honey-dark)',
          }}>
            Reviews
          </span>
        </div>

        <h2 style={{
          fontFamily:    'var(--font-heading)',
          fontSize:      'clamp(32px, 4vw, 52px)',
          fontWeight:    300,
          fontStyle:     'italic',
          letterSpacing: '-0.02em',
          lineHeight:    1.05,
          color:         'var(--color-text-dark)',
          marginBottom:  'clamp(36px, 4vw, 52px)',
        }}>
          What people are saying.
        </h2>

        {/* Judge.me widget — populates once script loads */}
        <div ref={widgetRef}
          className="jdgm-widget jdgm-review-widget"
          data-id={PRODUCT_ID}
        />

        {/* Placeholder shown only when no reviews exist yet */}
        {!hasReviews && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            padding: 'clamp(48px, 6vw, 72px) 24px',
            background: 'var(--color-bg-deep)',
            borderRadius: '16px',
            border: '1px solid var(--color-border-light)',
          }}>
            {/* Honeysuckle botanical icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
              <circle cx="20" cy="20" r="19" stroke="var(--color-honey)" strokeOpacity="0.3" strokeWidth="1"/>
              <path d="M20 8 C20 8 14 14 14 20 C14 26 20 32 20 32 C20 32 26 26 26 20 C26 14 20 8 20 8Z"
                fill="none" stroke="var(--color-honey)" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M20 8 L20 32" stroke="var(--color-honey)" strokeWidth="1" strokeOpacity="0.5"/>
              <path d="M14 20 L26 20" stroke="var(--color-honey)" strokeWidth="1" strokeOpacity="0.5"/>
            </svg>

            <div style={{ textAlign: 'center', maxWidth: '360px' }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-text-dark)',
                marginBottom: '10px',
                lineHeight: 1.2,
              }}>
                Be the first to share your thoughts.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
              }}>
                Tried Honeysuckle? We&apos;d love to hear from you.
                Reviews help others discover something worth sipping.
              </p>
            </div>

            <a
              href={`https://judge.me/review/new?shop_domain=${SHOP_DOMAIN}&platform=shopify&product_id=${PRODUCT_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-honey)',
                color: 'var(--color-dark)',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
                border: 'none',
              }}
            >
              Write a Review
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"/>
              </svg>
            </a>
          </div>
        )}

      </div>

      {/* Scope Judge.me widget styles to match brand palette */}
      <style>{`
        .jdgm-widget {
          font-family: var(--font-body) !important;
          color: var(--color-text-dark) !important;
        }
        .jdgm-preview-badge {
          display: none !important;
        }
        .jdgm-rev-widg__header {
          font-family: var(--font-heading) !important;
          font-style: italic !important;
        }
        .jdgm-write-rev-link,
        .jdgm-paginate__page.jdgm-paginate__page--active {
          background: var(--color-honey) !important;
          color: var(--color-dark) !important;
          border-radius: 999px !important;
          border: none !important;
        }
        .jdgm-star.jdgm--on {
          color: var(--color-honey) !important;
        }
        .jdgm-rev__body {
          font-family: var(--font-body) !important;
          line-height: 1.7 !important;
          color: var(--color-text-mid) !important;
        }
        .jdgm-rev__author {
          font-family: var(--font-body) !important;
          font-weight: 600 !important;
          color: var(--color-text-dark) !important;
        }
        .jdgm-rev {
          border-bottom: 1px solid var(--color-border-light) !important;
          padding: 24px 0 !important;
        }
      `}</style>
    </section>
  )
}
