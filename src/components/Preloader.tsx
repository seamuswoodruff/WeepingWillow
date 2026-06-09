'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Preloader() {
  const [phase, setPhase]               = useState<'visible' | 'exiting' | 'gone'>('visible')
  const [entered, setEntered]           = useState(false)
  // exitTransform is computed from the actual hero tree's bounding box just before exit
  const [exitTransform, setExitTransform] = useState('')
  const treeRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const seen = sessionStorage.getItem('wwco-preloader')
    if (seen) {
      setPhase('gone')
      return
    }
    sessionStorage.setItem('wwco-preloader', '1')

    // 40ms before exit: measure the exact hero img (not the wrapper div) so scale is pixel-perfect
    const t0 = setTimeout(() => {
      const heroEl  = document.getElementById('hero-tree')
      const treeEl  = treeRef.current
      if (heroEl && treeEl) {
        // Use the img element inside hero-tree — its rendered width is constrained by maxWidth,
        // which is smaller than the flex container div.  Measuring the div inflates the scale.
        const heroImg   = heroEl.querySelector('img') as HTMLElement | null
        const heroTarget = heroImg ?? heroEl
        const heroRect  = heroTarget.getBoundingClientRect()
        const treeRect  = treeEl.getBoundingClientRect()
        const dx    = (heroRect.left + heroRect.width  / 2) - (treeRect.left + treeRect.width  / 2)
        const dy    = (heroRect.top  + heroRect.height / 2) - (treeRect.top  + treeRect.height / 2)
        const scale = heroRect.width / treeRect.width
        setExitTransform(`translateX(${dx}px) translateY(${dy}px) scale(${scale})`)
      }
    }, 2760)

    const t1 = setTimeout(() => setPhase('exiting'), 2800)
    const t2 = setTimeout(() => setPhase('gone'),    3800)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // One rAF after mount → triggers the entry transition
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (phase === 'gone') return null

  const isExiting = phase === 'exiting'

  return (
    <>
      <style>{`
        @keyframes pl-fade-up {
          from { opacity: 0; transform: translateY(7px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Layer 1: Background — fades quickly ── */}
      <div style={{
        position:       'fixed',
        inset:          0,
        zIndex:         9997,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 38%, rgba(200,145,42,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 30% 70%, rgba(107,147,88,0.06) 0%, transparent 55%),
          var(--color-bg-deep)
        `,
        opacity:       isExiting ? 0 : 1,
        transition:    'opacity 0.7s ease 0.15s',
        pointerEvents: 'none',
      }} />

      {/* ── Layer 2: Centered flex column — tree + text grouped together ── */}
      <div style={{
        position:       'fixed',
        inset:          0,
        zIndex:         9998,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '20px',
        pointerEvents:  isExiting ? 'none' : 'all',
      }}>

        {/* Tree — fades in on mount, slides to hero on exit */}
        <div
          ref={treeRef}
          style={{
            width:      'clamp(130px, 17vw, 210px)',
            flexShrink: 0,
            opacity:    isExiting ? 0 : entered ? 1 : 0,
            transform:  isExiting && exitTransform
              ? exitTransform
              : entered ? 'scale(1)' : 'scale(0.88)',
            transition: isExiting
              // Move to exact landing position, hold opacity at 1 until tree arrives,
              // then fade out quickly so the crossfade with the hero tree is seamless.
              ? `transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease 0.72s`
              : `transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.65s cubic-bezier(0.16,1,0.3,1)`,
          }}
        >
          <img
            src="/images/willow-icon.svg"
            alt=""
            aria-hidden
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Text group — fades out on exit */}
        <div style={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:            '16px',
          opacity:        isExiting ? 0 : 1,
          transition:     'opacity 0.4s ease',
          pointerEvents:  'none',
        }}>
          {/* Ornament */}
          <div style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '12px',
            opacity:    0,
            animation:  'pl-fade-up 0.5s ease-out 1.2s forwards',
          }}>
            <div style={{ width: '38px', height: '1px', background: 'rgba(0,0,0,0.25)' }} />
            <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
              <path d="M4.5,0 L5.6,3.4 L9,4.5 L5.6,5.6 L4.5,9 L3.4,5.6 L0,4.5 L3.4,3.4 Z"
                fill="rgba(0,0,0,0.50)" />
            </svg>
            <div style={{ width: '38px', height: '1px', background: 'rgba(0,0,0,0.25)' }} />
          </div>

          {/* Wordmark */}
          <p style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      'clamp(19px, 3vw, 23px)',
            fontWeight:    400,
            fontStyle:     'italic',
            letterSpacing: '0.02em',
            color:         'var(--color-text-dark)',
            opacity:       0,
            animation:     'pl-fade-up 0.65s ease-out 1.4s forwards',
            margin:        0,
            whiteSpace:    'nowrap',
          }}>
            Weeping Willow Co.
          </p>
        </div>
      </div>
    </>
  )
}
