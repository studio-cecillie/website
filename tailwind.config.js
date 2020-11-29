module.exports = {
  purge: {
    enabled: false,
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
