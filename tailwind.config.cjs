module.exports = {
  content: ['src/**/*.html', 'src/**/*.js', 'src/**/*.svelte', 'index.html'],
  purge: ['src/**/*.js', 'src/**/*.svelte', 'index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
}
