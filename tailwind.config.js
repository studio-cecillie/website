module.exports = {
  purge: {
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
}
