module.exports = {
  purge: {
    enabled: process.env.CECIL_ENV == 'production',
    mode: 'all',
    content: [
      './layouts/**/*.html.twig',
    ]
  },
  theme: {
    extend: {
      colors: {
        'saumon': '#FCF0EC',
      }
    }
  },
  darkMode: 'media'
}
