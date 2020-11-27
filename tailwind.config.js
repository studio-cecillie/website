module.exports = {
  purge: {
    enabled: true,
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
  }
}
