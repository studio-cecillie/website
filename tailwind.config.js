module.exports = {
  purge: {
    enabled: false,
    mode: 'all',
    content: [
      './layouts/**/*.html.twig',
    ]
  },
  theme: {
    /*fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },*/
    extend: {
      colors: {
        'saumon': '#FCF0EC',
      }
    }
  },
}
