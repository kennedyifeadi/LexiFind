/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bouncing: {
          '0%, 100%': { transform: 'translateY(-20%)',
                        animationTimingFunction: 'easeInOut'
           },
          '50%': { transform: 'translateY(0)',
                   animationTimingFunction: 'easeInOut'

          },

        }
      },
      animation: {
        bouncing: 'bouncing 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

