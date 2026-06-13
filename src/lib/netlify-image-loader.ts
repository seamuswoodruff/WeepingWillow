// Netlify Image CDN loader for next/image
// Serves optimized, correctly-sized images via Netlify's built-in CDN
// Docs: https://docs.netlify.com/image-cdn/overview/
export default function netlifyImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (process.env.NODE_ENV === 'development') return src
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality ?? 80),
  })
  return `/.netlify/images?${params}`
}
