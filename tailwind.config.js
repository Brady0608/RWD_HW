/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
            "./src/**/*.{html,js,css}",
            "./index.html",
          ],
  theme: {
    extend: {   
      colors: {
        Mycolor:{
          CountainerBg : '#FFFFFF',
          RedOrigin : '#AA0601',
          RedDark :'#650300',
          Black :'#000000', 
      }},
      fontFamily:{'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
                   'roboto-regular' :['Roboto','sans-serif'],
    
    },


  },
  },
  plugins: [],
}

