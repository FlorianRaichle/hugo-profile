module.exports = {
    content: ['./layouts/**/*.html', './content/**/*.md',"./themes/hugo-profile/layouts/**/*.html",
    "./themes/hugo-profile/content/**/*.{html,md}",],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {content: ''},
                        "code::after": {content: ''}
                    }
                }
            },
            colors: {
                'section-dark':'#dce6f1',
                'primary': '#007bff',
                'secondary':'#6c757d',
                'yellow': '#ffc107',
                'dark': '#343a40',

            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}