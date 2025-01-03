/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: false,
	trailingComma: "none",
	printWidth: 120,
	quoteProps: "consistent",
	singleAttributePerLine: true,
	bracketSameLine: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	tailwindFunctions: ["clsx", "cn"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		},
		{
			files: "*.svelte",
			options: { parser: "svelte" }
		}
	]
};
