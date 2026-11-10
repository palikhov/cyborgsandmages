const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
				serif: ["Lora Variable", ...defaultTheme.fontFamily.serif]
			},
			colors: {
				brand: {
					heading: "rgb(var(--brand-heading) / <alpha-value>)",
					ivory: "rgb(var(--brand-ivory) / <alpha-value>)",
					gold: "rgb(var(--brand-gold) / <alpha-value>)",
					crimson: "#b91c1c",
					wave: "rgb(var(--brand-wave) / <alpha-value>)",
					mist: "rgb(var(--brand-mist) / <alpha-value>)",
					night: "rgb(var(--brand-night) / <alpha-value>)"
				}
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme("colors.brand[ivory]"),
						"--tw-prose-headings": theme("colors.brand.heading"),
						"--tw-prose-lead": theme("colors.brand[gold]"),
						"--tw-prose-links": theme("colors.brand[wave]"),
						"--tw-prose-bold": theme("colors.brand.heading"),
						"--tw-prose-counters": theme("colors.brand[gold]"),
						"--tw-prose-bullets": theme("colors.brand[gold]"),
						"--tw-prose-hr": theme("colors.brand[gold]"),
						"--tw-prose-quotes": theme("colors.brand.heading"),
						"--tw-prose-quote-borders": theme("colors.brand[gold]"),
						"--tw-prose-captions": theme("colors.brand[gold]"),
						"--tw-prose-code": theme("colors.brand.heading"),
						"--tw-prose-pre-code": theme("colors.white"),
						"--tw-prose-pre-bg": theme("colors.brand[mist]"),
						"--tw-prose-th-borders": theme("colors.brand[ivory]"),
						"--tw-prose-td-borders": theme("colors.brand[gold]")
					}
				}
			})
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
