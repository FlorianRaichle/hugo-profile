const defaultTheme = require('tailwindcss/defaultTheme')

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
      opacityValue
        ? `rgb(var(${variable})/ ${opacityValue})`
        : `rgb(var(${variable}))`
  }
  
  
  const bgColor = {
    primary: generateColorClass('mybg-normal'),
  }
  
module.exports = {
    content: ['./layouts/**/*.html', './content/**/*.md',"./themes/hugo-profile/layouts/**/*.html",
    "./themes/hugo-profile/content/**/*.{html,md}",],
    theme: {
        extend: {
            backgroundColor: {
                base: generateColorClass('--mybg-normal'),
                alternate: generateColorClass('--mybg-alternate'),
            },
            textColor: {
                primary: generateColorClass('--text-primary'),
                accent: generateColorClass('--text-accent'),
                light: generateColorClass('--text-light'),
            },
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {content: ''},
                        "code::after": {content: ''}
                    }
                },
            },
            fontFamily: {
                'heading': ['Poppins'],
                'sans': ['Noto Sans KR',...defaultTheme.fontFamily.sans,]
            },  
            fontSize: {
                'base': '1.125rem'
            },
            colors: {
                "light": generateColorClass('--accent-light'),
                'accent':'#007bff',
                'primary': generateColorClass('--primary'),
                'primary-100': generateColorClass('--primary-100'),
                'secondary':'#6c757d',
                'yellow': '#ffc107',

            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}