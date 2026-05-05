/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
				'2xl': '3rem',
			},
			screens: {
				'2xl': '1440px',
			},
		},
		extend: {
			colors: {
				page: '#1f1f1f',
				text: '#d9d9d9',
				accent: '#00ff66',
				muted: {
					DEFAULT: '#9a9a9a',
					soft: '#c2c2c2',
					stronger: '#8d8d8d',
				},
				line: {
					DEFAULT: 'rgba(255, 255, 255, 0.10)',
					subtle: 'rgba(255, 255, 255, 0.05)',
				},
			},
			fontFamily: {
				sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
				display: ['Arial Narrow', 'Helvetica Neue Condensed', 'Impact', 'sans-serif'],
				mono: ['IBM Plex Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
			},
			boxShadow: {
				glow: '0 0 0 1px rgba(0, 255, 102, 0.15), 0 20px 60px rgba(0, 0, 0, 0.35)',
			},
			keyframes: {
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(40px) scale(0.98)', filter: 'blur(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-left': {
					from: { opacity: '0', transform: 'translateX(32px)', filter: 'blur(8px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-right': {
					from: { opacity: '0', transform: 'translateX(-32px)', filter: 'blur(8px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-scale': {
					from: { opacity: '0', transform: 'scale(0.9) translateY(18px)', filter: 'blur(12px)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				'soft-rise': {
					from: { opacity: '0', transform: 'translateY(22px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-up': 'fade-up 1100ms cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-left': 'fade-left 1100ms cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-right': 'fade-right 1100ms cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-scale': 'fade-scale 1100ms cubic-bezier(0.16, 1, 0.3, 1) both',
				'soft-rise': 'soft-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
}