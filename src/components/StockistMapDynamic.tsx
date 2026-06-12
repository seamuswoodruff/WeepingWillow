'use client'

import dynamic from 'next/dynamic'
import type { StockistPin } from './StockistMap'

const StockistMap = dynamic(() => import('./StockistMap'), {
  ssr: false,
  loading: () => (
    <div style={{
      height: '478px',
      borderRadius: '20px',
      background: 'var(--color-bg-surface)',
      border: '1px solid rgba(154,109,24,0.14)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
      }}>
        Loading map…
      </p>
    </div>
  ),
})

export default function StockistMapDynamic({ stockists }: { stockists: StockistPin[] }) {
  return <StockistMap stockists={stockists} />
}
