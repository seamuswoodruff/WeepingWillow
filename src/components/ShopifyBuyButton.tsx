'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    ShopifyBuy: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => unknown
      UI: {
        onReady: (client: unknown) => Promise<{ createComponent: (type: string, options: unknown) => void }>
      }
    }
  }
}

const SCRIPT_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
const NODE_ID    = 'shopify-buy-btn-honeysuckle'
const PRODUCT_ID = '9168154886293'

export default function ShopifyBuyButton() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    function init() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'pxkmb5-ey.myshopify.com',
        storefrontAccessToken: '13d64d7c6567a6a49f178dc5902b1d7d',
      })

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        const node = document.getElementById(NODE_ID)
        if (!node) return

        ui.createComponent('product', {
          id: PRODUCT_ID,
          node,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              contents: {
                img:   false,
                title: false,
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width':      '100%',
                    'margin-left':    '0px',
                    'margin-bottom':  '0px',
                  },
                },
                button: {
                  'font-family':    'Georgia, "Times New Roman", serif',
                  'font-size':      '11px',
                  'font-weight':    '600',
                  'letter-spacing': '0.12em',
                  'text-transform': 'uppercase',
                  'color':          '#1C110A',
                  'background-color': '#C8912A',
                  'padding':        '15px 0',
                  'border-radius':  '999px',
                  'width':          '100%',
                  ':hover': {
                    'background-color': '#E3AE52',
                  },
                  ':focus': {
                    'background-color': '#E3AE52',
                    'outline':          'none',
                  },
                },
                price: {
                  'font-family': 'Georgia, "Times New Roman", serif',
                  'font-size':   '28px',
                  'color':       '#1C110A',
                },
              },
              text: {
                button: 'Add to Cart',
              },
            },
            cart: {
              styles: {
                button: {
                  'font-family':    'Georgia, "Times New Roman", serif',
                  'font-size':      '11px',
                  'letter-spacing': '0.12em',
                  'text-transform': 'uppercase',
                  'background-color': '#C8912A',
                  'color':          '#1C110A',
                  ':hover': { 'background-color': '#E3AE52' },
                },
              },
              text: {
                total:  'Subtotal',
                button: 'Checkout',
              },
            },
            toggle: {
              styles: {
                toggle: {
                  'background-color': '#C8912A',
                  ':hover': { 'background-color': '#E3AE52' },
                },
              },
            },
            modalProduct: {
              contents: {
                img:              false,
                imgWithCarousel:  true,
                button:           false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width':     '100%',
                    'margin-left':   '0px',
                    'margin-bottom': '0px',
                  },
                },
              },
              text: { button: 'Add to Cart' },
            },
          },
        })
      })
    }

    if (window.ShopifyBuy?.UI) {
      init()
    } else if (window.ShopifyBuy) {
      // SDK is loading — poll until UI is ready
      const poll = setInterval(() => {
        if (window.ShopifyBuy?.UI) {
          clearInterval(poll)
          init()
        }
      }, 50)
    } else {
      const script = document.createElement('script')
      script.async = true
      script.src   = SCRIPT_URL
      script.onload = init
      document.head.appendChild(script)
    }
  }, [])

  return <div id={NODE_ID} />
}
