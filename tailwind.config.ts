/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/landingpageComponents/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: "true",
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				phone: {
					min: "10px",
					max: "640px",
				},
				tablet: {
					min: "641px",
					max: "1024px",
				},
				lg: {
					min: "1025px",
					max: "1424px",
				},
				xl: {
					min: "2100px",
					max: "9999px",
				},
			},
			colors: {
				BlackRoxo: "#250034",
				GrennAtomic: "#C1FF72",
				RoxoAtomic: "#AF00F6",
				RoxoBlur: "rgba(175, 0, 246, 0.37)",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				wave: {
					"0%, 100%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(-45deg)",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				wave: "wave 2s infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		backgroundImage: {
			"custom-gradient":
				"linear-gradient(63deg, rgba(51, 194, 192, 0.10) -342.42%, #FFF 96.69%)",
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			bg_banner: "url(./src/assets/background_banner.jpg)",
			bg_phone: "url(./src/assets/back_phone.jpg)",
		},
	},
	plugins: [require("tailwindcss-animate")],
};
