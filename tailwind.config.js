const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#100f10",
				secondary: "#1b1b1b",
				theme: "#242424",
				textWhite: "rgba(#fff,0.96)",
				textLight: "rgba(#fff,0.67)",
			},
		},
	},
	plugins: [],
});
