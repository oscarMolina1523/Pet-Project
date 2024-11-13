/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	colors: {
  		'surface-neutral': '#FFFFFF',
  		'ligth-surface-neutral': '#F8F8F8',
  		'ligth-gray': '#F3F6FB',
  		'ligth-opac-gray': '#00000029',
  		'dark-orange': '#FF6752',
  		'orange': '#FEB53A',
  		'brown': '#D65C15',
  		'sky-blue': '#4487FF',
  		'light-sky-blue': '#4487FF57',
  		'opac-sky-blue': '#2C1DAD29',
  		'gray': '#707070',
  		'yellow': '#FFE530',
  		'beige': '#FFCC55',
  	},
  	fontFamily: {
  		sans: ["Lato", "sans-serif"]
  	},
  	fontSize: {
  		'display-large': ["32px", { fontWeight: "900" }],
  		'display-medium': ["30px", { fontWeight: "700" }],
  		'display-small': ["28px", { fontWeight: "700" }],
  		'heading-large': ["26px", { fontWeight: "900" }],
  		'heading-medium': ["24px", { fontWeight: "700" }],
  		'heading-small': ["22px", { fontWeight: "700" }],
  		'title-large': ["20px", { fontWeight: "500" }],
  		'title-medium': ["18px", { fontWeight: "500" }],
  		'title-small': ["16px", { fontWeight: "500" }],
  		'body-large': ["16px", { fontWeight: "400" }],
  		'body-medium': ["14px", { fontWeight: "400" }],
  		'body-small': ["12px", { fontWeight: "400" }]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};