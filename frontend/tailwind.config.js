/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // Define your custom colors here
      colors: {
        sidebarColor: '#214351',
        gold: '#FFF2D9',
        actionButton: '#FEC400',
        textLogin: '#9CA7B8',
        loginBorder: '#D1D5DB',
        btnForget: '#D97706'
      },
      fontFamily: {
       sideBarTitle: ["Kodchasan", "sans-serif"],
        sideBarSubtitle: ["Kameron", "serif"],     
        loginText: ["Roboto", "sans-serif"]   
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}