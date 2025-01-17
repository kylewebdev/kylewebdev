import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins-sans)'],
      },
      fontSize: {
        'heading-1': [
          'var(--heading-1)',
          {
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'heading-2': [
          'var(--heading-2)',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'heading-3': [
          'var(--heading-3)',
          {
            lineHeight: '1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        body: [
          'var(--body)',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        small: [
          'var(--small)',
          {
            lineHeight: '1.5',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        tiny: [
          'var(--tiny)',
          {
            lineHeight: '1.5',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        'special-numbers': [
          'var(--special-numbers)',
          {
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        'special-text': [
          'var(--special-text)',
          {
            lineHeight: '1.25',
            letterSpacing: '-0.02em',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        'off-white': 'var(--off-white)',
        'concrete-gray': 'var(--concrete-gray)',
        'soft-pewter': 'var(--soft-pewter)',
        graphite: 'var(--graphite)',
        'deep-charcoal': 'var(--deep-charcoal)',
        'charcoal-black': 'var(--charcoal-black)',
        'muted-teal': 'var(--muted-teal)',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        dither: "url('/dither.svg')",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontSize: 'var(--small)',
            em: {
              // color: 'var(--soft-pewter)',
            },
            h1: {
              fontSize: 'var(--heading-1-small)',
            },
            h2: {
              fontSize: 'var(--heading-2)',
            },
            h3: {
              fontSize: 'var(--heading-3)',
            },
          },
        },
        theme: {
          css: {
            '--tw-prose-body': 'var(--soft-pewter)',
            '--tw-prose-headings': 'var(--off-white)',
            '--tw-prose-lead': 'var(--off-white)',
            '--tw-prose-links': 'var(--off-white)',
            '--tw-prose-bold': 'var(--off-white)',
            '--tw-prose-counters': 'var(--off-white)',
            '--tw-prose-bullets': 'var(--off-white)',
            '--tw-prose-hr': 'var(--off-white)',
            '--tw-prose-quotes': 'var(--off-white)',
            '--tw-prose-quote-borders': 'var(--off-white)',
            '--tw-prose-captions': 'var(--off-white)',
            '--tw-prose-code': 'var(--off-white)',
            '--tw-prose-pre-code': 'var(--off-white)',
            '--tw-prose-pre-bg': 'var(--off-white)',
            '--tw-prose-th-borders': 'var(--off-white)',
            '--tw-prose-td-borders': 'var(--off-white)',

            '--tw-prose-invert-body': 'var(--off-white)',
            '--tw-prose-invert-headings': 'var(--off-white)',
            '--tw-prose-invert-lead': 'var(--off-white)',
            '--tw-prose-invert-links': 'var(--off-white)',
            '--tw-prose-invert-bold': 'var(--off-white)',
            '--tw-prose-invert-counters': 'var(--off-white)',
            '--tw-prose-invert-bullets': 'var(--off-white)',
            '--tw-prose-invert-hr': 'var(--off-white)',
            '--tw-prose-invert-quotes': 'var(--off-white)',
            '--tw-prose-invert-quote-borders': 'var(--off-white)',
            '--tw-prose-invert-captions': 'var(--off-white)',
            '--tw-prose-invert-code': 'var(--off-white)',
            '--tw-prose-invert-pre-code': 'var(--off-white)',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': 'var(--off-white)',
            '--tw-prose-invert-td-borders': 'var(--off-white)',
          },
        },
      }),
    },
  },
  plugins: [tailwindcssAnimate, typography, containerQueries],
} satisfies Config;
