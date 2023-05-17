/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'sans-serif'],
				serif: ['LoraVariable', 'serif']
			},
			colors: {
				brand: {
					ivory: '#c4b998',
					gold: '#957a4f',
					crimson: '#b91c1c',
					wave: '#a2cdc2',
					mist: '#1d1f28',
					night: '#101217'
				}
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.brand[ivory]'),
						'--tw-prose-headings': theme('colors.white'),
						'--tw-prose-lead': theme('colors.brand[gold]'),
						'--tw-prose-links': theme('colors.brand[wave]'),
						'--tw-prose-bold': theme('colors.brand[ivory]'),
						'--tw-prose-counters': theme('colors.brand[gold]'),
						'--tw-prose-bullets': theme('colors.brand[gold]'),
						'--tw-prose-hr': theme('colors.brand[gold]'),
						'--tw-prose-quotes': theme('colors.white'),
						'--tw-prose-quote-borders': theme('colors.brand[gold]'),
						'--tw-prose-captions': theme('colors.brand[gold]'),
						'--tw-prose-code': theme('colors.white'),
						'--tw-prose-pre-code': theme('colors.white'),
						'--tw-prose-pre-bg': theme('colors.brand[mist]'),
						'--tw-prose-th-borders': theme('colors.brand[ivory]'),
						'--tw-prose-td-borders': theme('colors.brand[gold]')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
