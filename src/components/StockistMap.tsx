'use client'

import { useEffect, useRef, useState } from 'react'

export interface StockistPin {
  name: string
  area: string
  tag: string
  href: string
  lat: number | null
  lng: number | null
}

interface Props {
  stockists: StockistPin[]
}

// Custom amber teardrop pin SVG encoded for Leaflet DivIcon
const PIN_SVG = (active: boolean) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46">
    <defs>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="${active ? '4' : '2'}" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path
      d="M18 2C10.268 2 4 8.268 4 16c0 10.5 14 28 14 28s14-17.5 14-28C32 8.268 25.732 2 18 2z"
      fill="${active ? '#E3AE52' : '#C8912A'}"
      stroke="${active ? '#FAF3E0' : 'rgba(250,243,224,0.6)'}"
      stroke-width="${active ? '2' : '1.5'}"
      filter="url(#glow)"
    />
    <circle cx="18" cy="16" r="5" fill="${active ? '#FAF3E0' : 'rgba(250,243,224,0.9)'}"/>
  </svg>
`

export default function StockistMap({ stockists }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return

    // Dynamically import Leaflet (browser only)
    import('leaflet').then((L) => {
      // Fix default icon path issue with webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center: [44.1, -70.2],
        zoom: 7,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      })

      leafletMapRef.current = map

      // CartoDB Voyager tiles — warm, stylized, no API key needed
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Subtle attribution
      L.control.attribution({ prefix: false, position: 'bottomright' })
        .addAttribution('© <a href="https://carto.com/">CARTO</a>')
        .addTo(map)

      // Add zoom control — custom position
      L.control.zoom({ position: 'bottomleft' }).addTo(map)

      // Build markers — skip entries without coordinates
      stockists.forEach((s, i) => {
        if (s.lat === null || s.lng === null) return
        const icon = L.divIcon({
          html: PIN_SVG(false),
          className: 'stockist-pin',
          iconSize: [36, 46],
          iconAnchor: [18, 44],
          popupAnchor: [0, -46],
        })

        const marker = L.marker([s.lat, s.lng], { icon })

        const popupContent = `
          <div style="
            font-family: 'DM Sans', sans-serif;
            min-width: 180px;
            padding: 4px 2px;
          ">
            <span style="
              display: inline-block;
              font-size: 9px;
              font-weight: 600;
              letter-spacing: 0.14em;
              text-transform: uppercase;
              color: #9A6D18;
              background: rgba(200,145,42,0.1);
              border: 1px solid rgba(200,145,42,0.25);
              border-radius: 999px;
              padding: 2px 8px;
              margin-bottom: 6px;
            ">${s.tag}</span>
            <p style="
              font-family: 'Cormorant Garamond', Georgia, serif;
              font-size: 18px;
              font-weight: 400;
              font-style: italic;
              letter-spacing: -0.01em;
              color: #1A0F06;
              margin: 0 0 2px 0;
              line-height: 1.15;
            ">${s.name}</p>
            <p style="
              font-size: 11px;
              color: #8A6A40;
              margin: 0 0 10px 0;
              letter-spacing: 0.03em;
            ">${s.area}</p>
            <a href="${s.href}" target="_blank" rel="noopener noreferrer" style="
              display: inline-flex;
              align-items: center;
              gap: 5px;
              font-size: 10px;
              font-weight: 600;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: #1C110A;
              background: #C8912A;
              padding: 7px 14px;
              border-radius: 999px;
              text-decoration: none;
            ">Visit Site <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"/></svg></a>
          </div>
        `

        marker.bindPopup(popupContent, {
          closeButton: false,
          className: 'stockist-popup',
          maxWidth: 240,
          offset: [0, -8],
        })

        marker.on('click', () => {
          setActiveIndex(i)
          forceUpdate(n => n + 1)
        })

        marker.on('popupclose', () => {
          setActiveIndex(null)
          forceUpdate(n => n + 1)
        })

        marker.addTo(map)
        markersRef.current.push(marker)
      })

      // Enable scroll zoom on click
      map.on('click', () => map.scrollWheelZoom.enable())
      map.on('mouseout', () => map.scrollWheelZoom.disable())
    })

    return () => {
      leafletMapRef.current?.remove()
      leafletMapRef.current = null
      markersRef.current = []
    }
  }, [stockists])

  // Update marker icons when activeIndex changes
  useEffect(() => {
    import('leaflet').then((L) => {
      markersRef.current.forEach((marker, i) => {
        const icon = L.divIcon({
          html: PIN_SVG(i === activeIndex),
          className: 'stockist-pin',
          iconSize: [36, 46],
          iconAnchor: [18, 44],
          popupAnchor: [0, -46],
        })
        marker.setIcon(icon)
      })
    })
  }, [activeIndex])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* Map container */}
      <div style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(154,109,24,0.14)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)',
        height: '580px',
      }}>
        {/* Warm color grading overlay — matches brand parchment palette */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(200,145,42,0.04)',
          zIndex: 400,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }} />

        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

        {/* Scroll-to-zoom hint */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 500,
          background: 'rgba(28,17,10,0.72)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(200,145,42,0.2)',
          borderRadius: '999px',
          padding: '5px 14px',
          pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(240,228,200,0.8)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            Click map to enable scroll zoom
          </p>
        </div>
      </div>

      {/* Leaflet CSS + popup overrides */}
      <style>{`
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');

        .stockist-pin {
          background: none !important;
          border: none !important;
          cursor: pointer;
          transition: transform 150ms cubic-bezier(0.34,1.56,0.64,1);
        }
        .stockist-pin:hover { transform: scale(1.12) translateY(-2px); }

        .stockist-popup .leaflet-popup-content-wrapper {
          background: #FAF3E0;
          border: 1px solid rgba(154,109,24,0.18);
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(200,145,42,0.08);
          padding: 0;
        }
        .stockist-popup .leaflet-popup-content {
          margin: 16px 18px;
        }
        .stockist-popup .leaflet-popup-tip-container {
          display: none;
        }

        /* Zoom control style */
        .leaflet-control-zoom {
          border: 1px solid rgba(154,109,24,0.2) !important;
          border-radius: 10px !important;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08) !important;
        }
        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
          background: #FAF3E0 !important;
          color: #1C110A !important;
          border-bottom: 1px solid rgba(154,109,24,0.15) !important;
          font-size: 16px !important;
          line-height: 26px !important;
          width: 28px !important;
          height: 28px !important;
        }
        .leaflet-control-zoom-in:hover,
        .leaflet-control-zoom-out:hover {
          background: #F2E4C0 !important;
        }

        /* Attribution */
        .leaflet-control-attribution {
          font-size: 9px !important;
          background: rgba(250,243,224,0.8) !important;
          backdrop-filter: blur(4px);
          border-radius: 6px 0 0 0 !important;
          padding: 2px 6px !important;
          color: #8A6A40 !important;
        }
        .leaflet-control-attribution a {
          color: #9A6D18 !important;
        }
      `}</style>
    </div>
  )
}
