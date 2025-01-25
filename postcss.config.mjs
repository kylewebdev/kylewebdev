/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-utopia': require('postcss-utopia')({
      minWidth: 320,
      maxWidth: 1280,
    }),
  },
};

export default config;
